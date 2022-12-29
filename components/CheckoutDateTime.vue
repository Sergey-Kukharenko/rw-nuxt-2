<template>
  <checkout-pane title="Date & time" :delim="true">
    <div class="date__tabs">
      <basket-tab ref="dateTab" :list="dateList" size="large" :stretch="true" @click="onTabClick">
        <template #default="{ item }">
          <div class="date__tabs-item">
            <div
              v-if="daySelectIndex === null"
              :class="item.type === 'fix' ? 'date__tabs-item-title' : 'date__tabs-item-label'"
            >
              {{ item.title }}
            </div>
            <div v-else class="date__tabs-item-title">{{ dayList[daySelectIndex]?.weekday }}</div>
            <div class="date__tabs-item-label">
              {{ getDateLabel(item) }}
            </div>
          </div>
        </template>
      </basket-tab>
    </div>
    <div class="date__select">
      <app-select ref="timeSelect" placeholder="Choose delivery time" :list="timeList" size="x-large" dark-label>
        <template #default="{ item, close, setLabel }">
          <div class="date__select-item" @click="onClickTimeItem(item, close, setLabel)">
            <div>
              <app-radio v-model="time" :name="item.id">
                {{ item.label }}
              </app-radio>
            </div>
            <div>{{ item.price || 'Free delivery' }}</div>
          </div>
        </template>
      </app-select>
      <div v-show="error" class="error">
        {{ error }}
      </div>
      <div class="date__fasten">
        <basket-switch v-model="fasten" @change="onChangeDeliveryMode" />
        <div class="date__fasten-group-text">
          <div class="date__fasten-label">Fasten delivery (in 2 hours)</div>
          <div class="date__fasten-price">+ £5</div>
        </div>
      </div>
    </div>
    <checkout-modal ref="dateModal" :width="436" @close="onCloseDayModal">
      <template #title>Choose another day</template>
      <template #default>
        <div class="date__modal-day-list">
          <div
            v-for="(item, index) in dayList"
            :key="index"
            class="date__modal-day-item"
            @click="onClickDayItem(index)"
          >
            <app-radio v-model="daySelectIndex" :name="index" />
            <div class="date__modal-day-label">
              {{ item.month }} {{ item.day }}, <span>{{ item?.weekday }}</span>
            </div>
          </div>
        </div>
      </template>
    </checkout-modal>
  </checkout-pane>
</template>

<script>
import AppSelect from '~/components/shared/AppSelect';
import AppRadio from '~/components/shared/AppRadio';

import { CHECKOUT_FORM_KEYS } from '~/constants';

const monthList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export default {
  name: 'CheckoutDateTime',

  components: {
    AppRadio,
    AppSelect
  },

  props: {
    error: {
      type: String,
      default: ''
    }
  },

  data() {
    const date = new Date();

    return {
      dateList: [
        {
          type: 'fix',
          title: 'Today',
          label: date
        },
        {
          type: 'fix',
          title: 'Tomorrow',
          label: new Date(new Date(date).setDate(date.getDate() + 1))
        },
        {
          type: 'select',
          title: 'Choose',
          label: 'another day'
        }
      ],
      timeList: [
        {
          id: 0,
          label: '9:00 - 12:00 am',
          price: 0
        },
        {
          id: 1,
          label: '12:00 - 3:00 pm',
          price: 0
        },
        {
          id: 2,
          label: '3:00 - 6:00 pm',
          price: 0
        },
        {
          id: 3,
          label: '6:00 - 9:00 pm',
          price: 0
        },
        {
          id: 4,
          label: '9:00 - 12:00 pm',
          price: 0
        },
        {
          id: 5,
          label: '12:00 - 3:00 am',
          price: 0
        },
        {
          id: 6,
          label: '3:00 - 6:00 am',
          price: 0
        },
        {
          id: 7,
          label: '6:00 - 9:00 am',
          price: 0
        }
      ],
      time: 0,
      daySelectIndex: null,
      fasten: false
    };
  },

  computed: {
    dayList() {
      const date = new Date();
      date.setDate(date.getDate() + 2);
      let dayCount = 7;
      const result = [];
      while (dayCount--) {
        result.push({
          month: new Intl.DateTimeFormat('en-ES', { month: 'long' }).format(date),
          day: date.getDate(),
          weekday: new Intl.DateTimeFormat('en-ES', { weekday: 'long' }).format(date)
        });
        date.setDate(date.getDate() + 1);
      }
      return result;
    },

    dateTimeIntervalData() {
      return this.$store.getters['checkout/getCheckout']?.interval;
    },

    isFastenDelivery() {
      return !!this.$store.getters['checkout/getCheckout']?.fast_delivery;
    },

    selectedMonth() {
      return this.dayList[this.daySelectIndex]?.month;
    },

    selectedDay() {
      return this.dayList[this.daySelectIndex]?.day;
    }
  },

  mounted() {
    this.initDateTimeData();
    this.fasten = this.isFastenDelivery;
  },

  methods: {
    getDateLabel(item) {
      if (item.type === 'fix') {
        const month = item.label.getMonth();
        const day = item.label.getDate();
        return `${monthList[month]} ${day}`;
      } else if (this.daySelectIndex !== null) {
        return `${this.selectedMonth} ${this.selectedDay}`;
      }
      return item.label;
    },

    onClickTimeItem(item, close, setLabel) {
      this.time = item.id;
      const price = item.price || 'free delivery';

      setLabel(`${item.label}, ${price}`);
      this.setInterval({ time: item.label });
      this.$emit('set-field', { key: CHECKOUT_FORM_KEYS.dateTime, value: item.label });
      close();
    },

    onTabClick(index) {
      if (this.dateList[index].type === 'select') {
        this.$refs.dateModal.open();
      } else {
        this.daySelectIndex = null;
        const date = new Intl.DateTimeFormat('en-CA').format(this.dateList[index].label);
        this.setInterval({ date });
      }
    },

    onCloseDayModal() {
      if (this.daySelectIndex === null) this.$refs.dateTab.active = 0;
    },

    onClickDayItem(index) {
      const date = new Date(`${this.selectedMonth} ${this.selectedMonth} ${new Date().getFullYear()}`);
      const formatted = new Intl.DateTimeFormat('en-CA').format(date);

      this.setInterval({ date: formatted });

      this.daySelectIndex = index;

      this.$refs.dateModal.close();
    },

    initDateTimeData() {
      const time = this.dateTimeIntervalData?.time;
      const date = new Date();
      const checkoutDate = new Date(this.dateTimeIntervalData?.date);
      const isToday = date === checkoutDate || !this.dateTimeIntervalData?.date;
      const isTomorrow = date.getDay() + 1 === checkoutDate.getDay();

      this.$refs.timeSelect.setLabel(time);

      if (isToday) {
        this.$refs.dateTab.active = 0;
      } else if (isTomorrow) {
        this.$refs.dateTab.active = 1;
      } else {
        this.$refs.dateTab.active = 2;
        this.daySelectIndex = checkoutDate.getDay() - date.getDay();
      }
    },

    onChangeDeliveryMode(status) {
      this.$store.dispatch('checkout/setCheckoutOther', { fast_delivery: status });
    },

    setInterval(payload) {
      this.$store.dispatch('checkout/setCheckoutInterval', { ...payload });
    }
  }
};
</script>

<style lang="scss" scoped>
.date {
  &__tabs {
    @include gt-md() {
      margin-top: 24px;
    }

    @include lt-lg {
      margin-top: 12px;
    }
  }

  &__select {
    @include gt-md() {
      margin-top: 28px;
    }

    @include lt-lg() {
      margin-top: 16px;
    }
  }

  &__tabs-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__tabs-item-title {
    font-family: $golos-medium;
    color: $color-dark-grey;

    @include gt-md() {
      font-size: 16px;
      line-height: 20px;
    }

    @include lt-lg() {
      font-size: 12px;
      line-height: 14px;
      letter-spacing: -0.01em;
    }
  }

  &__tabs-item-label {
    font-family: $golos-regular;
    color: $color-white-grey;

    @include gt-md() {
      font-size: 14px;
      line-height: 20px;
    }

    @include lt-lg() {
      font-size: 12px;
      line-height: 14px;
      letter-spacing: -0.01em;
    }
  }

  &__select-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 44px;
  }

  &__modal-day-list {
    margin-top: -24px;
  }

  &__modal-day-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;

    height: 46px;
    font-family: $golos-regular;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.01em;
    color: #1f2226;
    user-select: none;
    cursor: default;

    &:not(:last-child) {
      border-bottom: 1.5px solid #dde0e6;
    }
  }

  &__modal-day-label {
    & > span {
      color: #7c7c7c;
    }
  }

  &__fasten {
    display: flex;
    flex-direction: row;
    align-items: center;

    @include gt-md {
      margin-top: 34px;
    }

    @include lt-lg {
      justify-content: space-between;
      margin-top: 16px;
    }

    & .switch {
      @include lt-lg {
        flex-shrink: 0;
        order: 1;
      }
    }
  }

  &__fasten-group-text {
    display: flex;
    align-items: center;

    @include lt-lg {
      order: 0;
      display: block;
      max-width: 188px;
    }
  }

  &__fasten-label {
    font-family: $golos-regular;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.01em;
    color: #7c7c7c;

    @include gt-sm() {
      margin: 0 8px 0 12px;
    }
  }

  &__fasten-price {
    font-family: $golos-medium;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.01em;
    color: $color-dark-grey;
    white-space: nowrap;
  }

  .error {
    font-family: $golos-regular;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #db1838;
    padding-left: 18px;
    margin-top: 4px;
  }
}
</style>

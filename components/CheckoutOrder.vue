<template>
  <div class="order">
    <!-- <div class="order__bonuses">
      <div>
        <div class="order__bonuses-title">You have 8 460 bonuses</div>
        <div class="order__bonuses-note">Use 2 680 of them to pay up 50% from this order</div>
      </div>
      <div>
        <basket-switch v-model="bonuses" color="yellow" />
      </div>
    </div> -->
    <app-input v-model="promocode" size="x-large" placeholder="Promocode" note="Unavailable with bonuses">
      <template #right>
        <basket-button
          :size="$device.isMobileOrTablet ? 'medium' : 'small'"
          theme="green"
          :disabled="false"
          align="center"
          style="margin-right: -8px"
          @click="submitHandler"
        >
          Apply
        </basket-button>
      </template>
    </app-input>
    <div class="order__title">Order details</div>
    <template v-if="orderItems.length">
      <div class="order__row" style="margin-top: 16px">
        <div class="order__text-grey order__row-gap" @click="toggleItems">
          <div>{{ orderItems.length }} items</div>
          <svg-icon class="order__icon-chevron" name="chevron" />
        </div>
        <div class="order__text-price">£ {{ orderCost.positionsCost }}</div>
      </div>
      <div class="goods" :class="{ active: itemsVisibility }">
        <div v-for="item in orderItems" :key="item.offer_id" class="goods__item">
          {{item}}
          <div class="goods__item-picture">
            <img :src="item.image.filename" class="goods__item-picture--img" :alt="item.image.alt_text" />
          </div>
          <div class="goods__item-title">{{ item.title }}</div>
        </div>
      </div>
    </template>
    <div v-if="orderCost.sale" class="order__row" style="margin-top: 8px">
      <div class="order__text-grey">Sale</div>
      <div class="order__text-sale">- £ {{ orderCost.sale }}</div>
    </div>
    <div class="order__row" style="margin-top: 8px">
      <div class="order__text-grey">Delivery</div>
      <div class="order__text-price">{{ orderCost.deliveryAmout }}</div>
    </div>
    <div class="order__row order__total">
      <div class="order__text-medium">Total</div>
      <div class="order__text-summary">£ {{ orderCost.totalSum }}</div>
    </div>
    <div v-if="orderCost.cashback" class="order__row">
      <div class="order__text-grey">Cashback</div>
      <div class="order__text-cashback">
        <svg-icon class="order__icon-coins" name="coins" />
        <div>£ {{ orderCost.cashback }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import AppInput from '~/components/shared/AppInput';

export default {
  name: 'CheckoutOrder',

  components: { AppInput },

  data() {
    return {
      bonuses: false,
      promocode: '',
      itemsVisibility: false
    };
  },

  computed: {
    orderItems() {
      return this.$store.getters['checkout/getCheckout']?.positions ?? [];
    },

    orderCost() {
      return {
        positionsCost: this.$store.getters['checkout/getCheckout']?.positions_cost ?? 0,
        deliveryAmout: +this.$store.getters['checkout/getCheckout']?.delivery_amount
          ? `£ ${this.$store.getters['checkout/getCheckout']?.delivery_amount}`
          : 'Free',
        totalSum: this.$store.getters['checkout/getCheckout']?.total_sum ?? 0,
        cashback: +this.$store.getters['checkout/getCheckout']?.cashback ?? 0,
        sale: +this.$store.getters['checkout/getCheckout']?.sale ?? 0
      };
    }
  },

  methods: {
    toggleItems() {
      this.itemsVisibility = !this.itemsVisibility;
    },

    submitHandler() {
      if (!this.promocode) {
        return;
      }

      this.$store.dispatch('checkout/setCheckoutOther', { promo_code: this.promocode });
    }
  }
};
</script>

<style lang="scss" scoped>
.order {
  box-sizing: border-box;
  width: 344px;
  height: fit-content;
  padding: 24px;
  flex-shrink: 0;
  border-radius: 12px;

  @include gt-md {
    border: 1.5px solid #dde0e6;
  }

  @include lt-lg {
    border: none;
    width: 100%;
    padding: 0 0 16px 0;
    margin-bottom: 16px;
    border-bottom: 1px solid #dde0e6;
    border-radius: 0;
  }

  &__bonuses {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
    font-family: $golos-medium;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.01em;
    color: #1f2226;

    @include gt-md {
      background: #fff6e1;
      padding: 12px;
      margin-bottom: 16px;
    }

    @include lt-lg {
      background: #fff3d9;
      padding: 12px 16px;
      margin-bottom: 12px;
    }
  }

  &__bonuses-title {
    font-family: $golos-bold;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.01em;
    color: #342700;

    @include lt-lg {
      opacity: 0.6;
    }
  }

  &__bonuses-note {
    max-width: 146px;
    font-family: $golos-regular;
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 16px;
    letter-spacing: -0.01em;
    color: #342700;
    margin-top: 2px;

    @include lt-lg {
      opacity: 0.6;
    }
  }

  &__title {
    font-family: $golos-bold;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #000000;
    margin-top: 24px;
  }

  &__row {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;
  }

  &__row-gap {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }

  &__text-grey {
    font-family: $golos-regular;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.01em;
    color: #7c7c7c;
    user-select: none;
  }

  &__text-price {
    font-family: $golos-medium;
    font-style: normal;
    font-size: 14px;
    line-height: 20px;
    color: $color-dark-grey;
  }

  &__text-sale {
    font-family: $golos-medium;
    font-style: normal;
    font-size: 14px;
    line-height: 20px;
    color: #009959;
  }

  &__text-medium {
    font-family: $golos-medium;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.01em;
    color: #1f2226;
  }

  &__text-summary {
    font-family: $golos-bold;
    font-style: normal;
    font-size: 16px;
    line-height: 20px;
    color: $color-dark-grey;
  }

  &__total {
    border-top: 1.5px solid #dde0e6;

    @include gt-md {
      padding-top: 18px;
      margin: 16px 0 10px;
    }

    @include lt-lg {
      padding-top: 12px;
      margin: 12px 0 2px;
    }
  }

  &__text-cashback {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;

    font-family: $golos-bold;
    font-size: 14px;
    line-height: 20px;
    font-feature-settings: 'ss08' on;
    color: #ffcd1e;
  }

  &__icon-chevron {
    width: 10px;
    height: 6px;
    color: #f8b900;

    @include gt-sm {
      cursor: pointer;
    }
  }

  &__icon-coins {
    width: 14px;
    height: 13px;
  }

  .goods {
    display: none;
    flex-direction: column;
    gap: 8px;

    padding-top: 8px;

    &.active {
      display: flex;
    }

    &__item {
      display: flex;
      align-items: center;
      gap: 8px;

      &-picture {
        width: 48px;
        height: 48px;

        &--img {
          width: 100%;
          height: 100%;
          border-radius: 12px;
        }
      }

      &-title {
        font-family: $golos-regular;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: -0.01em;
        color: $color-dark-grey;

        max-width: 200px;
      }
    }
  }
}
</style>

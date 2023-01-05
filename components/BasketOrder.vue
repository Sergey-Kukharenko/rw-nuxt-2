<template>
  <div class="order">
    <div class="order__title">Order details</div>
    <div class="order__row" style="margin-top: 16px">
      <div class="order__text-grey">{{ count }} bouquets</div>
      <div class="order__text-price">£ {{ price }}</div>
    </div>
    <div class="order__row" style="margin-top: 6px; display: none">
      <div class="order__text-grey">Sale</div>
      <div class="order__text-sale">- £ 8</div>
    </div>
    <div class="order__delim" style="margin-top: 16px"></div>
    <div class="order__row" style="margin-top: 18px">
      <div class="order__text-medium">Summary</div>
      <div class="order__text-summary">£ {{ price }}</div>
    </div>
    <div class="order__cashback-desktop">
      <svg-icon class="order__icon-coins" name="coins" />
      <div>£0.4 Cashback from this order</div>
    </div>
    <div class="order__row order__cashback-mobile" style="margin-top: 5px">
      <div class="order__text-grey">Cashback</div>
      <div class="order__text-cashback">
        <svg-icon class="order__icon-coins-2" name="coins" />
        <div>£0.4</div>
      </div>
    </div>
    <div class="order__promocode">
      <svg-icon class="order__icon-percent-green" name="percent-green" />
      <div>Promocode and Bonuses will be available at the next stage of order</div>
    </div>

    <template v-if="userNotLoggedIn">
      <div class="order__title" style="margin-top: 32px">Your details</div>
      <form class="form" @submit.prevent="onSubmit">
        <app-input v-model="form.name.value" size="large" placeholder="Your name" />
        <app-number-input :error="form.phone.errorMsg" @set-number="setNumber" />
        <basket-button style="margin-top: 24px" :stretch="true" align="center">Continue</basket-button>
        <div class="order__terms">
          By clicking on the button, you agree to the<br /><a href="#" target="_blank"
            >Terms of personal data processing</a
          >
        </div>
      </form>
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import authManager from '~/mixins/authManager';

export default {
  name: 'BasketOrder',

  components: {
    AppInput: () => import('~/components/shared/AppInput'),
    AppNumberInput: () => import('~/components/shared/AppNumberInput')
  },

  mixins: [authManager],

  data() {
    return {
      form: {
        name: {
          value: '',
          errorMsg: ''
        },
        phone: {
          errorMsg: '',
          value: ''
        }
      }
    };
  },

  computed: {
    ...mapGetters({
      price: 'cart/getPrice',
      count: 'cart/getUniqueCount',
      recipient: 'user/getRecipient'
    }),

    isFormValid() {
      return !this.form.name.errorMsg && !this.form.phone.errorMsg;
    },

    userNotLoggedIn() {
      return !this.recipient;
    }
  },

  methods: {
    setNumber({ value }) {
      this.form.phone = { ...this.form.phone, value };
    },

    async onSubmit() {
      this.form.name.errorMsg = this.isEmptyField(this.form.name.value);
      this.form.phone.errorMsg = this.hasPhoneError(this.form.phone.value);

      if (this.isFormValid) {
        const payload = {
          name: this.form.name.value,
          phone: this.form.phone.value
        };

        await this.$store.dispatch('checkout/setCheckoutRecipent', { ...payload });
        this.$router.push({ name: 'checkout' });
      }
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
  border: 1px solid #dde0e6;
  border-radius: 12px;

  @include lt-lg {
    border: none;
    width: 100%;
    padding: 0;
  }

  &__title {
    font-family: $golos-bold;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: #000000;

    @include lt-lg {
      font-size: 16px;
      line-height: 20px;
    }
  }

  &__row {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;
  }

  &__delim {
    width: 100%;
    border-top: 1px solid #dde0e6;
  }

  &__text-grey {
    font-family: $golos-regular;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.01em;
    color: #7c7c7c;
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

  &__text-price {
    font-family: $golos-medium;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #010810;
  }

  &__text-sale {
    font-family: $golos-medium;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #009959;
  }

  &__text-summary {
    font-family: $golos-bold;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #000000;
  }

  &__cashback-desktop {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;

    background: #fff6e1;
    border-radius: 16px;
    padding: 18px 16px;
    margin-top: 24px;

    font-family: $golos-medium;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.01em;
    color: #1f2226;

    @include lt-lg {
      display: none;
    }
  }

  &__cashback-mobile {
    display: none;

    @include lt-lg {
      display: flex;
    }
  }

  &__text-cashback {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;

    font-family: $golos-regular;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    font-feature-settings: 'ss08' on;
    color: #f8b900;
  }

  &__promocode {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;

    margin-top: 12px;

    font-family: $golos-regular;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.01em;
    color: #7c7c7c;

    @include lt-lg {
      font-size: 12px;
      line-height: 16px;
    }
  }

  &__terms {
    font-family: $golos-regular;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    color: #7c7c7c;
    margin-top: 16px;

    & > a {
      color: #009959;
      text-decoration: none;
    }
  }

  &__icon-coins {
    width: 18px;
    height: 16px;
  }

  &__icon-coins-2 {
    width: 14px;
    height: 13px;
  }

  &__icon-percent-green {
    flex-shrink: 0;
    width: 16px;
    height: 16px;
  }
}

.form {
  display: flex;
  flex-direction: column;
  gap: 8px;

  @include lt-md {
    gap: 12px;
  }
}
</style>

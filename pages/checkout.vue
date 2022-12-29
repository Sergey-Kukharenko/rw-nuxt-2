<template>
  <main class="checkout">
    <div class="checkout__recipient">
      <checkout-recipient />
    </div>
    <div class="checkout__delivery-details">
      <checkout-delivery-details :error="fields.address.errorMsg" @set-field="setField" />
    </div>
    <div class="checkout__date-time">
      <checkout-date-time :error="fields.dateTime.errorMsg" @set-field="setField" />
    </div>
    <div class="checkout__payment-methods">
      <checkout-payment-methods />
    </div>
    <div class="checkout__gift-card">
      <checkout-gift-card />
    </div>
    <div class="checkout__order">
      <checkout-order />
    </div>
    <div class="checkout__email">
      <checkout-email :error="fields.email.errorMsg" @set-field="setField" />
    </div>
    <div class="checkout__submit">
      <basket-button size="large" :stretch="true" @click="handleValidate">
        <div class="checkout__submit-template">
          <div>Place an order</div>
          <div class="checkout__submit-price">£ 86 <span>• Free delivery</span></div>
        </div>
      </basket-button>
    </div>
  </main>
</template>

<script>
import authManager from '~/mixins/authManager';

import { VALIDATE_MESSAGES } from '~/messages';

export default {
  name: 'CheckoutPage',

  mixins: [authManager],

  layout: 'checkout',

  middleware: ['user-recipient'],

  async asyncData({ store }) {
    try {
      await store.dispatch('checkout/fetchCheckout');
    } catch (error) {
      console.error(error);
    }
  },

  data() {
    return {
      fields: {
        address: {
          value: '',
          errorMsg: ''
        },

        dateTime: {
          value: '',
          errorMsg: ''
        },

        email: {
          value: '',
          errorMsg: ''
        }
      }
    };
  },

  computed: {
    isInvalidForm() {
      return Object.keys(this.fields).some((key) => !this.fields[key].value);
    }
  },

  methods: {
    handleValidate() {
      this.resetErrors();

      if (!this.isInvalidForm) {
        this.$router.push({ name: 'order' });

        return;
      }

      Object.keys(this.fields).forEach((key) => {
        if (!this.fields[key].value) {
          if (key === 'email') {
            this.fields[key].errorMsg = this.hasEmailError(this.fields[key].value);

            return;
          }

          this.fields[key].errorMsg = VALIDATE_MESSAGES.required;
        }
      });
    },

    setField({ key, value }) {
      this.fields[key].value = value;
    },

    resetErrors() {
      Object.keys(this.fields).forEach((key) => {
        this.fields[key].errorMsg = '';
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.checkout {
  display: grid;
  grid-template-columns: 1fr 344px;
  grid-template-rows: auto;
  column-gap: 24px;
  max-width: 1080px;

  @include gt-md {
    margin: 38px auto 44px;
  }

  @include lt-lg {
    display: block;
    padding: 0 16px;
    margin: 16px auto 44px;
  }

  &__recipient {
    grid-area: 1 / 1 / 2 / 2;
  }

  &__delivery-details {
    grid-area: 2 / 1 / 3 / 2;
  }

  &__date-time {
    grid-area: 3 / 1 / 4 / 2;
  }

  &__payment-methods {
    grid-area: 4 / 1 / 5 / 2;
  }

  &__gift-card {
    grid-area: 5 / 1 / 6 / 2;
  }

  &__order {
    grid-area: 1 / 2 / 7 / 3;
  }

  &__email {
    grid-area: 6 / 1 / 7 / 2;
  }

  &__submit {
    margin-bottom: 30px;
  }

  &__submit-template {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  &__submit-price {
    font-family: $golos-bold;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;

    span {
      color: #ffffff77;
    }

    @include lt-lg {
      font-size: 14px;
    }
  }
}
</style>

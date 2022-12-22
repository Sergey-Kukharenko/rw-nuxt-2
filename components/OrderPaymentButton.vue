<template>
  <client-only>
    <div v-if="isMounted" class="payment__button">
      <template v-if="isPaypalPaymentMethod">
        <paypal-checkout
          env="sandbox"
          :amount="$options.PAYPAL.amount"
          :currency="$options.PAYPAL.currency"
          :button-style="$options.PAYPAL.styles"
          :client="$options.PAYPAL.credentials"
          :experienc="$options.PAYPAL.experienceOptions"
          @payment-completed="paypalPaymentCompleted"
        >
        </paypal-checkout>
      </template>
      <template v-if="isStripePaymentMethod">
        <stripe-checkout
          ref="checkoutRef"
          mode="payment"
          :pk="$options.STRIPE.publicKey"
          :line-items="$options.STRIPE.paymentConf.lineItems"
          :success-url="$options.STRIPE.successURL"
          :cancel-url="$options.STRIPE.cancelURL"
          @loading="(v) => (loading = v)"
        />
        <app-button theme="green" stretch="full" @click="payByStripe">Go to payment</app-button>
      </template>
    </div>
  </client-only>
</template>

<script>
import AppButton from '~/components/shared/AppButton';

import { STRIPE, PAYPAL } from '~/constants/payment';
import paymentMethodsData from '~/data/payment-methods';

const [STRIPE_METHOD, PAYPAL_METHOD] = paymentMethodsData;

export default {
  name: 'OrderPaymentButton',

  components: {
    AppButton,
    StripeCheckout: () => import('@vue-stripe/vue-stripe').then(({ StripeCheckout }) => StripeCheckout),
    PaypalCheckout: () => import('vue-paypal-checkout')
  },

  props: {
    paymentMethod: {
      type: Object,
      default: () => STRIPE_METHOD
    }
  },

  data() {
    return {
      isMounted: false
    };
  },

  STRIPE,
  PAYPAL,

  computed: {
    isPaypalPaymentMethod() {
      return this.paymentMethod.name === PAYPAL_METHOD.name;
    },

    isStripePaymentMethod() {
      return this.paymentMethod.name === STRIPE_METHOD.name;
    }
  },

  mounted() {
    this.isMounted = true;
  },

  methods: {
    payByStripe() {
      this.$refs.checkoutRef.redirectToCheckout();
    },

    paypalPaymentCompleted(response) {
      console.log('Paypal payment has been completed', response);
    }
  }
};
</script>

<style lang="scss" scoped>
.payment__button {
  position: relative;
  z-index: 1;
  width: 100%;
}
</style>

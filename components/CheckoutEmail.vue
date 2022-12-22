<template>
  <checkout-pane title="Enter your Email">
    <div class="email">
      <div class="email__field-column">
        <app-input value="" placeholder="Email for receiving bonuses" size="x-large" @input="onInput" />
        <div v-show="error" class="error">
          {{ error }}
        </div>
        <div class="email__radio">
          <app-radio value=""
            >I would like to receive exclusive deals, information on the latest products and relevant offers</app-radio
          >
        </div>
      </div>
      <div class="email__field-column">
        <div class="email__field-row">
          <svg-icon class="email__icon-newsfeed" name="newsfeed-green" />
          <div>We’ll send receipt to your Email</div>
        </div>
        <div class="email__field-row">
          <svg-icon class="email__icon-place" name="place-green" />
          <div>You’ll be able to track the order status</div>
        </div>
      </div>
    </div>
  </checkout-pane>
</template>

<script>
import AppInput from '~/components/shared/AppInput';
import AppRadio from '~/components/shared/AppRadio';

import { CHECKOUT_FORM_KEYS } from '~/constants';

export default {
  name: 'CheckoutEmail',

  components: {
    AppRadio,
    AppInput
  },

  props: {
    error: {
      type: String,
      default: ''
    }
  },

  methods: {
    onInput(value) {
      this.$emit('set-field', { key: CHECKOUT_FORM_KEYS.email, value });
    }
  }
};
</script>

<style lang="scss" scoped>
.email {
  display: flex;
  flex-direction: row;
  width: 100%;

  font-family: $golos-regular;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.01em;
  color: #1f2226;

  @include gt-md {
    gap: 29px;
    margin-top: 28px;
  }

  @include lt-lg {
    gap: 12px;
    flex-direction: column;
    margin-top: 12px;
  }

  &__radio {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    flex: 1 0 auto;
    padding: 12px 6px 0;

    .app-radio {
      font-family: $golos-regular;
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      color: #1f2226;

      @include lt-lg {
        gap: 12px;
      }
    }
  }

  &__field-column {
    display: flex;
    flex-direction: column;
    width: 50%;

    @include lt-lg {
      width: 100%;
    }
  }

  &__field-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 8px;

    @include gt-md {
      gap: 8px;
    }

    @include lt-lg {
      gap: 12px;
      font-family: $golos-regular;
      font-size: 11px;
      line-height: 16px;
    }
  }

  &__icon-newsfeed,
  &__icon-place {
    @include gt-md {
      width: 20px;
      height: 20px;
    }

    @include lt-lg {
      width: 24px;
      height: 24px;
    }
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

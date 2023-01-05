<template>
  <checkout-pane title="Recipient" :delim="true">
    <div class="recipient__select">
      <div class="recipient__radio-row">
        <app-radio v-model="recipient" name="myself"> I’ll get order by myself </app-radio>
      </div>
      <div class="recipient__radio-row">
        <app-radio v-model="recipient" name="another"> Another recipient </app-radio>
      </div>
    </div>

    <div v-if="recipient === 'another'" class="recipient__another-name">
      <app-input
        :value="form.name.value"
        placeholder="Recipient name"
        size="x-large"
        :error="form.name.errorMsg"
        @input="setName"
      />
      <app-number-input :error="form.phone.errorMsg" @set-number="setNumber" />
    </div>
  </checkout-pane>
</template>

<script>
import debounce from 'lodash.debounce';

import AppRadio from '~/components/shared/AppRadio';
import AppInput from '~/components/shared/AppInput';
import authManager from '~/mixins/authManager';

import { CHECKOUT_INPUT_DELAY, CHECKOUT_FORM_KEYS } from '~/constants';

export default {
  name: 'CheckoutRecipient',

  components: {
    AppRadio,
    AppInput,
    AppNumberInput: () => import('~/components/shared/AppNumberInput')
  },

  mixins: [authManager],

  props: {
    nameError: {
      type: String,
      default: ''
    },

    phoneError: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      recipient: 'myself',

      form: {
        name: {
          value: '',
          errorMsg: ''
        },

        phone: {
          value: '',
          errorMsg: ''
        }
      }
    };
  },

  computed: {
    recipientData() {
      return this.$store.getters['checkout/getCheckout']?.recipient || {};
    },

    hasRecipientData() {
      return this.recipientData?.name && this.recipientData?.phone;
    }
  },

  watch: {
    nameError(val) {
      this.form.name.errorMsg = val;
    },

    phoneError(val) {
      this.form.phone.errorMsg = val;
    }
  },

  mounted() {
    this.initRecipientData();
  },

  methods: {
    setNumber: debounce(function ({ value, isValid }) {
      this.form.phone = { ...this.form.phone, value, errorMsg: value && this.hasPhoneError(!!value) };
      this.$emit('set-field', { key: CHECKOUT_FORM_KEYS.phone, status: isValid });

      if (this.form.phone.errorMsg || !value) {
        return;
      }

      this.setRecipient({ name: this.form.name.value, phone: this.form.phone.value });
    }, CHECKOUT_INPUT_DELAY),

    setName: debounce(function () {
      this.form.name.errorMsg = this.isEmptyField(this.form.name.value);
      this.$emit('set-field', { key: CHECKOUT_FORM_KEYS.name, status: !this.form.name.errorMsg });

      if (!this.form.name.errorMsg) {
        return;
      }

      this.setRecipient({ name: this.form.name.value, phone: this.form.phone.value });
    }, CHECKOUT_INPUT_DELAY),

    setRecipient(payload) {
      this.$store.dispatch('checkout/setCheckoutRecipent', { ...payload });
    },

    initRecipientData() {
      if (!this.hasRecipientData) {
        this.recipient = 'another';

        return;
      }

      this.$emit('set-field', { key: CHECKOUT_FORM_KEYS.name });
      this.$emit('set-field', { key: CHECKOUT_FORM_KEYS.phone });
    }
  }
};
</script>

<style lang="scss" scoped>
.recipient {
  &__select {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 24px;
  }

  &__radio-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;

    @include lt-lg {
      &:not(:last-child) {
        margin-bottom: -4px;
      }
    }
  }

  &__another-name {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 24px;
    margin-top: 16px;

    & > div {
      flex: 1;
    }

    @include lt-lg {
      flex-direction: column;
      align-items: stretch;
      gap: 12px;
      margin-top: 12px;
    }
  }
}
</style>

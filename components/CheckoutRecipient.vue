<template>
  <checkout-pane title="Recipient" :delim="true">
    <!-- <div class="recipient__select">
      <div class="recipient__radio-row">
        <app-radio v-model="recipient" name="myself"> I’ll get order by myself </app-radio>
      </div>
      <div class="recipient__radio-row">
        <app-radio v-model="recipient" name="another"> Another recipient </app-radio>
      </div>
    </div>
    <div v-if="recipient === 'another'" class="recipient__another-name">
      <app-input placeholder="Recipient name" value="" size="x-large" />
      <app-input placeholder="And phone number" value="" size="x-large" />
    </div> -->

    <div class="recipient__another-name">
      <app-input :value="form.name" placeholder="Recipient name" size="x-large" @input="setName" />
      <app-input
        placeholder="And phone number"
        :value="form.phone.value"
        size="x-large"
        :error="form.phone.errorMsg"
        @input="setNumber"
      />
    </div>
  </checkout-pane>
</template>

<script>
import debounce from 'lodash.debounce';

// import AppRadio from '~/components/shared/AppRadio';
import AppInput from '~/components/shared/AppInput';
import authManager from '~/mixins/authManager';

import { useObjectNotEmpty } from '~/helpers';
import { CHECKOUT_INPUT_DELAY } from '~/constants/index';

export default {
  name: 'CheckoutRecipient',

  components: {
    // AppRadio,
    AppInput
    // AppNumberInput: () => import('~/components/shared/AppNumberInput')
  },

  mixins: [authManager],

  data() {
    return {
      recipient: 'myself',

      form: {
        name: '',
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

    recipientDataFromBusket() {
      return this.$store.getters['user/getRecipient'] || {};
    },

    isRecipientDataFromBusket() {
      return useObjectNotEmpty(this.recipientDataFromBusket);
    }
  },

  mounted() {
    this.initRecipientData();
  },

  methods: {
    setNumber: debounce(function (value) {
      this.form.phone = { ...this.form.phone, value, errorMsg: this.hasPhoneError(!!value) };

      if (this.form.phone.errorMsg) {
        return;
      }

      this.setRecipient({ name: this.form.name, phone: this.form.phone.value });
    }, CHECKOUT_INPUT_DELAY),

    setName: debounce(function () {
      if (!this.form.name) {
        return;
      }

      this.setRecipient({ name: this.form.name, phone: this.form.phone.value });
    }, CHECKOUT_INPUT_DELAY),

    setRecipient(payload) {
      this.$store.dispatch('checkout/setCheckoutRecipent', { ...payload });
    },

    initRecipientData() {
      if (this.isRecipientDataFromBusket) {
        this.form.name = this.recipientDataFromBusket.name;
        this.form.phone.value = this.recipientDataFromBusket.phone;

        this.setRecipient({ name: this.form.name, phone: this.form.phone.value });
        return;
      }

      if (this.recipientData?.name) this.form.name = this.recipientData?.name;
      if (this.recipientData?.phone) this.form.phone.value = this.recipientData?.phone;
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

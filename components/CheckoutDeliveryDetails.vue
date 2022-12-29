<template>
  <checkout-pane title="Delivery details" :delim="true">
    <div class="delivery-details__note">Specify in more detail how to get the courier to you</div>
    <div class="delivery-details__address">
      <!-- <app-select placeholder="Choose delivery address" size="x-large" :list="addressList">
        <template #default="{ item, close, setLabel }">
          <div class="delivery-details__address-item" @click="onClickAddressItem(item, close, setLabel)">
            <div class="delivery-details__address-item-left">
              <app-radio v-model="form.addressSelect" :name="item.id" />
              <div>{{ item.label }}</div>
            </div>
            <div class="delivery-details__address-item-right" @click.stop="editAddress(item, close)">
              <svg-icon class="delivery-details__icon-edit" name="edit" />
            </div>
          </div>
        </template>
      </app-select> -->
      <app-input v-model="form.address" placeholder="Set delivery address" size="x-large" disabled>
        <template #right>
          <basket-button align="center" size="small" theme="white" @click="$refs.addressModal.open()">{{
            addressText
          }}</basket-button>
        </template>
      </app-input>
      <div v-show="error" class="error">
        {{ error }}
      </div>
    </div>
    <div class="delivery-details__commentary">
      <app-input
        v-model="form.commentForCourier"
        placeholder="Commentary for courier"
        size="x-large"
        @input="setComment"
      />
    </div>
    <checkout-modal ref="addressModal" :width="712">
      <template #title>{{ addressText }} address</template>
      <template #default>
        <div class="delivery-details__modal-content">
          <app-input v-model="modalForm.postalCode" placeholder="Postcode" size="x-large">
            <!-- <template #right>
              <basket-button size="small" theme="white"> Find</basket-button>
            </template> -->
          </app-input>
          <div class="delivery-details__modal-window-address">
            <app-input
              v-model="modalForm.address1"
              placeholder="Address line 1"
              size="x-large"
              :error="modalForm.error"
            />
            <app-input v-model="modalForm.address2" placeholder="Address line 2" size="x-large" />
          </div>
          <app-textarea v-model="modalForm.comment" placeholder="Commentary for courier" />
          <basket-button align="center" @click="saveAddress">Save address</basket-button>
        </div>
      </template>
    </checkout-modal>
  </checkout-pane>
</template>

<script>
import debounce from 'lodash.debounce';
// import AppSelect from '~/components/shared/AppSelect';
import AppInput from '~/components/shared/AppInput';
// import AppRadio from '~/components/shared/AppRadio';
import CheckoutModal from '~/components/CheckoutModal';
import AppTextarea from '~/components/shared/AppTextarea';

import { CHECKOUT_FORM_KEYS, CHECKOUT_INPUT_DELAY } from '~/constants';
import { VALIDATE_MESSAGES } from '~/messages';

export default {
  name: 'CheckoutDeliveryDetails',

  components: {
    AppTextarea,
    // AppRadio,
    AppInput,
    // AppSelect,
    CheckoutModal
  },

  props: {
    error: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      form: {
        addressSelect: '',
        address: '',
        commentForCourier: ''
      },

      modalForm: {
        postalCode: '',
        address1: '',
        address2: '',
        comment: '',
        error: ''
      }
    };
  },

  computed: {
    addressList() {
      return new Array(30).fill({ id: '', label: '' }).map((_, index) => ({
        id: `addr${index}`,
        label: `address ${index}`
      }));
    },

    deliveryDetails() {
      return this.$store.getters['checkout/getCheckout']?.shipping_address ?? {};
    },

    addressText() {
      return this.form.address ? 'Edit' : 'Create';
    }
  },

  mounted() {
    this.initDeleveryDetails();
  },

  methods: {
    onClickAddressItem(item, close, setLabel) {
      this.form.addressSelect = item.id;
      setLabel(item.label);
      this.$emit('set-field', { key: CHECKOUT_FORM_KEYS.address, value: item.label });
      close();
    },

    editAddress(item, close) {
      close();
      this.$refs.addressModal.open();
    },

    initDeleveryDetails() {
      this.form.address = this.$store.getters['checkout/getCheckout']?.shipping_address?.address1 || '';
      this.form.commentForCourier = this.$store.getters['checkout/getCheckout']?.shipping_address?.comment || '';

      Object.keys(this.modalForm).forEach((key) => {
        if (this.deliveryDetails?.[key]) {
          this.modalForm[key] = this.deliveryDetails[key];
        }

        if (key === 'postalCode' && this.deliveryDetails?.postal_code) {
          this.modalForm[key] = this.deliveryDetails.postal_code;
        }
      });
    },

    async saveAddress() {
      if (!this.modalForm.address1) {
        this.modalForm.error = VALIDATE_MESSAGES.required;

        return;
      }

      this.modalForm.error = '';

      const { postalCode, error, ...props } = this.modalForm;

      await this.$store.dispatch('checkout/setCheckoutAddress', {
        ...props,
        postal_code: postalCode,
        full_address: 'test'
      });

      this.form.address = `${props.address1} ${props.address2}`;
      this.form.comment = props.comment;

      this.$refs.addressModal.close();
    },

    setComment: debounce(async function (value) {
      if (!value) {
        return;
      }

      await this.$store.dispatch('checkout/setCheckoutAddress', {
        full_address: 'Test',
        comment: value
      });

      this.form.comment = value;
    }, CHECKOUT_INPUT_DELAY)
  }
};
</script>

<style lang="scss" scoped>
.delivery-details {
  &__note {
    font-family: $golos-regular;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.01em;
    color: #000000;
    margin-top: 8px;
  }

  &__address {
    margin-top: 16px;
  }

  &__address-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
    height: 44px;

    font-family: $golos-regular;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.01em;
    color: #1f2226;
    user-select: none;
    cursor: default;
  }

  &__address-item-left {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
  }

  &__address-item-right {
    padding: 4px;
  }

  &__commentary {
    margin-top: 8px;
  }

  &__modal-content {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  &__modal-window-address {
    display: flex;
    flex-direction: row;
    gap: 12px;

    @include lt-lg {
      flex-direction: column;
      align-items: stretch;
    }
  }

  &__icon-edit {
    width: 16px;
    height: 16px;
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

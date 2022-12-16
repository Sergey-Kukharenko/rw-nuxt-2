<template>
  <checkout-pane title="Delivery details" :delim="true">
    <div class="delivery-details__note">Specify in more detail how to get the courier to you</div>
    <div class="delivery-details__address">
      <app-select placeholder="Choose delivery address" size="x-large" :list="addressList">
        <template #default="{ item, close, setLabel }">
          <div class="delivery-details__address-item" @click="onClickAddressItem(item, close, setLabel)">
            <div class="delivery-details__address-item-left">
              <app-radio v-model="addressSelect" :name="item.id" />
              <div>{{ item.label }}</div>
            </div>
            <div class="delivery-details__address-item-right" @click.stop="editAddress(item, close)">
              <svg-icon class="delivery-details__icon-edit" name="edit" />
            </div>
          </div>
        </template>
      </app-select>
      <div v-show="error" class="error">
        {{ error }}
      </div>
    </div>
    <div class="delivery-details__commentary">
      <app-input value="" placeholder="Commentary for courier" size="x-large" />
    </div>
    <checkout-modal ref="addressModal" :width="712">
      <template #title>Edit address</template>
      <template #default>
        <div class="delivery-details__modal-content">
          <app-input value="" placeholder="Postcode" size="x-large">
            <template #right>
              <basket-button size="small" theme="white"> Find </basket-button>
            </template>
          </app-input>
          <div class="delivery-details__modal-window-address">
            <app-input value="" placeholder="Address line 1" size="x-large" />
            <app-input value="" placeholder="Address line 2" size="x-large" />
          </div>
          <app-textarea value="" placeholder="Commentary for courier" />
          <basket-button align="center">Save address</basket-button>
        </div>
      </template>
    </checkout-modal>
  </checkout-pane>
</template>

<script>
import AppSelect from '~/components/shared/AppSelect';
import AppInput from '~/components/shared/AppInput';
import AppRadio from '~/components/shared/AppRadio';
import CheckoutModal from '~/components/CheckoutModal';
import AppTextarea from '~/components/shared/AppTextarea';

import { CHECKOUT_FORM_KEYS } from '~/constants';

export default {
  name: 'CheckoutDeliveryDetails',

  components: {
    AppTextarea,
    AppRadio,
    AppInput,
    AppSelect,
    CheckoutModal,
  },

  props: {
    error: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      addressSelect: '',
    };
  },

  computed: {
    addressList() {
      return new Array(30).fill({ id: '', label: '' }).map((_, index) => ({
        id: `addr${index}`,
        label: `address ${index}`,
      }));
    },
  },

  methods: {
    onClickAddressItem(item, close, setLabel) {
      this.addressSelect = item.id;
      setLabel(item.label);
      this.$emit('set-field', { key: CHECKOUT_FORM_KEYS.address, value: item.label });
      close();
    },
    editAddress(item, close) {
      close();
      this.$refs.addressModal.open();
    },
  },
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
    align-items: center;
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

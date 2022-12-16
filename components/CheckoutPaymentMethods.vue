<template>
  <checkout-pane title="Payment methods">
    <div class="payment">
      <div class="payment__tabs">
        <basket-tab
          size="extra-large"
          :list="list"
        >
          <template #default="{item}">
            <div class="payment__tab-item">
              <svg-icon
                class="payment__icon-item"
                :name="item.icon"
              />
              <div>{{item.label}}</div>
            </div>
          </template>
        </basket-tab>
      </div>
      <div class="payment__select">
        <app-select
          ref="paymentSelect"
          size="x-large"
          placeholder="Payment methods"
          :list="list"
        >
          <template #label>
            <div class="payment__select-label">
              <svg-icon
                class="payment__icon-select"
                :name="list[select].iconSelect"
              />
              <div>{{ list[select].label }}</div>
            </div>
          </template>
          <template #default="{item, index, close}">
            <div
              class="payment__select-item"
              @click="onClickSelect(index, close)"
            >
              <div class="payment__select-item-left">
                <app-radio
                  :value="select"
                  :name="index"
                />
                <div>{{item.label}}</div>
              </div>
              <div class="payment__select-item-right">
                <svg-icon
                  class="payment__icon-select"
                  :name="item.icon"
                />
              </div>
            </div>
          </template>
        </app-select>
      </div>
    </div>
  </checkout-pane>
</template>

<script>
import AppSelect from "~/components/shared/AppSelect";
import AppRadio from "~/components/shared/AppRadio";

export default {
  name: "CheckoutPaymentMethods",
  components: { AppRadio, AppSelect },
  data () {
    return {
      list: [{
        icon: 'credit-card-bg',
        iconSelect: 'bank-card',
        label: "Bank cards"
      }, {
        icon: 'paypal-bg',
        iconSelect: 'paypal',
        label: "PayPal account"
      }],
      select: 0
    };
  },
  methods: {
    onClickSelect (index, close) {
      this.select = index;
      close();
    }
  }
}
</script>

<style lang="scss" scoped>
.payment {
  @include gt-md {
    margin-top: 24px;
  }

  @include lt-lg {
    margin-top: 12px;
  }

  &__tabs {
    @include lt-lg {
      display: none;
    }
  }

  &__tab-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
    flex: 1 1 auto;
    width: 100%;
    font-family: $golos-regular;
    font-size: 16px;
    line-height: 24px;
    color: $color-dark-grey;
  }

  &__select {
    display: none;

    @include lt-lg {
      display: block;
    }
  }

  &__select-label {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
  }

  &__select-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 60px;
  }

  &__select-item-left {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
  }

  &__icon-item {
    width: 32px;
    height: 32px;
  }

  &__icon-select {
    width: 24px;
    height: 24px;
  }
}
</style>

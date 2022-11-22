<template>
  <main class="order">
    <section class="order__wrapper">
      <div class="order__main">
        <order-title />
        <order-panel
          title="Order Details"
          :icon="detailsIcon"
          has-toggle
          :toggle-status="isDetailVisible"
          @toggle="toggleDetail"
        />
        <template v-if="isDetailVisible">
          <order-panel title="Recipient" icon="user-outline">
            <div>Maria Sazontova</div>
            <div>+7 (999) 123-45-67</div>
          </order-panel>
          <order-panel title="Delivery" icon="place-outline">
            <div>15 Westferry Road, London, E14 8FQ, Apartment 813</div>
            <div>20 May 2022; 3:00 - 6:00 pm, free delivery</div>
          </order-panel>
          <order-panel class="order-composition" title="Order composition" icon="flower-box">
            <div class="order-items">
              <div v-for="item in 3" :key="item" class="order-items__item item">
                <div class="item__picture">
                  <img src="https://via.placeholder.com/48" class="item__img" alt="" />
                </div>
                <div class="item__text">A bouquet of 29 peonies with addition of greenery</div>
              </div>
            </div>
          </order-panel>
          <div class="order-total">
            <div class="order-total__item">Total</div>
            <div class="order-total__item">£ 105</div>
          </div>
        </template>
        <order-panel title="Payment" icon="money-circle-outline">
          <template #top>
            <div class="change-payment" @click="openPaymentSelect">Change</div>
          </template>
          <template #full>
            <div class="select-payment">
              <svg-icon :name="paymentMethod.logo" class="select-payment__icon" />
              <app-select
                ref="payment-select"
                :placeholder="paymentMethod.label"
                :list="$options.PAYMENT_METHODS"
                size="x-large"
              >
                <template #default="{ item, close, setLabel }">
                  <div @click="onClickPaymentSystem(item, close, setLabel)">
                    <app-radio v-model="paymentMethod.label" :name="item.label" :has-icon="hasRadioIcon">
                      <div class="payment-item">
                        <div class="payment-item__logo">
                          <svg-icon :name="item.logo" class="payment-item__logo-icon" />
                        </div>
                        {{ item.label }}
                        <div class="payment-item__icons">
                          <div v-for="icon in item.methodIcons" :key="icon" class="payment-item__icon-item">
                            <svg-icon :name="icon" class="payment-item__icon" />
                          </div>
                        </div>
                      </div>
                    </app-radio>
                  </div>
                </template>
              </app-select>
            </div>
            <div class="select-payment--mobile">
              {{ paymentMethod.label }}
            </div>
            <div class="order__notification">
              <order-notification> You can change the payment method and pay online </order-notification>
            </div>
          </template>
        </order-panel>
        <div class="payment__button">
          <app-button theme="green" stretch="full">Go to payment</app-button>
        </div>
        <div class="payment__promo">
          <order-promo />
        </div>
      </div>
      <order-detail @cancel="openModal" />
    </section>
    <div class="payment__promo--mobile">
      <order-promo />
    </div>
    <div class="order-cancel" @click="openModal('OrderCancel')">Cancel the order</div>
    <app-modal :visible="isModalVisible" theme="centered" @close="closeModal">
      <component :is="currModal" @close="closeModal" @cancel-order="cancelOrder" />
    </app-modal>
  </main>
</template>

<script>
import OrderDetail from '~/components/OrderDetails';
import OrderPromo from '~/components/OrderPromo';
import AppSelect from '~/components/shared/AppSelect';
import AppRadio from '~/components/shared/AppRadio';
import AppButton from '~/components/shared/AppButton';

import AppModal from '~/components/shared/AppModal';

import { disableScroll, enableScroll } from '~/helpers/scrollLock';

import paymentMethodsData from '~/data/payment-methods';

export default {
  name: 'OrderPage',

  components: {
    OrderDetail,
    OrderPromo,
    AppSelect,
    AppRadio,
    AppButton,
    AppModal,
  },

  layout: 'order',

  data() {
    return {
      paymentMethod: paymentMethodsData[0],
      currModal: '',
      isDetailVisible: false,
      isModalVisible: false,
    };
  },

  PAYMENT_METHODS: paymentMethodsData,

  computed: {
    detailsIcon() {
      return this.$device.isMobile ? 'article-green' : 'details';
    },

    hasRadioIcon() {
      return this.$device.isMobile;
    },
  },

  methods: {
    onClickPaymentSystem(item, close, setLabel) {
      setLabel(item.label);
      this.setIcon(item.logo);
      close();
    },

    setIcon(icon) {
      this.paymentMethod.logo = icon;
    },

    toggleDetail() {
      this.isDetailVisible = !this.isDetailVisible;
    },

    openPaymentSelect() {
      this.$refs['payment-select'].onClickField();
    },

    openModal(name) {
      this.currModal = name;
      this.isModalVisible = true;
      disableScroll();
    },

    closeModal() {
      this.isModalVisible = false;
      this.currModal = '';
      enableScroll();
    },

    cancelOrder() {
      this.closeModal();
      this.$router.push({ name: 'index' });
    },
  },
};
</script>

<style lang="scss" scoped>
.order {
  width: 100%;
  padding-bottom: 133px;
  background: #ffffff;

  @include lt-md {
    background: #f7f7f7;
    padding-bottom: 19px;
    height: calc(100vh - 50px);
    overflow-y: auto;
  }

  & > * {
    max-width: 1080px;
    margin: 0 auto;

    @include lt-lg {
      padding: 0 16px;
    }
  }

  &__wrapper {
    display: flex;
    flex-direction: row;
    gap: 24px;
    padding-top: 24px;

    @include lt-lg {
      flex-direction: column;
      gap: 32px;
      background: #ffffff;
      padding-bottom: 24px;
      margin-bottom: 16px;
      border-radius: 0 0 16px 16px;
    }
  }

  &__main {
    flex: 1 1 auto;
    min-width: 0;
    max-width: 100%;

    display: flex;
    flex-direction: column;
    gap: 24px;

    @include lt-lg {
      gap: 16px;
    }

    .order-total {
      @include gt-sm {
        display: none;
      }

      @include lt-md {
        display: flex;
        justify-content: space-between;
        padding: 16px 0;
        border-top: 1px solid #eaeaea;
        border-bottom: 1px solid #eaeaea;
        bottom: 1px;

        &__item {
          font-family: $golos-bold;
          font-style: normal;
          font-weight: 600;
          font-size: 16px;
          line-height: 20px;
          color: #1f2226;
        }
      }
    }

    .order-composition {
      @include gt-sm {
        display: none;
      }

      @include lt-md {
        .order-items {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding: 8px 0;

          .item {
            display: flex;
            align-items: center;
            gap: 8px;

            &__picture {
              width: 48px;
              height: 48px;
            }

            &__img {
              width: 100%;
              height: 100%;
              border-radius: 12px;
            }

            &__text {
              flex: 1;

              font-family: $golos-regular;
              font-style: normal;
              font-weight: 400;
              font-size: 14px;
              line-height: 20px;
              letter-spacing: -0.01em;
              color: $color-dark-grey;
            }
          }
        }
      }
    }

    .select-payment {
      @include gt-sm {
        display: flex;
        align-items: center;
        margin-top: 13px;
        background: #f7f7f7;
        border-radius: 10px;
        padding-left: 16px;
        box-sizing: border-box;
      }

      &__icon {
        width: 24px;
        height: 24px;
      }

      .app-select {
        flex: 1;
      }

      @include lt-md {
        display: none;
      }

      &--mobile {
        @include gt-sm {
          display: none;
        }

        font-family: $golos-regular;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: -0.01em;
        color: #7c7c7c;

        box-sizing: border-box;
        padding-left: 48px;
      }
    }

    .change-payment {
      @include gt-sm {
        display: none;
      }

      @include lt-md {
        font-family: $golos-medium;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        text-align: right;
        letter-spacing: -0.01em;
        color: $color-green;
        user-select: none;
      }
    }
  }

  &__notification {
    @include lt-md {
      margin-top: 16px;
    }

    margin-top: 10px;
  }

  &-cancel {
    @include gt-sm {
      display: none;
    }

    @include lt-md {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 44px;
      margin-top: 16px;

      font-family: $golos-medium;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: #db1838;
    }
  }
}

.payment-item {
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 20px 0;
  width: 100%;
  user-select: none;
  cursor: pointer;

  font-family: $golos-regular;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.01em;
  color: $color-dark-grey;

  @include lt-md {
    flex: 1;
    flex-direction: row-reverse;
    justify-content: space-between;
    cursor: none;
  }

  &__logo {
    @include lt-md {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 32px;
      height: 32px;
      background: #f7f7f7;
      border-radius: 12px;
    }

    &-icon {
      width: 24px;
      height: 24px;
    }
  }

  &__icons {
    display: flex;
    justify-content: flex-end;
    flex: 1;
    gap: 8px;

    @include lt-md {
      display: none;
    }
  }

  &__icon-item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 28px;
    border-radius: 12px;
    background: #f7f7f7;
  }

  &__icon {
    max-width: 80%;
    height: 18.48px;
  }
}

.payment__promo {
  @include lt-md {
    display: none;
  }

  &--mobile {
    @include gt-sm {
      display: none;
    }

    padding: 0;
  }
}
</style>

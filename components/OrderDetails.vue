<template>
  <div class="detail">
    <div class="detail__panel panel">
      <div class="detail__title">Order details</div>
      <div class="panel__items items">
        <div class="items__top">
          <div class="items__top-column" @click="toggleItems">
            3 items <svg-icon name="arrow-grey" class="items__icon" />
          </div>
          <div class="items__top-column items__price">£ 94</div>
        </div>
        <div class="items__body goods" :class="{ active: itemsVisibility }">
          <div v-for="item in 3" :key="item" class="goods__item">
            <div class="goods__item-picture">
              <img src="https://via.placeholder.com/48" class="goods__item-picture--img" alt="" />
            </div>
            <div class="goods__item-title">A bouquet of 29 peonies with the addition of greenery</div>
          </div>
        </div>
      </div>
      <div class="panel__discount">
        <div class="panel__discount-item">Sale <span class="sale">- £ 8</span></div>
        <div class="panel__discount-item">Delivery <span class="delivery">Free</span></div>
      </div>
      <div class="panel__total">
        <div class="panel__total-item total">Total <span class="total__price">£ 86</span></div>
        <div class="panel__total-item cashback">
          Cashback <span class="cashback__price"><svg-icon class="cashback__icon" name="coins" />£0.4</span>
        </div>
      </div>
      <div class="panel__bottom">
        <a href="#" class="panel__bottom-link" @click="cancelOrder">Cancel the order</a>
      </div>
    </div>
    <div class="detail__info">
      <div class="detail__info-content info">
        <div class="info__column">
          <svg-icon name="user-outline" class="info__icon" />
        </div>
        <div class="info__column">You can track the order status in your personal account</div>
      </div>
      <app-button theme="grey-whitely" stretch="full">Go to your personal account</app-button>
    </div>
  </div>
</template>

<script>
import AppButton from '@/components/shared/AppButton';
import OrderCancel from '@/components/OrderCancel'

export default {
  name: 'OrderDetail',

  components: {
    AppButton,
  },

  data() {
    return {
      itemsVisibility: false,
    };
  },

  methods: {
    toggleItems() {
      this.itemsVisibility = !this.itemsVisibility;
    },

    cancelOrder() {
      this.$emit('cancel', OrderCancel.name)
    }
  },
};
</script>

<style lang="scss" scoped>
.detail {
  display: flex;
  flex-direction: column;
  gap: 24px;

  box-sizing: border-box;
  width: 344px;
  flex-shrink: 0;
  margin-top: 64px;

  @include lt-lg {
    width: 100%;
  }

  @include lt-md {
    display: none;
  }

  & > * {
    padding: 24px;
    border: 1.5px solid #dde0e6;
    border-radius: 12px;
    height: fit-content;
  }

  &__title {
    font-family: $golos-medium;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: #000000;

    margin-bottom: 23px;

    @include lt-md {
      font-style: normal;
      font-size: 16px;
      line-height: 20px;
      color: $color-dark-grey;
    }
  }

  .panel {
    &__items,
    &__discount,
    &__total {
      font-family: $golos-regular;
      font-style: normal;
      font-size: 14px;
    }

    &__discount {
      display: flex;
      flex-direction: column;
      gap: 8px;

      font-weight: 400;
      letter-spacing: -0.01em;
      color: #7c7c7c;

      padding-bottom: 16px;
      margin-bottom: 16px;

      border-bottom: 1px solid #eaeaea;

      &-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .sale {
        font-weight: 500;
        font-family: $golos-medium;
        color: $color-dark-green;
      }
    }

    &__total {
      display: flex;
      flex-direction: column;
      gap: 10px;

      font-weight: 400;
      letter-spacing: -0.01em;
      color: #7c7c7c;

      &-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .total {
        color: $color-dark-grey;

        &__price {
          font-weight: 500;
          font-family: $golos-bold;
          color: $color-dark-grey;
        }
      }

      .cashback {
        &__price {
          display: flex;
          align-items: center;
          gap: 6.42px;

          font-weight: 500;
          font-family: $golos-bold;
          color: #f8b900;
        }

        &__icon {
          width: 15.58px;
          height: 14px;
        }
      }
    }

    &__bottom {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 44px;
      margin-top: 24px;

      &-link {
        font-family: $golos-regular;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: #db1838;
      }
    }

    .items {
      font-weight: 400;
      letter-spacing: -0.01em;
      color: #7c7c7c;

      padding-bottom: 8px;

      &__top {
        display: flex;
        justify-content: space-between;
        align-items: center;

        &-column {
          display: flex;
          align-items: center;
        }
      }

      &__price {
        font-weight: 500;
        font-family: $golos-medium;
        color: $color-dark-grey;
      }

      &__icon {
        display: block;
        width: 14px;
        height: 14px;
        cursor: pointer;
        margin-left: 8px;
      }

      .goods {
        display: none;
        flex-direction: column;
        gap: 8px;

        padding-top: 8px;

        &.active {
          display: flex;
        }

        &__item {
          display: flex;
          align-items: center;
          gap: 8px;

          &-picture {
            width: 48px;
            height: 48px;

            &--img {
              width: 100%;
              height: 100%;
              border-radius: 12px;
            }
          }

          &-title {
            font-family: $golos-regular;
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;
            letter-spacing: -0.01em;
            color: $color-dark-grey;

            max-width: 200px;
          }
        }
      }
    }
  }

  .info {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 12px;

    font-family: $golos-regular;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.01em;
    color: #7c7c7c;

    &__icon {
      width: 24px;
      height: 24px;
    }
  }
}
</style>

<template>
  <div class="payment layout">
    <figure class="payment__picture">
      <img :src="`/images/info/payment.png`" class="payment__image" alt="payment" />
    </figure>
    <div class="payment__content content">
      <div v-for="(item, index) in $options.PAYMENT" :key="index" class="content__item">
        <div class="content__item-title">{{ item.title }}</div>
        <div class="content__item-text">{{ item.text }}</div>
      </div>
      <div class="payment__variants">
        <div v-for="(variant, index) in $options.DATA_PAYMENT" :key="index" class="payment__variant">
          <svg-icon :name="variant.name" class="payment__variant-icon" />
        </div>
      </div>
      <div class="payment__button">
        <app-button theme="green" size="full" @click="$router.push({ name: 'flowers' })">Go to the catalog</app-button>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from '@/components/shared/AppButton';

import { PAYMENT } from '~/data/delivery';
import DATA_PAYMENT from '@/data/payment';

export default {
  name: 'DeliveryPayment',

  components: {
    AppButton
  },

  PAYMENT,
  DATA_PAYMENT,

  computed: {
    getImg() {
      return this.$device.isMobileOrTablet ? 'mobile' : 'desktop';
    }
  }
};
</script>

<style lang="scss" scoped>
.payment {
  display: flex;

  @include gt-sm {
    max-width: 80%;
  }

  @include lt-md {
    flex-direction: column;
  }

  & > div {
    flex: 1;
  }

  &__image {
    border-radius: 24px;
    width: 100%;
  }

  .content {
    @include gt-sm {
      padding-left: 117px;
    }

    &__item {
      margin-top: 24px;

      &-title {
        font-family: $golos-medium;
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        color: $color-dark-grey;
        margin-bottom: 8px;
      }

      &-text {
        font-family: $golos-regular;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: -0.01em;
        color: $color-dark-grey;

        @include gt-sm {
          max-width: 321px;
        }
      }
    }
  }

  &__variants {
    margin-top: 12px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  &__variant {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f7f7f7;
    border-radius: 4px;
    width: 50px;
    height: 32px;
    padding: 0 6px;

    &-icon {
      height: 20px;
    }
  }

  &__button {
    @include gt-sm {
      width: 250px;
      padding-top: 46px;
    }

    @include lt-md {
      padding-top: 24px;
    }
  }
}
</style>

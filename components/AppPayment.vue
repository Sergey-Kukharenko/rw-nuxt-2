<template>
  <div class="payment">
    <div v-for="item in payment" :key="item" class="payment__item">
      <svg-icon
        :name="item.name"
        v-bind="item[getImg].style"
      />
    </div>
  </div>
</template>

<script>
import dataPayment from '@/data/payment'

export default {
  name: 'AppPayment',
  data() {
    return {
      payment: dataPayment
    }
  },

  computed: {
    getImg() {
      return this.$mq === 'xs' ? 'mobile' : 'desktop';
    }
  },
};
</script>

<style lang="scss" scoped>
.payment {
  display: flex;
  align-items: center;

  &__item {
    background: white;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:not(:last-child) {
      @include gt-xs {
        margin-right: 16px;
      }

      @include xs {
        margin-right: 8px;
      }
    }

    @include gt-xs {
      width: 74px;
      height: 48px;
    }

    @include xs {
      width: 51px;
      height: 33px;
    }
  }
}
</style>

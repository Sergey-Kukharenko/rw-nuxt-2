<template>
  <a :class="classNames">
    <figure class="cart__figure">
      <svg-icon :name="getImg" class="cart__icon" />
      <app-counter v-if="isCount" :count="cart.count" class="cart__counter" />
    </figure>
    <div class="cart__figcaption">{{ isPrice }}</div>
  </a>
</template>

<script>
import AppCounter from '@/components/shared/AppCounter';
import { useClassName, useSetClassName } from '@/helpers'

export default {
  name: 'AppCart',
  components: {AppCounter},
  props: {
    theme: {
      type: String,
      default: ''
    }
  },

  computed: {
    getImg() {
      return this.$device.isMobileOrTablet ? 'cart-bag' : 'cart-outline'
    },

    cart() {
      return this.$store.getters['cart/cart']
    },

    isCount() {
      return this.cart.count > 0
    },

    isPrice() {
      return this.cart.price ? this.cart.price : 'Basket'
    },

    classNames() {
      return [
        useClassName(this.$props, 'cart'),
        useSetClassName(this.isCount, 'cart--active')
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.cart {
  cursor: pointer;
  @include gt-sm {
    color: $color-light-grey;
  }

  @include lt-md {
    display: flex;
    align-items: center;
    justify-content: center;
    order: 4;
    padding: 6px;
    color: black;
    margin-right: -6px;
  }

  &:hover {
    opacity: 0.9;
  }

  &__figure {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin: 0 auto;

    @include gt-sm {
      width: 28px;
      height: 28px;
    }
  }

  &__icon {
    @include gt-sm {
      width: 24px;
      height: 24px;
      fill: currentColor;
    }

    @include lt-md {
      width: 20px;
      height: 20px;
      fill: currentColor;
    }
  }

  &__figcaption {
    @include gt-sm {
      font-family: $golos-medium;
      font-size: 14px;
      line-height: 16px;
      text-align: center;
      color: currentColor;
      margin-top: 7px;
    }

    @include lt-md {
      display: none;
    }
  }

  &__counter {
    background: currentColor;
  }

  &--inline {
    @include gt-sm {
      display: flex;
      align-items: center;
    }

    .cart__figure {
      @include gt-sm {
        width: 16px;
        height: 16px;
      }
    }

    .cart__figcaption {
      @include gt-sm {
        margin: 0 0 0 9px;
      }
    }

    &.cart--active {
      .cart__icon,
      .cart__figcaption {
        @include gt-sm {
          color: $color-white-grey;
        }
      }

      &:hover {
        .cart__icon,
        .cart__figcaption {
          @include gt-sm {
            color: $color-green;
          }
        }
      }

      .cart__figcaption {
        @include gt-sm {
          margin: 0 0 0 20px;
        }
      }
    }

    .cart__icon {
      @include gt-sm {
        width: 16px;
        height: 16px;
      }
    }

    .cart__counter {
      width: 16px;
      height: 16px;
      font-size: 8px;
    }
  }

  &--active {
    color: $color-green;
  }
}
</style>

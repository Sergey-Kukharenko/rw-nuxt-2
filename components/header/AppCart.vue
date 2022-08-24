<template>
  <a :class="classNames">
    <figure class="cart__figure">
      <svg-icon name="cart-outline" class="cart__icon" />
    </figure>
    <figcaption class="cart__figcaption">Basket</figcaption>
  </a>
</template>

<script>
import {useClassName} from '@/helpers'

export default {
  name: 'AppCart',
  props: {
    theme: {
      type: String,
      default: ''
    }
  },

  computed: {
    classNames() {
      return useClassName(this.$props, 'cart');
    }
  }
};
</script>

<style lang="scss" scoped>
.cart {
  cursor: pointer;

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

    .cart__icon {
      @include gt-sm {
        width: 16px;
        height: 16px;
      }
    }
  }

  @include lt-md {
    display: flex;
    align-items: center;
    justify-content: center;
    order: 4;
    padding: 8px;
    margin-right: -8px;
  }

  &__figure {
    display: flex;
    align-items: center;
    justify-content: center;

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
      fill: $color-dark-grey;
      opacity: 0.5;
    }
    @include lt-md {
      width: 20px;
      height: 20px;
      fill: white;
    }
  }

  &__figcaption {
    @include gt-sm {
      font-family: $golos-medium;
      font-size: 14px;
      line-height: 16px;
      text-align: center;
      color: $color-white-grey;
      margin-top: 7px;
    }
    @include lt-md {
      display: none;
    }
  }

  &:hover {
    @include gt-sm {
      opacity: 0.75;
    }
  }
}
</style>

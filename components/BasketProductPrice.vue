<template>
  <div class="product-price">
    <div
      v-if="oldPrice"
      class="product-price__old"
    >
      <div class="product-price__old-price">£{{ oldPrice }}</div>
      <div class="product-price__old-percent">-{{ percent.toFixed(0) }}%</div>
    </div>
    <div class="product-price__price">£{{ price }}</div>
  </div>
</template>

<script>
  export default {
    name: "BasketProductPrice",
    props: {
      price: {
        type: Number,
        default: 0
      },
      oldPrice: {
        type: Number,
        default: 0
      }
    },
    computed: {
      percent () {
        if (!this.oldPrice) return 0;
        return 100 - this.price / this.oldPrice * 100;
      }
    }
  };
</script>

<style lang="scss" scoped>
.product-price {
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-end;

  @include lt-lg {
    flex-direction: row-reverse;
    gap: 6px;
  }

  &__old {
    display: flex;
    flex-direction: row;
    gap: 8px;
  }

  &__old-price {
    position: relative;
    font-family: $golos-regular;
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
    color: #7C7C7C;

    @include lt-lg {
      font-size: 12px;
      line-height: 16px;
    }

    &:before {
      content: "";
      position: absolute;
      z-index: 100;
      left: -2px;
      top: 8px;
      width: 120%;
      height: 1px;
      background-color: #ffffff;
      border-bottom: 1px solid #DB1838;
      transform: rotate(-26.07deg);

      @include lt-lg {
        left: -1px;
        width: 110%;
      }
    }
  }

  &__old-percent {
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #DB1838;
    color: #ffffff;
    border-radius: 8px;
    height: 20px;
    padding: 0 6px;
    font-family: $golos-regular;
    font-weight: 400;
    font-size: 11px;
    line-height: 16px;

    @include lt-lg {
      display: none;
    }
  }

  &__price {
    color: #000000;
    font-family: $golos-bold;
    font-weight: 500;
    font-size: 32px;
    line-height: 40px;

    @include lt-lg {
      font-size: 18px;
      line-height: 20px;
    }
  }
}
</style>

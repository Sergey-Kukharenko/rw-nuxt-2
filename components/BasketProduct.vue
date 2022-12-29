<template>
  <div class="wrapper">
    <div class="product">
      <basket-product-image :url="imageUrl" />
      <div class="product__info">
        <div class="product__info-price">
          <div>
            <div class="product__title">
              <basket-product-rating :value="rating" />
              <basket-product-title>{{ title }}</basket-product-title>
            </div>
            <basket-product-size :value="size" />
            <basket-product-color :value="color" />
            <basket-product-package :value="pack" />
          </div>
          <div class="product__price-main">
            <basket-product-price :price="price" :old-price="oldPrice" />
            <div class="product__items">
              <basket-button size="small" theme="grey">
                <div>{{count}} item</div>
                <svg-icon class="product__item-icon" name="chevron" />
              </basket-button>
            </div>
          </div>
        </div>
        <div class="product__leaves-desktop">
          <basket-product-leaves v-if="leaves" v-model="leavesSwitch" />
        </div>
        <div class="product__favorite-count">
          <basket-product-favorite />
          <basket-product-count :count.sync="count" />
        </div>
      </div>
    </div>
    <div class="product__leaves-mobile">
      <basket-product-leaves v-if="leaves" v-model="leavesSwitch" />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'BasketProduct',

  props: {
    id: {
      type: String,
      default: ''
    },

    imageUrl: {
      type: String,
      default: ''
    },

    rating: {
      type: Number,
      default: 5
    },

    title: {
      type: String,
      default: ''
    },

    price: {
      type: Number,
      default: 0
    },

    oldPrice: {
      type: Number,
      default: 0
    },

    size: {
      type: String,
      default: ''
    },

    color: {
      type: String,
      default: ''
    },

    pack: {
      type: String,
      default: ''
    },

    leaves: {
      type: Boolean,
      default: false
    },

    qty: {
      type: Number,
      default: 1
    }
  },

  data() {
    return {
      leavesSwitch: false,
      count: this.qty
    };
  },

  watch: {
    count(value, oldValue) {
      const payload = {
        productId: this.id,
        positionSlag: this.title
      };

      const action = oldValue < value ? 'addToCart' : 'removeFromCart';
      this[action](payload)
    }
  },

  methods: {
    ...mapActions({
      addToCart: 'cart/addToCart',
      removeFromCart: 'cart/removeFromCart'
    })
  }
};
</script>

<style lang="scss" scoped>
.product {
  display: flex;
  flex-direction: row;
  gap: 24px;
  border-top: 1px solid #dde0e6;
  padding: 24px 0;

  @include lt-lg {
    gap: 8px;
    padding: 16px 0;
  }

  &__info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
  }

  &__info-price {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;

    @include lt-lg {
      flex-direction: column;
      justify-content: flex-start;
    }
  }

  &__title {
    display: flex;
    flex-direction: column;

    @include lt-lg {
      flex-direction: row-reverse;
      align-items: flex-start;
      justify-content: space-between;
      gap: 8px;
      width: 100%;
    }
  }

  &__price-main {
    @include lt-lg {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      margin-top: 8px;
    }
  }

  &__favorite-count {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    @include lt-lg {
      display: none;
    }
  }

  &__leaves-desktop {
    @include lt-lg {
      display: none;
    }
  }

  &__leaves-mobile {
    display: none;

    @include lt-lg {
      display: block;
    }
  }

  &__items {
    display: none;

    @include lt-lg {
      display: block;
    }
  }

  &__item-icon {
    width: 10px;
    height: 6px;
  }
}
</style>

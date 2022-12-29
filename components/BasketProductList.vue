<template>
  <div class="product-list">
    <basket-product
      v-for="product in cart"
      :id="product.offer_id"
      :key="product.title"
      :title="product.title"
      :price="product.price.amount"
      :size="product.title"
      :qty="collection[product.title]"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'BasketProductList',

  computed: {
    ...mapGetters({
      cart: 'cart/getUniqueArray',
      collection: 'cart/getAniqueCollection'
    })
  }
};
</script>

<style lang="scss" scoped>
.product-list {
  width: 100%;
}
</style>

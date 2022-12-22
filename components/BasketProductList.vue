<template>
  <div class="product-list">
    <basket-product
      v-for="product in items"
      :key="product.title"
      :title="product.title"
      :price="product.price.amount"
      :size="product.title"
      :qty="product.qty"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'BasketProductList',
  data() {
    return {
      productList: [
        {
          title: 'Bouquet Sunshine',
          price: 43,
          oldPrice: 0,
          imageUrl: '/examples/products/1.jpg',
          rating: 3.3,
          size: 'Premium',
          color: '',
          pack: '',
          leaves: false,
          count: 1
        },
        {
          title: 'Bouquet of 101 roses with extra leaves and text that takes two rows',
          price: 42,
          oldPrice: 55,
          imageUrl: '/examples/products/2.jpg',
          rating: 4.9,
          size: '',
          color: 'Bright Mix',
          pack: 'Craft',
          leaves: true,
          count: 1
        }
      ]
    };
  },

  computed: {
    ...mapGetters({ items: 'cart/items' })
  }
};
</script>

<style lang="scss" scoped>
.product-list {
  width: 100%;
}
</style>

<template>
  <div class="basket">
    <section class="basket__layout">
      <basket-title />
    </section>
    <section class="basket__layout basket__wrapper">
      <div class="basket__main">
        <basket-product-list />
      </div>
      <basket-order />
    </section>
    <section class="basket__people">
      <app-promotions has-title />
    </section>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import ToastCardDeals from '~/components/toast-cards/ToastCardDeals';

export default {
  name: 'BasketPage',
  layout: 'basket',
  head: {
    meta: [
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no'
      }
    ]
  },

  mounted() {
    this.fetchPromotions();

    const content = {
      component: ToastCardDeals,
      props: {
        img: {
          src: 'https://via.placeholder.com/252x300',
          size: { width: 32, height: 32 }
        },
        text: 'Postcard added to the order'
      }
    };

    const options = {
      timeout: 3000,
      icon: false,
      closeButton: false,
      position: 'bottom-left',
      class: ['toast', 'toast--width-large', 'toast--theme-yellow', 'toast--height-small']
    };

    this.$toast(content, options);
  },

  methods: {
    ...mapActions({ fetchPromotions: 'pages/home/fetchPromotions' })
  }
};
</script>

<style lang="scss" scoped>
.basket {
  width: 100%;

  &__layout {
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

    @include lt-lg {
      flex-direction: column;
      gap: 32px;
    }
  }

  &__main {
    flex: 1 1 auto;
    min-width: 0;
    max-width: 100%;
  }

  &__people {
    margin-bottom: 40px;
  }
}
</style>

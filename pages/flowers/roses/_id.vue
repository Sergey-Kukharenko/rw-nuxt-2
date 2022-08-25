<template>
  <div class="layout layout-dt detail-page">
    <div class="detail-page__row">
      <div class="detail-page__col">
        <app-gallery :items="items" />
        <app-notification :notification="notification" />
      </div>
    </div>
  </div>
</template>

<script>
import products from '@/data/products';

import AppGallery from '@/components/ui/AppGallery'
import AppNotification from '@/components/card-product/AppNotification'

export default {
  name: 'IdPage',
  components: {
    AppNotification,
    AppGallery
  },
  data() {
    return {
      id: this.$route.params.id,
      product: null,
      items: {},
      notification: {},
    };
  },

  mounted() {
    this.product = products.find((item) => item.id === +this.id)
    this.items = this.product.items
    this.notification = this.product.notification
  }
};
</script>

<style lang="scss" scoped>
.detail-page {
  &__row {
    @include gt-sm {
      display: flex;
    }
  }

  &__col {
    box-sizing: border-box;

    @include gt-sm {
      width: 50%;

      &:first-child {
        padding-right: 12px;
      }

      &:last-child {
        padding-left: 12px;
      }
    }
  }

  &__section {
    @include gt-sm {
      margin: 76px 0;
    }

    @include lt-md {
      margin: 40px 0;
    }
  }
}

.about {
  &__title {
    font-family: $Literata;
    font-style: normal;
    font-weight: 700;

    color: #000000;

    @include gt-sm {
      font-size: 28px;
      line-height: 32px;
    }

    @include lt-md {
      font-size: 20px;
      line-height: 24px;
    }
  }

  &__row {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  &__reviews {
    @include gt-sm {
      flex: 0 0 620px;
    }

    @include lt-md {
      order: 1;
    }
  }

  &__rating {
    @include gt-sm {
      flex: 0 0 344px;
    }

    @include lt-md {
      width: 100%;
    }
  }

  &__text {
    font-family: $golos-bold;
    font-size: 16px;
    line-height: 20px;
    color: #000;
    margin-right: 10px;
  }
}
</style>

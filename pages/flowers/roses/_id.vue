<template>
  <div class="layout layout-dt detail-page">
    <div class="detail-page__row">
      <div class="detail-page__col">
        <app-gallery :items="items" />
        <app-notification :notification="notification" />
      </div>
      <div class="detail-page__col">
        <app-form-sizes v-if="isSizePage" :product="product" />
        <app-form-lists v-if="isListsPage" :product="product" />
        <app-service :service="service" />
      </div>
    </div>
  </div>
</template>

<script>
import products from '@/data/products'

import AppGallery from '@/components/ui/AppGallery'
import AppNotification from '@/components/card-product/AppNotification'
import AppFormSizes from '@/components/card-product/AppFormSizes'
import AppFormLists from '@/components/card-product/AppFormLists'
import AppService from '@/components/card-product/AppService'

export default {
  name: 'IdPage',

  components: {
    AppNotification,
    AppGallery,
    AppFormSizes,
    AppFormLists,
    AppService
  },

  data() {
    return {
      id: this.$route.params.id,
      product: {},
      items: {},
      notification: {},
      type_of_page: null,
      service: {}
    }
  },

  computed: {
    isSizePage() {
      return this.type_of_page === 'size_page'
    },

    isListsPage() {
      return this.type_of_page === 'lists_page'
    }
  },

  mounted() {
    const product = products.find((item) => item.id === +this.id)
    this.product = product
    this.items = product.items
    this.notification = product.notification
    this.type_of_page = product.type_of_page
    this.service = product.service
  }
}
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

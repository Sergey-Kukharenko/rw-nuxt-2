<template>
  <div class="products">
    <app-grid v-slot="slotProps" :slides="products">
      <app-card :slide="{ ...slotProps }" />
    </app-grid>
    <div class="products__pagination">
      <app-button theme="grey-whitely" stretch="full"> Show more </app-button>
      <div class="products__pagination-nav">
        <app-pagination />
      </div>
    </div>
  </div>
</template>

<script>
import AppPagination from '@/components/shared/AppPagination.vue';
import AppGrid from '@/components/shared/AppGrid.vue';
import AppCard from '@/components/shared/AppCard.vue';
import AppButton from '@/components/shared/AppButton';

export default {
  name: 'CategoryProductList',

  components: {
    AppGrid,
    AppCard,
    AppButton,
    AppPagination
  },

  props: {
    products: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="scss" scoped>
.products {
  margin-bottom: 56px;

  .grid {
    @include lt-md {
      grid-template-columns: repeat(2, minmax(47%, 1fr));
    }

    @include gt-sm {
      grid-template-columns: repeat(auto-fill, minmax(216px, 1fr));
    }
  }

  &__pagination {
    @include lt-md {
      display: none;
    }

    @include gt-sm {
      margin-top: 40px;

      &-nav {
        margin-top: 12px;
      }
    }
  }
}
</style>

<template>
  <div class="products">
    <app-grid v-slot="slotProps" :slides="productsList">
      <app-card :slide="{ ...slotProps }" />
    </app-grid>
    <div class="products__pagination">
      <div class="products__pagination-nav">
        <app-pagination :options="pagination" :loading="loading" has-show-more-btn @loadData="fetchProducts" />
      </div>
    </div>
  </div>
</template>

<script>
import AppPagination from '@/components/shared/AppPagination.vue';
import AppGrid from '@/components/shared/AppGrid.vue';
import AppCard from '@/components/shared/AppCard.vue';

import { PAGINATION } from '~/constants';

export default {
  name: 'CategoryProductList',

  components: {
    AppGrid,
    AppCard,
    AppPagination
  },

  data() {
    return {
      loading: false
    }
  },

  computed: {
    productsList() {
      return this.$store.getters['category/getCategory']?.list ?? [];
    },

    pagination() {
      return this.$store.getters['category/getCategory']?.pagination;
    }
  },

  methods: {
    async fetchProducts({ page, isShowMore = false }) {
      this.loading = true

      const payload = {
        slug: this.$route.params.slug,
        params: {
          page,
          limit: PAGINATION.limit
        }
      };

      await this.$store.dispatch('category/fetchCategory', {
        ...payload,
        isConcated: isShowMore
      });

      this.loading = false
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
    @include gt-sm {
      margin-top: 40px;

      &-nav {
        margin-top: 12px;
      }
    }
  }
}
</style>

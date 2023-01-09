<template>
  <div v-if="paginatorVisibility" class="pagination">
    <div class="pagination__container">
      <app-button v-if="showMoreBtnVisibility" theme="grey-whitely" stretch="full" @click="fetchMore">
        Show more
      </app-button>
      <div class="pagination__items">
        <div
          v-for="item in paginator"
          :key="item"
          class="pagination__items-item"
          :class="{ active: options.page === item }"
          @click="$emit('loadData', { page: item })"
        >
          {{ item }}
        </div>
      </div>
    </div>
    <div ref="observer" class="observer">
      <app-spinner-loader v-if="spinnerVisibility" />
    </div>
  </div>
</template>

<script>
import { PAGINATION } from '~/constants';
import { usePaginationTotalPages, useGeneratedNumsArray } from '~/helpers';

export default {
  name: 'AppPagination',

  components: {
    AppButton: () => import('@/components/shared/AppButton'),
    AppSpinnerLoader: () => import('@/components/shared/AppSpinnerLoader')
  },

  props: {
    options: {
      type: Object,
      default: () => ({})
    },

    hasShowMoreBtn: {
      type: Boolean,
      default: false
    },

    loading: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    spinnerVisibility() {
      return this.$device.isMobileOrTablet && this.loading;
    },

    totalPages() {
      return usePaginationTotalPages({ total: this.options.total, limit: this.options.limit });
    },

    showMoreBtnVisibility() {
      return this.hasShowMoreBtn && this.options.page < this.totalPages;
    },

    paginatorVisibility() {
      return this.totalPages > 1;
    },

    paginator() {
      const pages = this.totalPages;
      const currPage = this.options.page;
      const btnCount = PAGINATION.btnCount;
      const dots = '...';

      let res = [];

      if (pages <= btnCount) {
        res = useGeneratedNumsArray(pages);
      }

      if (pages > btnCount) {
        if (currPage <= PAGINATION.blindValue) {
          res = [...useGeneratedNumsArray(PAGINATION.blindValue), dots, pages];
        }

        if (currPage >= pages - 2) {
          res = [1, dots, pages - 2, pages - 1, pages];
        }

        if (currPage > PAGINATION.blindValue && currPage < pages - 2) {
          res = [1, dots, currPage - 1, currPage, currPage + 1, dots, pages];
        }
      }

      return res;
    }
  },

  mounted() {
    if (!this.$device.isMobileOrTablet) {
      return;
    }

    this.$nextTick().then(() => this.initInfinitePagination());
  },

  methods: {
    fetchMore() {
      if (!this.showMoreBtnVisibility) {
        return;
      }

      this.$emit('loadData', {
        page: this.options.page + 1,
        isShowMore: true
      });
    },

    initInfinitePagination() {
      if (!this.paginatorVisibility) {
        return
      }

      const options = {
        rootMargin: '0px',
        threshold: 1.0
      };

      const callback = (entries, observer) => {
        if (entries[0].isIntersecting) {
          this.fetchMore();
        }
      };

      const observer = new IntersectionObserver(callback, options);
      observer.observe(this.$refs.observer);
    }
  }
};
</script>

<style lang="scss" scoped>
.pagination {
  &__container {
    @include lt-md {
      display: none;
    }

    @include gt-sm {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 12px;
    }
  }

  &__items {
    display: flex;
    gap: 8px;

    &-item {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      border: 1px solid #eaeaea;
      border-radius: 10px;
      font-family: $golos-regular;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: $color-dark-grey;
      cursor: pointer;

      &.active {
        border: 1px solid $color-dark-green;
      }
    }
  }

  .observer {
    display: flex;
    justify-content: center;
    padding-top: 24px;
  }
}
</style>

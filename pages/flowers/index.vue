<template>
  <main class="layout category-page">
    <div class="category-page__row">
      <div class="category-page__col filter-panel">
        <div class="filter-panel__header">
          <h1 class="filter-panel__header-title">{{ title }}</h1>
        </div>
        <div class="filter-panel__menu">
          <category-filters @change-active-filter="changeActiveFilter" />
        </div>
      </div>

      <div class="category-page__col category-products">
        <div class="category-products__header" :style="styles">
          <div class="category-products__header-title">{{ productCount }} bouquets found</div>
          <category-sorting :sort-list="sortList" :curr-sorting="currSorting" @sort="sortBy" />
        </div>
        <div class="category-products__header-bottom">
          <div class="active-filters">
            <category-active-filters
              v-if="activeFilters.length"
              :list="activeFilters"
              @remove="removeActiveFilter"
              @clear="clearActiveFilters"
            />
          </div>
          <category-navigation-sm
            :sort-list="sortVariants"
            :curr-sorting="currSorting"
            :active-filters="activeFilters"
            :product-count="productCount"
            @sort="sortBy"
            @remove-active-filter="removeActiveFilter"
            @clear-active-filters="clearActiveFilters"
            @change-active-filter="changeActiveFilter"
          />
        </div>
        <category-product-list :products="categoryProducts.list" />
      </div>
    </div>
  </main>
</template>

<script>
import dataCategoryProducts from '~/data/category-products';
import dataCategorySorting from '~/data/category-sorting';
import dataCategoryFilters from '~/data/category-filters';

export default {
  name: 'CategoryPage',

  data() {
    return {
      categoryFilters: dataCategoryFilters,
      categoryProducts: dataCategoryProducts,
      sortVariants: dataCategorySorting,

      currSorting: dataCategorySorting[0],

      title: dataCategoryProducts.main.title,
      productCount: dataCategoryProducts.main.count,

      activeFilters: [],
    };
  },

  computed: {
    styles() {
      return this.activeFilters.length ? { marginBottom: '24px' } : { marginBottom: '32px' };
    },

    sortList() {
      return this.sortVariants.filter((s) => s !== this.currSorting);
    },
  },

  methods: {
    sortBy(variant) {
      this.currSorting = variant;
    },

    changeActiveFilter(payload) {
      const isCheckbox = payload.type === 'checkbox';

      this.activeFilters = this.activeFilters.filter((f) => f.filterKey !== payload.filterKey);

      if (!isCheckbox) {
        this.activeFilters.push(payload);

        return;
      }

      const checkboxFilters = payload.value.map((f) => ({
        ...payload,
        value: f,
      }));

      this.activeFilters.push(...checkboxFilters);
    },

    removeActiveFilter({ value }) {
      this.activeFilters = this.activeFilters.filter((f) => f.value !== value);
    },

    clearActiveFilters() {
      this.activeFilters = [];
    },
  },
};
</script>

<style lang="scss" scoped>
.category-page {
  margin-top: 0;

  &__row {
    display: flex;

    @include lt-md {
      flex-direction: column;
    }

    .filter-panel {
      width: 344px;
      margin-right: 31px;

      &__header {
        display: flex;
        align-items: flex-end;
        box-sizing: border-box;

        @include gt-sm {
          height: 73px;
        }

        @include lt-md {
          height: 40px;
        }

        &-title {
          font-family: $Literata;
          font-style: normal;
          letter-spacing: -0.01em;
          margin: 0;

          @include gt-sm {
            font-weight: 600;
            font-size: 32px;
            line-height: 40px;
            color: #000000;
            margin-bottom: 24px;
          }

          @include lt-md {
            font-weight: 700;
            font-size: 20px;
            line-height: 24px;
            color: $color-dark-grey;
            margin-bottom: 12px;
          }
        }
      }

      &__menu {
        @include lt-md {
          display: none;
        }
      }
    }

    .category-products {
      flex: auto;

      &__header {
        height: 73px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #eaeaea;

        @include lt-md {
          display: none;
        }

        &-title {
          font-family: $golos-regular;
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 20px;
          letter-spacing: -0.01em;
          color: #7c7c7c;
        }
      }

      &__header-bottom .active-filters {
        @include lt-md {
          display: none;
        }
      }
    }
  }
}
</style>

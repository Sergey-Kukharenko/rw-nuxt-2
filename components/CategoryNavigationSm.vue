<template>
  <div class="category-nav">
    <category-sorting-sm
      v-if="sortingVisbility"
      :list="sortList"
      :curr-sorting="currSorting"
      @set-sort="sortBy"
      @close="closeSorting"
    />
    <category-filters-sm
      v-if="filterVisibility"
      :active-filters="activeFilters"
      :product-count="productCount"
      @change="changeActiveFilter"
      @remove="removeActiveFilter"
      @close="closeFilters"
    />
    <div class="category-nav__item sort" @click="openSorting">
      <svg-icon class="sort__icon" name="sort" />
      {{ currSorting }}
    </div>
    <div class="category-nav__item filter" @click="openFilters">
      Filters<svg-icon class="filter__icon" name="category-filter" />
    </div>
  </div>
</template>

<script>
import { disableScroll, enableScroll } from '~/helpers/scrollLock';

export default {
  name: 'CategoryNavigationSm',

  props: {
    currSorting: {
      type: String,
      default: ''
    },

    productCount: {
      type: [Number, String],
      default: 0
    },

    sortList: {
      type: Array,
      default: () => []
    },

    activeFilters: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      filterVisibility: false,
      sortingVisbility: false
    };
  },

  methods: {
    sortBy(variant) {
      this.$emit('sort', variant);
    },

    openFilters() {
      window.scrollTo(0, 0);

      this.filterVisibility = true;
      disableScroll();
    },

    closeFilters() {
      this.filterVisibility = false;
      enableScroll();
    },

    openSorting() {
      this.sortingVisbility = true;
      disableScroll();
    },

    closeSorting() {
      this.sortingVisbility = false;
      enableScroll();
    },

    changeActiveFilter(payload) {
      this.$emit('change-active-filter', payload);
    },

    removeActiveFilter(filter) {
      this.$emit('remove-active-filter', filter);
    }
  }
};
</script>

<style lang="scss" scoped>
.category-nav {
  @include gt-sm {
    display: none;
  }

  @include lt-md {
    display: flex;
    justify-content: space-between;
    padding-bottom: 16px;

    &__item {
      display: flex;
      gap: 8px;
      font-family: $golos-regular;
      font-style: normal;
      font-weight: 400;
      font-size: 11px;
      line-height: 16px;
      letter-spacing: -0.01em;
      color: #7c7c7c;
      display: flex;
      align-items: center;
    }

    .filter__icon {
      width: 12.57px;
      height: 9.14px;
    }

    .sort__icon {
      width: 8px;
      height: 8px;
    }
  }
}
</style>

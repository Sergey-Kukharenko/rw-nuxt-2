<template>
  <div class="filters">
    <div class="filters__items">
      <category-filter-item
        v-for="(filter, idx) in filtersList"
        :key="idx"
        :filter="filter"
        class="filters__items-item"
        @toggle-filter="toggleFilter"
        @change-filter="changeFilter"
      />
    </div>
  </div>
</template>

<script>
import { FILTER_TYPES } from '~/constants';

import dataCategoryFilters from '~/data/category-filters';

export default {
  name: 'CategoryFilters',

  data() {
    return {
      filterForm: {},
    };
  },

  computed: {
    filtersList() {
      return dataCategoryFilters;
    },
  },

  mounted() {
    this.initFilterForm();
  },

  methods: {
    initFilterForm() {
      this.filtersList.forEach((filter) => {
        let filterFormValue;

        switch (filter.type) {
          case FILTER_TYPES.range:
            filterFormValue = {
              from: null,
              before: null,
            };

            break;

          case FILTER_TYPES.radio:
            filterFormValue = null;

            break;

          case FILTER_TYPES.checkbox:
            filterFormValue = [];
        }

        this.filterForm[filter.title] = filterFormValue;
      });
    },

    changeFilter(payload) {
      this.filterForm[payload.filterKey] = payload.value;

      this.$emit('change-active-filter', payload);
    },

    toggleFilter({ title, key, status }) {
      const idx = dataCategoryFilters.findIndex((f) => f.title === title);

      if (idx !== -1) {
        dataCategoryFilters[idx][key] = !status;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.filters {
  box-sizing: border-box;
  width: 100%;

  &__items {
    background: #ffffff;

    @include gt-sm {
      padding: 32px 24px;
      box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.1);
      border-radius: 16px;
    }

    @include lt-md {
      padding: 0;
    }
  }
}
</style>

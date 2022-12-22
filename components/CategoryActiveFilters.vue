<template>
  <div class="filter">
    <div v-for="(filter, idx) in list" :key="idx" class="filter__item">
      {{ getActiveFilterFormat(filter) }}
      <svg-icon class="filter__item-icon" name="close" @click="removeActiveFilter(filter)" />
    </div>
    <div class="filter__clear" @click="clearFilterActiveList">
      Clear the filter <svg-icon class="filter__clear-icon" name="close" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoryActiveFilters',

  props: {
    list: {
      type: Array,
      default: () => []
    }
  },

  methods: {
    getActiveFilterFormat(filter) {
      if (filter.type === 'range') {
        return `£ ${filter.value.from} – £ ${filter.value.before}`;
      }

      return filter.value;
    },

    removeActiveFilter(filter) {
      this.$emit('remove', filter);
    },

    clearFilterActiveList() {
      this.$emit('clear');
    }
  }
};
</script>

<style lang="scss" scoped>
.filter {
  display: flex;
  flex-wrap: wrap;

  @include gt-sm {
    padding-bottom: 32px;
    gap: 11px;
  }

  @include lt-md {
    padding-bottom: 20px;
    gap: 8px;
  }

  &__item {
    background-color: $bg-grey;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 12px;
    gap: 8px;
    border-radius: 11px;
    font-family: $golos-regular;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -0.01em;
    color: $color-dark-grey;

    @include gt-sm {
      font-size: 14px;
    }

    @include lt-md {
      font-size: 11px;
    }

    &-icon {
      width: 10px;
      height: 10px;
    }
  }
  &__clear {
    @include lt-md {
      display: none;
    }

    display: flex;
    align-items: center;
    gap: 6.2px;
    height: 28px;
    font-family: $golos-regular;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -0.01em;
    color: $color-dark-grey;
    cursor: pointer;

    @include gt-sm {
      padding: 0 12px;
      font-size: 14px;
    }

    &-icon {
      width: 11px;
      height: 11px;
    }
  }
}
</style>

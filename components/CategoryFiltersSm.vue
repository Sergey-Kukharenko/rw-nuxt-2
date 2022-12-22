<template>
  <div class="filters-mobile">
    <div class="filters-mobile__top">
      <div class="filters-mobile__top-col">
        <svg-icon class="icon" name="arrow-green" @click="close" />
        <h2 class="title">Filters</h2>
      </div>
      <div class="filters-mobile__top-col info">Found {{ productCount }}</div>
    </div>
    <div class="filters-mobile__content">
      <category-active-filters v-if="activeFilters.length" :list="activeFilters" @remove="removeActiveFilter" />
      <category-filters @change-active-filter="change" />
    </div>
    <div v-if="activeFilters.length" class="filters-mobile__button">
      <app-button theme="Green" stretch="full" @click="close"> Show {{ productCount }} bouquets </app-button>
    </div>
  </div>
</template>

<script>
import AppButton from '~/components/shared/AppButton.vue';

export default {
  name: 'CategoryFiltersSm',

  components: {
    AppButton
  },

  props: {
    activeFilters: {
      type: Array,
      default: () => []
    },

    productCount: {
      type: [Number, String],
      default: 0
    }
  },

  methods: {
    change(payload) {
      this.$emit('change', payload);
    },

    removeActiveFilter(filter) {
      this.$emit('remove', filter);
    },

    close() {
      this.$emit('close');
    }
  }
};
</script>

<style lang="scss" scoped>
.filters-mobile {
  @include gt-sm {
    display: none;
  }

  @include lt-md {
    box-sizing: border-box;
    position: absolute;
    z-index: 4;
    width: 100%;
    height: calc(100vh - 50px);
    top: 50px;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ffffff;
    padding: 32px 16px;
    overflow: auto;

    &::-webkit-scrollbar {
      width: 4px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #eaeaea;
      border-radius: 2px;
      border: none;
    }

    &__top {
      display: flex;
      margin-bottom: 20px;

      &-col {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 16px;
        flex: 1;

        .title {
          font-family: $golos-bold;
          font-style: normal;
          font-weight: 700;
          font-size: 20px;
          line-height: 24px;
          letter-spacing: -0.01em;
          color: $color-dark-grey;
          margin: 0;
        }
        .icon {
          width: 16px;
          height: 15.54px;
          cursor: pointer;
        }

        &.info {
          display: flex;
          justify-content: flex-end;
          font-family: $golos-regular;
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 20px;
          text-align: right;
          letter-spacing: -0.01em;
          color: $color-white-grey;
        }
      }
    }

    &__button {
      margin-top: 32px;
    }
  }
}
</style>

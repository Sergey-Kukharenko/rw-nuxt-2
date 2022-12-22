<template>
  <div class="tabs">
    <div
      v-for="(tab, index) in tabs"
      :key="index"
      class="tabs__item"
      :class="{ active: isActiveTab(index) }"
      @click="setActiveTab(index)"
    >
      <div class="tabs__item-status-bar"></div>
      {{ tab }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppBenefitsTabs',

  props: {
    tabs: {
      type: Array,
      default: () => []
    },

    activeTab: {
      type: [Number, String],
      default: 0
    }
  },

  methods: {
    isActiveTab(idx) {
      return idx <= this.activeTab;
    },

    setActiveTab(idx) {
      this.$emit('set-active-tab', idx);
    }
  }
};
</script>

<style lang="scss" scoped>
.tabs {
  @include lt-md {
    display: none;
  }

  @include gt-sm {
    display: flex;
    gap: 19.26px;
    padding: 16px 0;

    &__item {
      flex: 1;
      font-family: $golos-bold;
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      color: $color-dark-grey;
      opacity: 0.3;
      cursor: pointer;

      &-status-bar {
        height: 2px;
        border-radius: 16px;
        background: #dde0e6;
        margin-bottom: 12px;
      }

      &.active {
        opacity: 1;

        .tabs__item-status-bar {
          background: $color-dark-green;
        }
      }
    }
  }
}
</style>

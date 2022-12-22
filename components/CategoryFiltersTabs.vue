<template>
  <div class="category-tabs">
    <div
      v-for="(item, index) in tabs"
      :key="index"
      class="category-tabs__item"
      :class="{ active: isActive(item) }"
      @click="setActive(item)"
    >
      {{ item }}
    </div>
  </div>
</template>

<script>
import dataCategoryTabs from '~/data/category-tabs';

export default {
  name: 'CategoryFiltersTabs',

  data() {
    return {
      tabs: dataCategoryTabs,
      activeTab: ''
    };
  },

  computed: {
    isActive() {
      return (tab) => tab === this.activeTab;
    }
  },

  methods: {
    setActive(tab) {
      if (tab === this.activeTab) {
        this.activeTab = '';

        return;
      }

      this.activeTab = tab;
    }
  }
};
</script>

<style lang="scss" scoped>
.category-tabs {
  display: flex;
  flex-direction: row;

  @include gt-sm {
    gap: 9px;
    padding-bottom: 12px;
  }

  @include lt-md {
    gap: 12px;
    padding-bottom: 16px;
  }

  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    background-color: #ffffff;
    box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.1);
    font-family: $golos-regular;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: $color-dark-grey;
    cursor: pointer;
    user-select: none;
    box-sizing: border-box;

    @include gt-sm {
      height: 56px;
      border-radius: 12px;
    }

    @include lt-md {
      height: 40px;
      border-radius: 16px;
    }

    &.active {
      background-color: $color-green;
      color: #ffffff;
    }
  }
}
</style>

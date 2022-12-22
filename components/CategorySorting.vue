<template>
  <div class="category-sorting" :class="{ active: isOpen }" @click="toggle">
    <div class="category-sorting__input">
      {{ currSorting }}
      <svg-icon class="category-sorting__input-icon" name="chevron" />
    </div>
    <div v-show="isOpen" class="category-sorting__list">
      <div v-for="(variant, idx) in sortList" :key="idx" class="category-sorting__list-item" @click="setSort(variant)">
        {{ variant }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategorySorting',

  props: {
    currSorting: {
      type: String,
      default: ''
    },

    sortList: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      isOpen: false
    };
  },

  computed: {},

  mounted() {
    document.addEventListener('click', this.close);
  },

  beforeDestroy() {
    document.removeEventListener('click', this.close);
  },

  methods: {
    setSort(variant) {
      this.$emit('sort', variant);
    },

    toggle() {
      this.isOpen = !this.isOpen;
    },

    close(e) {
      if (!e.target.classList.contains('category-sorting__input')) {
        this.isOpen = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@include gt-sm {
  .category-sorting {
    position: relative;
    box-sizing: border-box;

    &.active {
      .category-sorting__input-icon {
        transform: rotate(-180deg);
      }
    }

    &__input {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 222px;
      padding: 9px 16px;
      background: #ffffff;
      box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.1);
      border-radius: 16px;
      font-family: $golos-regular;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.01em;
      color: $color-dark-grey;
      user-select: none;

      &-icon {
        width: 11px;
        height: 6.33px;
        fill: $color-dark-grey;
      }
    }

    &__list {
      position: absolute;
      top: 46px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 222px;
      padding: 8px 16px;
      gap: 8px;
      background: #ffffff;
      border-radius: 16px;
      z-index: 3;

      &-item {
        width: 100%;
        font-family: $golos-regular;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: -0.01em;
        color: $color-dark-grey;
        cursor: pointer;
      }
    }
  }
}
</style>

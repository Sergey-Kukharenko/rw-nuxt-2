<template>
  <div class="basket-tab">
    <button
      v-for="(item, index) in list"
      :key="index"
      class="basket-tab__item"
      :class="getItemClasses(index)"
      @click="onClick(index)"
    >
      <slot :item="item" />
    </button>
  </div>
</template>

<script>
export default {
  name: 'BasketTab',
  props: {
    list: {
      type: Array,
      default: () => [],
    },
    size: {
      type: String,
      default: 'medium',
      validator(value) {
        return ['small', 'medium', 'large'].includes(value);
      },
    },
    stretch: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      active: 0,
    };
  },
  methods: {
    getItemClasses(index) {
      return {
        'basket-tab__item--active': this.active === index,
        'basket-tab__item--stretch': this.stretch,
        [`basket-tab__size-${this.size}`]: true,
      };
    },
    onClick(index) {
      this.active = index;
      this.$emit('click', index);
    },
  },
};
</script>

<style lang="scss" scoped>
.basket-tab {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  &__item {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex: 1 0 auto;

    outline: none;
    background: #ffffff;
    color: $color-dark-grey;
    border-radius: 12px;
    border: 1.5px solid #EAEAEA;
    padding: 0 18px;

    @include lt-lg {
      height: 36px;
      padding: 0 10px;
    }

    &--active {
      border-color: $color-dark-green;
    }
  }

  &__size-small {
    height: 32px;
  }

  &__size-medium {
    height: 44px;
  }

  &__size-large {
    height: 56px;
  }

  &__item--stretch {
    flex: 1 0 auto;
    justify-content: center;
  }
}
</style>

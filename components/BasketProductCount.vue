<template>
  <div class="count">
    <basket-button theme="grey" size="small" :icon-only="true" :disabled="isMinLimit" @click="decrement">
      <svg-icon class="count__icon-minus" name="minus" />
    </basket-button>
    <basket-input v-model="passedCount" align="center" type="number" :width="88" :min="0" />
    <basket-button theme="grey" size="small" :icon-only="true" @click="increment">
      <svg-icon class="count__icon-plus" name="plus" />
    </basket-button>
  </div>
</template>

<script>
export default {
  name: 'BasketProductCount',
  props: {
    count: {
      type: Number,
      default: 1
    }
  },

  computed: {
    passedCount: {
      get() {
        return this.count;
      },

      set(newVal) {
        this.$emit('update:count', +newVal);
      }
    },

    isMinLimit() {
      return this.passedCount <= 0;
    }
  },

  methods: {
    increment() {
      this.passedCount++;
    },

    decrement() {
      this.passedCount--;
    }
  }
};
</script>

<style lang="scss" scoped>
.count {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;

  &__icon-minus {
    width: 12px;
    height: 2px;
  }

  &__icon-plus {
    width: 12px;
    height: 12px;
  }
}
</style>

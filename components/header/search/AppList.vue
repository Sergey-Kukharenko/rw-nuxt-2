<template>
  <div class="list">
    <div v-for="(item, idx) in list" :key="idx" class="list__item">
      <span class="text" @click="add(item)">{{ item }}</span>
      <svg-icon
        v-if="hasRemoveBtn"
        name="close"
        class="button"
        @click="remove(item)"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppList',

  props: {
    list: {
      type: Array,
      default: () => []
    },

    hasRemoveBtn: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    add(item) {
      this.$emit('addItem', item)
    },

    remove(item) {
      this.$emit('removeItem', item)
    }
  }
};
</script>

<style lang="scss" scoped>
.list {
  &__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: $golos-regular;
    font-size: 16px;
    line-height: 24px;
    color: $color-dark-grey;
    padding: 4px 8px;
    user-select: none;
    cursor: pointer;

    &:hover {
      background: $bg-grey;
      border-radius: 10px;
    }
  }
}

.button {
  width: 10px;
  height: 10px;
  padding: 4px;
  margin-left: 10px;
  opacity: 0;
  transform: scale(0.8);
  transition: opacity 0.2s ease-out 0s, transform 0.2s ease-out 0s;

  &:hover {
    opacity: 1;
    transform: scale(1);
  }
}

.text {
  flex: 1;
}
</style>

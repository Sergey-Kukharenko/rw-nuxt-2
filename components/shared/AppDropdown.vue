<template>
  <div v-click-outside="close" class="dropdown">
    <div class="dropdown__header" @click="isVisible = true">
      <slot name="button" />
    </div>

    <div v-show="isVisible" :style="options" class="dropdown__container" @click="close">
      <slot name="dropdown" />
    </div>
  </div>
</template>

<script>
import vClickOutside from 'v-click-outside'

export default {
  name: 'AppDropdown',

  directives: {
    clickOutside: vClickOutside.directive
  },

  props: {
    options: {
      type: Object,
      default: () => ({})
    }
  },

  data() {
    return {
      isVisible: false
    }
  },

  methods: {
    close() {
      this.isVisible = false
      console.log(this.isVisible);
    }
  }
}
</script>

<style lang="scss" scoped>
.dropdown {
  position: relative;
  display: block;
  z-index: 2;

  &__container {
    position: absolute;
    background: #fff;
    margin-top: 10px;
    border-radius: 0.5rem;
    box-sizing: border-box;
    box-shadow: 0 0 10px 1px #d5d5d5;
  }
}
</style>

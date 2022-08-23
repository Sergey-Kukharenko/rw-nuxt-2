<template>
  <div v-click-outside="close" class="dropdown">
    <div class="dropdown__header" @click="isVisibility = true">
      <slot name="button"> </slot>
    </div>

    <div v-show="isVisibility" class="dropdown__container">
      <slot name="dropdown"> </slot>
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

  data () {
    return {
      isVisibility: false
    }
  },

  methods: {
    close() {
      this.isVisibility = false
    }
  }
};
</script>

<style lang="scss" scoped>
.dropdown {
  position: relative;
  display: block;
  z-index: 2;

  &__container {
    position: absolute;
    width: 100%;
    background: #fff;
    padding: 0.5rem;
    margin-top: 10px;
    border-radius: 0.5rem;
    box-sizing: border-box;
    box-shadow: 0 0 10px 1px #d5d5d5;
  }
}
</style>

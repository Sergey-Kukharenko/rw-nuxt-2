<template>
  <div :class="classNames">
    <div class="header" @click="close">
      <svg-icon name="arrow-back" class="header__icon"/>
      <div class="header__title">{{ title }}</div>
    </div>
    <div class="container">
      <slot/>
    </div>
  </div>
</template>

<script>
import {useToggleClassName} from '~/helpers';

export default {
  name: 'AppDrawerNested',

  props: {
    visible: {
      type: Boolean,
      required: true
    },

    title: {
      type: String,
      default: ''
    }
  },

  computed: {
    classNames() {
      return useToggleClassName(this.visible, 'nested', 'active')
    }
  },

  methods: {
    close() {
      this.$emit('close')
    }
  }
};
</script>

<style lang="scss" scoped>
.nested {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  right: -100%;
  background: #fff;
  overflow-y: auto;
  opacity: 0;
  z-index: 1;
  transition: opacity 0.3s ease 0s, transform 0.3s ease 0s;

  &--active {
    opacity: 1;
    transform: translateX(-100%);
    z-index: 2;
    transition: opacity 0.3s ease 0s, transform 0.3s ease 0s;
  }
}

.header {
  display: flex;
  align-items: center;
  padding: 12px;

  &__icon {
    width: 16px;
    height: 16px;
  }

  &__title {
    font-family: $golos-bold;
    font-size: 16px;
    line-height: 20px;
    margin-left: 8px;
  }
}

.container {
  padding: 0 8px;
}
</style>

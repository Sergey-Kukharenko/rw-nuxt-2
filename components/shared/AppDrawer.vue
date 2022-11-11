<template>
  <div :class="classNames">
    <div class="drawer__button" @click="open">
      <div class="burger">
        <span/>
        <span/>
        <span/>
      </div>
    </div>
    <div class="drawer__overlay" @click="close"/>
    <div class="drawer__container">
      <div class="drawer__inner">
        <div class="drawer__close" @click="close">
          <svg-icon name="close" class="drawer__icon" />
        </div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import {useToggleClassName} from '@/helpers';
import {disableScroll, enableScroll} from '~/helpers/scrollLock';

export default {
  name: 'AppDrawer',

  data() {
    return {
      isVisible: false
    };
  },

  computed: {
    classNames() {
      return useToggleClassName(this.isVisible, 'drawer', 'active');
    }
  },

  methods: {
    open() {
      this.isVisible = true;
      disableScroll();
    },

    close() {
      this.isVisible = false;
      enableScroll();
    }
  }
};
</script>

<style lang="scss" scoped>
.drawer {
  &__button {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
  }

  &__overlay {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: -100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: 3;
    opacity: 0;
    transition: opacity 0.25s ease 0s, transform 0s ease 0.25s;
  }

  &__close {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    position: absolute;
    top: 12px;
    right: -6px;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    z-index: 4;
    transform: translateX(100%);
  }

  &__icon {
    width: 16px;
    height: 16px;
    position: absolute;
    color: #fff;
  }

  &__container {
    @include lt-md {
      width: 100%;
      height: 0;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 4;
      transform: translateX(-101%);
      transition: transform 0.25s ease 0s;
    }
  }

  &__inner {
    display: flex;
    flex-direction: column;
    width: 274px;
    height: 100vh;
    background: #fff;
    position: relative;
  }
}

.burger {
  position: relative;
  width: 16px;
  height: 12px;
  margin: 20px auto;
  cursor: pointer;

  & span {
    width: 100%;
    height: 2px;
    position: absolute;
    left: 0;
    background-color: black;
    transition: all 0.3s ease;

    &:first-child {
      top: 0;
    }

    &:nth-child(2) {
      top: 0;
      bottom: 0;
      margin: auto;
    }

    &:last-child {
      bottom: 0;
    }
  }
}

.drawer--active {
  & .burger span {
    &:first-child {
      transform: rotate(45deg);
    }

    &:last-child {
      transform: rotate(-45deg);
    }

    &:nth-child(2) {
      opacity: 0;
    }

    &:first-child,
    &:last-child {
      top: 6px;
    }
  }
}

.drawer--active .drawer__overlay {
  opacity: 1;
  transform: translateX(100%);
  transition: opacity 0.25s ease 0s, transform 0s ease 0s;
}

.drawer--active .drawer__container {
  transform: translateX(0);
  transition: transform 0.25s ease 0s;
}
</style>

<template>
  <div class="counter">
    <div class="counter__number">{{count}}</div>
  </div>
</template>

<script>
import {useClassName} from '~/helpers';

export default {
  name: 'AppCounter',

  props: {
    count: {
      type: Number,
      required: true
    }
  },

  computed: {
    classNames() {
      return useClassName(this.count, 'counter')
    }
  }
};
</script>

<style lang="scss" scoped>
.counter {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -4px;
  right: -11px;
  width: 20px;
  height: 20px;
  font-family: $golos-medium;
  font-size: 9px;
  line-height: 12px;
  border: 2px solid #fff;
  border-radius: 50%;
  box-sizing: border-box;

  &__number {
    color: #ffffff;
  }
}
</style>

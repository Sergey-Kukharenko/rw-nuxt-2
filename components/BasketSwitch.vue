<template>
  <div class="switch" :class="classes" @click="onClick">
    <div class="switch__pointer" />
  </div>
</template>

<script>
export default {
  name: 'BasketSwitch',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: 'green',
      validator(value) {
        return ['green', 'yellow'].includes(value);
      }
    }
  },
  emits: ['change'],
  computed: {
    classes() {
      return {
        'switch--active': this.value,
        [`switch--color-${this.color}`]: true
      };
    }
  },
  methods: {
    onClick() {
      this.$emit('change', !this.value);
    }
  }
};
</script>

<style lang="scss" scoped>
.switch {
  position: relative;
  width: 44px;
  height: 24px;
  border-radius: 12px;
  background-color: #dde0e6;
  cursor: pointer;
  border: 1px solid #dde0e6;
  box-sizing: border-box;
  transition: all 150ms ease-in-out;

  &__pointer {
    position: absolute;
    z-index: 1;
    top: 0;
    bottom: 0;
    left: 1px;
    margin: auto;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    background-color: #ffffff;
    transition: all 150ms ease-in-out;
  }

  &--color-yellow {
    background-color: #ffffff;
    border: 1px solid #f4d065;

    .switch__pointer {
      background-color: #fcbc00;
    }
  }

  &--active {
    &.switch--color-green {
      background-color: #26ad4f;
    }

    &.switch--color-yellow {
      background-color: #fcbc00;

      .switch__pointer {
        background-color: #ffffff;
      }
    }

    & > .switch__pointer {
      transform: translateX(100%);
    }
  }
}
</style>

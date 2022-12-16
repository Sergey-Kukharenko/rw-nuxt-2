<template>
  <div
    class="switch"
    :class="classes"
    @click="onClick"
  >
    <div class="switch__pointer"/>
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
  background-color: #DDE0E6;
  cursor: pointer;
  border: 1px solid #DDE0E6;
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
    background-color: #FFFFFF;
    transition: all 150ms ease-in-out;
  }

  &--color-yellow {
    background-color: #FFFFFF;
    border: 1px solid #F4D065;

    .switch__pointer {
      background-color: #FCBC00;
    }
  }

  &--active {
    &.switch--color-green {
      background-color: #26AD4F;
    }

    &.switch--color-yellow {
      background-color: #FCBC00;

      .switch__pointer {
        background-color: #FFFFFF;
      }
    }

    & > .switch__pointer {
      transform: translateX(100%);
    }
  }
}
</style>

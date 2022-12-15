<template>
  <div
    class="switch"
    :class="classes"
    @click="onClick"
  >
    <div class="switch__pointer" />
  </div>
</template>

<script>
export default {
  name: "BasketSwitch",
  model: {
    prop: "value",
    event: "change"
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: "green",
      validator (value) {
        return ["green", "yellow"].includes(value);
      }
    }
  },
  emits: ["change"],
  computed: {
    classes () {
      return {
        "switch--active": this.value,
        [`switch--color-${this.color}`]: true
      };
    }
  },
  methods: {
    onClick () {
      this.$emit("change", !this.value);
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
  box-sizing: border-box;
  transition: all 150ms ease-in-out;

  &__pointer {
    position: absolute;
    z-index: 1;
    top: 1px;
    left: 2px;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    background-color: #FFFFFF;
    transition: all 150ms ease-in-out;
  }

  &--color-yellow {
    background-color: #FFFFFF;
    border: 1.5px solid #F4D065;

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
      left: 21px;
    }
  }
}
</style>

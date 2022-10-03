<template>
  <div>
    <div
      class="basket-input"
      :class="classes"
      :style="styles"
    >
      <input
        :type="type"
        :placeholder="placeholder"
        :value="value"
        @input="onInput"
      />
    </div>
    <div
      v-if="error"
      class="basket-input__error"
    >
      {{ error }}
    </div>
  </div>
</template>

<script>
export default {
  name: "BasketInput",
  props: {
    type: {
      type: String,
      default: "text",
      validate (value) {
        return ["text", "password"].includes(value);
      }
    },
    value: {
      type: [String, Number],
      required: true,
      default: ""
    },
    size: {
      type: String,
      default: "medium",
      validate(value) {
        return ["small", "medium", "large"].includes(value);
      }
    },
    placeholder: {
      type: String,
      default: ""
    },
    align: {
      type: String,
      default: "left",
      validate (value) {
        return ["left", "center", "right"].includes(value);
      }
    },
    width: {
      type: [String, Number],
      default: null
    },
    error: {
      type: String,
      default: ""
    }
  },
  emits: ['input'],
  computed: {
    classes () {
      return {
        [`basket-input--size-${this.size}`]: true,
        [`basket-input--align-${this.align}`]: true,
        "basket-input--error": !!this.error
      };
    },
    styles () {
      const styles = {};
      if (this.width) {
        styles.width = Number.isInteger(this.width)
          ? `${this.width}px`
          : this.width;
      }
      return styles;
    }
  },
  methods: {
    onInput (event) {
      this.$emit("input", event.target.value);
    }
  }
};
</script>

<style lang="scss" scoped>
.basket-input {
  display: flex;
  flex-direction: row;
  align-items: center;

  box-sizing: border-box;
  background: $bg-grey;
  color: $color-dark-grey;
  border-radius: 10px;
  width: 100%;

  font-family: $golos-regular;
  font-style: normal;
  font-size: 14px;
  line-height: 20px;

  & > input {
    border: none;
    outline: none;
    background-color: transparent;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    width: 100%;

    &::placeholder {
      font-family: $golos-regular;
      font-style: normal;
      font-size: 14px;
      line-height: 20px;
      color: $color-white-grey;
    }
  }

  &--size-small {
    height: 24px;
    padding: 0 10px;
    border-radius: 8px;
  }

  &--size-medium {
    height: 36px;
    padding: 0 12px;
  }

  &--size-large {
    height: 48px;
    padding: 0 16px;
  }

  &--align-left {
    & > input {
      text-align: left;
    }
  }

  &--align-center {
    & > input {
      text-align: center;
    }
  }

  &--align-right {
    & > input {
      text-align: right;
    }
  }

  &__error {
    font-family: $golos-regular;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #DB1838;
    margin-top: 8px;
    padding-left: 18px;
  }

  &--error {
    border: 1px solid #DB1838;
  }
}
</style>

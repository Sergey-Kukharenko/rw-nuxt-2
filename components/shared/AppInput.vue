<template>
  <div
    class="app-input"
    :class="classes"
  >
    <div
      class="app-input__field"
      :style="styles"
    >
      <slot name="left"/>
      <input
        :type="type"
        :placeholder="placeholder"
        :value="value"
        @input="onInput"
      />
      <slot name="right"/>
    </div>
    <div
      v-if="error"
      class="app-input__error"
    >
      {{ error }}
    </div>
    <div
      v-if="note"
      class="app-input__note"
    >
      {{ note }}
    </div>
  </div>
</template>

<script>
export default {
  name: "AppInput",
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
        return ["small", "medium", "large", "x-large"].includes(value);
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
    },
    note: {
      type: String,
      default: ""
    },
  },
  computed: {
    classes () {
      return {
        [`app-input--size-${this.size}`]: true,
        [`app-input--align-${this.align}`]: true,
        "app-input--error": !!this.error
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
.app-input {
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1 0 auto;

  input {
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

  &__field {
    display: flex;
    flex-direction: row;
    gap: 16px;
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
  }

  &--size-small {
    .app-input__field {
      height: 24px;
      padding: 0 10px;
      border-radius: 8px;
    }
  }

  &--size-medium {
    .app-input__field {
      height: 36px;
      padding: 0 12px;
    }
  }

  &--size-large {
    .app-input__field {
      height: 48px;
      padding: 0 16px;
    }
  }

  &--size-x-large {
    .app-input__field {
      height: 52px;
      padding: 0 16px;
    }
  }

  &--align-left {
    input {
      text-align: left;
    }
  }

  &--align-center {
    input {
      text-align: center;
    }
  }

  &--align-right {
    input {
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
    padding-left: 18px;
  }

  &--error {
    .app-input__field {
      border: 1px solid #DB1838;
    }
  }

  &__note {
    font-family: $golos-regular;
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 16px;
    letter-spacing: -0.01em;
    color: #342700;
    padding-left: 18px;
  }
}
</style>

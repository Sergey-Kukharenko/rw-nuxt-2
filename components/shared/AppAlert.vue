<template>
  <div :class="classes">
    <div class="alert__status">
      <svg-icon class="alert__status-icon" :name="theme" />
    </div>
    <div class="alert__content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppAlert',

  props: {
    theme: {
      type: String,
      default: 'warning',
      validate(val) {
        return ['warning'].includes(val);
      }
    }
  },

  computed: {
    classes() {
      return { alert: true, [`alert--${this.theme}`]: this.theme };
    }
  }
};
</script>

<styles lang="scss" scoped>
.alert {
  display: flex;
  gap: 10px;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 10px;

  &--warning {
    background: rgba(240, 194, 140, 0.2);

    .alert__content {
      color: #502e12;
    }
  }

  &__status {
    width: 24px;

    @include lt-md {
      display: none;
    }

    &-icon {
      width: 24px;
      height: 24px;
    }
  }

  &__content {
    flex: 1;

    border-radius: 10px;
    font-family: $golos-regular;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
  }
}
</styles>

<template>
  <section class="checkout-pane" :class="classes">
    <div class="checkout-pane__title">
      <slot name="title">{{ title }}</slot>
    </div>
    <slot />
  </section>
</template>

<script>
export default {
  name: 'CheckoutPane',
  props: {
    title: {
      type: String,
      default: ''
    },
    delim: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return {
        'checkout-pane--delim': this.delim
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.checkout-pane {
  width: 100%;
  font-family: $golos-regular;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.01em;
  color: #010810;

  @include gt-md {
    padding-bottom: 38px;
  }

  @include lt-lg {
    padding-bottom: 16px;
  }

  &--delim {
    margin-bottom: 40px;

    @include gt-md {
      border-bottom: 1.5px solid #eaeaea;
    }

    @include lt-lg {
      border-bottom: 1px solid #eaeaea;
      margin-bottom: 16px;
    }
  }

  &__title {
    display: flex;
    flex-direction: row;
    align-items: center;

    font-family: $Literata;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #000000;

    @include lt-lg {
      font-size: 20px;
      line-height: 24px;
    }
  }
}
</style>

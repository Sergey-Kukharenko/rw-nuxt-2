<template>
  <svg-icon name="heart" :class="classes" />
</template>

<script>
export default {
  name: 'AppLikeIcon',

  props: {
    theme: {
      type: String,
      default: 'colored',
      validate(value) {
        ['colored', 'grey'].includes(value);
      }
    }
  },

  computed: {
    classes() {
      return {
        [`icon icon--theme-${this.theme}`]: this.theme
      };
    }
  }
};
</script>

<style scoped lang="scss">
.icon {
  display: block;
  mix-blend-mode: normal;
  color: #fff;
  fill: currentColor;
  stroke: $color-white-grey;

  @include gt-sm {
    width: 20px;
    height: 18.5px;
  }

  @include lt-md {
    width: 13.33px;
    height: 12.33px;
  }

  &--theme-colored {
    &:hover,
    &--active {
      color: $color-like-active;
      stroke: #fff;
    }
  }

  &--theme-grey {
    &:hover,
    &--active {
      color: $color-grey;
    }
  }
}
</style>

<template>
  <svg-icon name="heart" :class="classNames" v-on="$listeners" />
</template>

<script>
export default {
  name: 'AppLikeIcon',

  props: {
    active: {
      type: Boolean,
      default: false
    },

    theme: {
      type: String,
      default: 'colored',
      validate(value) {
        ['colored', 'grey'].includes(value);
      }
    }
  },

  computed: {
    classNames() {
      return {
        [`icon icon--theme-${this.theme}`]: this.theme,
        'icon icon--active': this.active
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
  cursor: pointer;

  @include gt-sm {
    width: 20px;
    height: 18.5px;
  }

  @include lt-md {
    width: 13.33px;
    height: 12.33px;
  }

  &--theme-grey {
    color: transparent;

    &.icon {
      &--active {
        color: $color-grey;
        stroke: $color-grey;
      }
    }
  }

  &--theme-colored {
    &.icon {
      &--active {
        color: $color-like-active;
        stroke: #fff;
      }
    }
  }
}
</style>

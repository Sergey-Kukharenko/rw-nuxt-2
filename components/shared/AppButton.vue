<template>
  <button :class="classNames">
    <slot />
  </button>
</template>

<script>
import { useClassName } from '@/helpers'

export default {
  name: 'AppButton',

  props: {
    theme: {
      type: String,
      default: ''
    },

    size: {
      type: String,
      default: ''
    },

    stretch: {
      type: String,
      default: ''
    }
  },

  computed: {
    classNames() {
      return useClassName(this.$props, 'button')
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  font-family: $golos-regular;
  font-size: 15px;
  line-height: 24px;
  color: #ffffff;
  background: $color-green;
  border-radius: 12px;
  padding: 0 12px;
  transition: background-color 0.2s ease 0s;

  @include gt-sm {
    &:hover:not(:disabled) {
      box-shadow: 2px 4px 7px darken($color-green, 10%);
      cursor: pointer;
    }

    &:active:not(:disabled) {
      box-shadow: 0 0 0 $color-green;
    }
  }

  &:disabled {
    background: #ccc;
    cursor: none;
  }

  &--grey {
    color: #000;
    background: #eaeaea;

    @include gt-sm {
      &:hover:not(:disabled) {
        background: #eaeaea;
        box-shadow: 2px 4px 7px darken(#eaeaea, 10%);
        cursor: pointer;
      }

      &:active:not(:disabled) {
        box-shadow: 0 0 0 #eaeaea;
      }
    }
  }

  &--grey-whitely {
    font-family: $golos-medium;
    font-size: 16px;
    color: #000;
    min-height: 48px;
    background: $bg-grey;

    @include gt-sm {
      &:hover:not(:disabled) {
        background: $bg-grey;
        box-shadow: 2px 4px 7px darken($bg-grey, 10%);
        cursor: pointer;
      }

      &:active:not(:disabled) {
        box-shadow: 0 0 0 $bg-grey;
      }
    }
  }

  &--sm {
    @include gt-sm {
      font-size: 14px;
      line-height: 22px;
      padding: 8px 20px;
      min-height: 38px;
    }

    @include lt-md {
      display: flex;
      min-width: 32px;
      min-height: 32px;
      padding: 2px;
      border-radius: 8px;
      box-sizing: border-box;
    }

    & ::v-deep(svg) {
      @include gt-sm {
        display: none;
      }

      @include lt-md {
        display: block;
        margin: auto;
      }
    }

    & ::v-deep(svg + span) {
      @include gt-sm {
        display: block;
      }

      @include lt-md {
        display: none;
      }
    }
  }

  &--fix {
    @include gt-sm {
      width: 244px;
    }

    @include lt-md {
      width: 236px;
    }
  }

  &--full {
    width: 100%;
  }
}
</style>
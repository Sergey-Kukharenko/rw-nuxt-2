<template>
  <div :class="classNames">
    <div v-for="(slide, idx) in slides" :key="idx" class="grid__item">
      <slot v-bind="{ ...slide }"></slot>
    </div>
  </div>
</template>

<script>
import {useClassNameProp} from '~/helpers';
export default {
  name: 'AppSectionGridSm',

  props: {
    slides: {
      type: Array,
      default: () => []
    },

    theme: {
      type: String,
      default: ''
    }
  },

  computed: {
    classNames() {
      return useClassNameProp(this.theme, 'grid')
    },
  }
}
</script>

<style lang="scss" scoped>
.grid {
  display: flex;
  flex-wrap: wrap;

  @include gt-sm {
    gap: 24px;
  }

  @include lt-md {
    row-gap: 12px;
    column-gap: 6px;
  }

  &__item {
    @include gt-sm {
      flex: 1 1 17%;
    }

    @include lt-md {
      flex: 1 1 31%;
    }

    &:nth-child(1),
    &:nth-child(2) {
      @include lt-md {
        flex: 1 1 48%;
      }
    }
  }

  &--custom {
    .grid__item {
      @include gt-sm {
        flex: 1 1 13%;
      }

      @include lt-md {
        flex: 1 1 30%;
      }

      &:nth-child(1),
      &:nth-child(2) {
        @include lt-md {
          flex: 1 1 30%;
        }
      }
    }

    .card__title{
      margin-top: 8px;
    }
  }
}
</style>

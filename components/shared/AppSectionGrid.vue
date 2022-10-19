<template>
  <div :class="classNames">
    <div v-for="(slide, idx) in slides" :key="idx" class="grid__item">
      <slot v-bind="{ ...slide }"></slot>
    </div>

    <div v-if="theme" class="grid__item">
      <app-card-show-more/>
    </div>
  </div>
</template>

<script>
import AppCardShowMore from '~/components/shared/AppCardShowMore';
import {useClassNameProp} from '~/helpers';
export default {
  name: 'AppSectionGrid',
  components: {AppCardShowMore},
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
  display: grid;

  @include gt-sm {
    grid-template-columns: repeat(auto-fill, minmax(22%, 1fr));
    grid-gap: 16px;
    row-gap: 40px;
  }

  @include lt-md {
    grid-template-columns: repeat(auto-fill, minmax(48%, 1fr));
    grid-gap: 8px;
    row-gap: 8px;
  }

  &--custom{
    .grid__item{
      @include lt-md {
        &:nth-last-child(2) {
          display: none;
        }

        &:last-child {
          grid-column: span 2;
          margin-top: 8px;
        }
      }
    }
  }
}
</style>

<template>
  <div v-if="breadCrumbs" class="layout layout--horizontal">
    <div class="breadcrumbs">
      <NuxtLink v-for="item in breadCrumbs" :key="item.text" :to="item.path" class="breadcrumbs__item">
        <svg-icon name="arrow-left" class="breadcrumbs__icon" />
        {{ item.text }}
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import { useBreadCrumbs } from '@/helpers';

export default {
  name: 'AppBreadcrumbs',

  computed: {
    breadCrumbs() {
      return useBreadCrumbs(this.$route);
    }
  }
};
</script>

<style lang="scss" scoped>
.breadcrumbs {
  @include gt-xs {
    display: flex;
    padding: 11px 0;
  }

  @include xs {
    padding: 10px 0;
  }

  &__item {
    font-family: $golos-regular;
    color: $color-white-grey;
    text-transform: capitalize;

    @include gt-xs {
      display: flex;
      align-items: center;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: 0.01em;
    }

    @include xs {
      display: none;
      font-size: 11px;
      line-height: 16px;
    }

    &:hover {
      color: $color-dark-grey;
    }

    &:not(:last-child) {
      @include gt-xs {
        &:after {
          content: '';
          display: block;
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 3px 0 3px 5px;
          border-color: transparent transparent transparent #ababab;
          margin: 0 10px;
        }
      }
    }

    &:nth-last-child(2) {
      @include xs {
        display: flex;
        align-items: center;
        color: $color-dark-grey;
      }
    }

    &:last-child {
      cursor: default;

      @include gt-xs {
        color: $color-dark-grey;
      }
    }
  }

  &__icon {
    @include gt-xs {
      display: none;
    }

    @include xs {
      display: block;
      width: 12px;
      height: 16px;
      margin: 0 4px 0 9px;
    }
  }
}
</style>

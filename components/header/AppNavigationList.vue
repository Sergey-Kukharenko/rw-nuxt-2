<template>
  <div :class="classNames">
    <a
      v-for="item in list"
      :key="item.title"
      :href="item.href"
      target="_blank"
      class="navigation-list__item"
    >
      <div class="content">
        <div v-if="item.icon" class="content__figure">
          <svg-icon
            :name="item.icon"
            :style="item.style"
            :class="['content__icon', item.icon]"
          />
        </div>
        <div class="content__text">
          {{ item.title }}
        </div>
        <div v-if="item.count" class="content__count">
          {{ item.count }}
        </div>
      </div>
    </a>
    <div class="navigation-list__item sm-hide">
      <slot/>
    </div>
  </div>
</template>

<script>
import {useClassName} from '~/composables/useClassName';

export default {
  name: 'AppNavigationList',
  props: {
    list: {
      type: Array,
      default: () => []
    },
    options: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    classNames() {
      return useClassName(this.$props.options, 'navigation-list');
    }
  }
};
</script>

<style lang="scss" scoped>
.navigation-list {
  @include gt-sm {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 -12px;
  }

  @include lt-md {
    margin: 0;
  }

  &--full {
    .navigation-list__item {
      &:first-child {
        position: relative;

        &:not(:hover) {
          color: #009959;
        }

        &:hover {
          color: lighten(#009959, 5%);
        }

        @include gt-sm {
          &:after {
            content: '';
            display: block;
            width: 1px;
            height: 20px;
            background: #e5e5e5;
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            margin: auto;
          }
        }
      }

      &:last-of-type {
        &:not(:hover) {
          color: #f1ae01;
        }

        &:hover {
          color: lighten(#f1ae01, 5%);
        }
      }

      &.sm-hide{
        display: none;
      }
    }

    .content {
      &__figure {
        @include lt-md {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
          margin-right: 7px;
        }
      }
    }
  }

  &--mixed {
    &:last-child {
      @include lt-md {
        display: none;
      }
    }
  }

  &__item {
    display: block;
    margin: 0;
    font-family: $golos-regular;
    color: $color-dark-grey;

    @include gt-sm {
      font-size: 14px;
      line-height: 24px;
    }

    @include lt-md {
      font-size: 12px;
      line-height: 16px;
    }

    &:hover {
      color: lighten($color-dark-grey, 20%);
    }

    @include gt-sm {
      padding: 10px 12px;
    }

    @include lt-md {
      padding: 8px 6px;
    }
  }
}

.content {
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @include lt-md {
    margin: 0;
  }

  &__icon {
    display: block;
    width: 16px;
    height: 16px;
    color: inherit;
    fill: currentColor;

    @include gt-sm {
      margin-right: 7px;
    }
  }

  &__count {
    display: flex;
    align-items: center;
    justify-content: center;
    color: $color-white-grey;

    &::before {
      content: '';
      display: block;
      width: 4px;
      height: 4px;
      background: currentColor;
      border-radius: 50%;
      margin: 0 4px;
    }
  }
}

.whatsapp {
  @include lt-md {
    display: none;
  }
}

.tile {
  @include gt-sm {
    width: 20px;
    height: 20px;
  }

  @include lt-md {
    width: 16px;
    height: 16px;
  }
}
</style>

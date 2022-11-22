<template>
  <div class="order-panel--wrapper">
    <div class="order-panel" :class="{ toggled: toggleStatus }">
      <div>
        <svg-icon class="order-panel__icon" :name="icon" />
      </div>
      <div class="order-panel__content">
        <div class="order-panel__title">
          {{ title }}
          <div v-if="hasToggle" class="order-panel__toggle" @click="$emit('toggle');">
            <svg-icon class="order-panel__toggle-icon" name="chevron" />
          </div>
          <slot name="top" />
        </div>
        <div v-if="!hasToggle" class="order-panel__body">
          <slot />
        </div>
      </div>
    </div>
    <div class="full">
      <slot name="full" />
    </div>
    <div v-show="hasToggle" class="detail-separator" />
  </div>
</template>

<script>
export default {
  name: 'OrderPanel',

  props: {
    title: {
      type: String,
      default: '',
    },

    icon: {
      type: String,
      default: '',
    },

    hasToggle: {
      type: Boolean,
      default: false,
    },

    toggleStatus: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.order-panel {
  display: flex;
  justify-content: center;
  gap: 17px;

  @include lt-md {
    gap: 16px;
  }

  &.toggled {
    .order-panel__toggle-icon {
      transform: rotate(-180deg);
    }
  }

  &--wrapper {
    border: 1.5px solid #eaeaea;
    border-radius: 16px;
    padding: 20px 24px 16px 24px;
    box-sizing: border-box;

    @include lt-md {
      border: none;
      padding: 0;
    }

    .detail-separator {
      display: block;
      height: 1px;
      background: #eaeaea;
      margin-top: 8px;

      @include gt-sm {
        display: none;
      }
    }
  }

  &__title {
    display: flex;
    align-items: center;
    justify-content: space-between;

    font-family: $golos-medium;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.01em;
    color: $color-dark-grey;

    @include lt-md {
      font-size: 16px;
      line-height: 20px;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  &__body {
    font-family: $golos-regular;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.01em;
    color: $color-dark-grey;
    
    margin-top: 8px;
    
    @include lt-md {
      color: #7c7c7c;
    }
  }

  &__icon {
    width: 32px;
    height: 32px;
  }

  &__toggle {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 48px;
    height: 32px;
    background: #f7f7f7;
    border-radius: 12px;
    cursor: pointer;
    user-select: none;

    @include lt-md {
      justify-content: flex-end;
      background: #ffffff;
    }

    &-icon {
      width: 16.5px;
      fill: #000;
      filter: brightness(0);
      transition: transform 0.2s ease-in;

      @include lt-md {
        width: 10.5px;
      }
    }
  }
}
</style>

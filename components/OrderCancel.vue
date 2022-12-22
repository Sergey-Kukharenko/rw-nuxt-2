<template>
  <div class="container">
    <div class="container__body">
      <div class="container__layout cancel-order">
        <div class="cancel-order__title">
          <div class="cancel-order__close">
            <svg-icon name="close" class="cancel-order__close-icon" @click="$emit('close')" />
          </div>
          Are you sure you want to<br />
          cancel the order?
        </div>
        <div class="cancel-order__buttons">
          <app-button theme="green" stretch="full" @click="$emit('close')">Cancel</app-button>
          <app-button
            theme="grey-whitely"
            class="cancel-order__button--mobile"
            stretch="full"
            @click="$emit('cancel-order')"
            >Yes, cancel the order</app-button
          >
          <div class="cancel-order__button" @click="$emit('cancel-order')">Cancel the order</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from '@/components/shared/AppButton';

export default {
  name: 'OrderCancel',

  components: {
    AppButton
  }
};
</script>

<style lang="scss" scoped>
.container {
  @include gt-sm {
    width: 392px;
    box-sizing: border-box;
  }

  &__layout {
    padding: 24px;
    overflow: auto;
    border-radius: 16px;
  }

  .cancel-order {
    display: flex;
    flex-direction: column;
    gap: 24px;

    @include lt-md {
      gap: 20px;
    }

    &__close {
      @include gt-sm {
        display: none;
      }

      display: flex;
      justify-content: flex-end;

      &-icon {
        width: 16px;
        height: 16px;
        user-select: none;
      }
    }

    &__title {
      font-family: $golos-medium;
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 28px;
      text-align: center;
      letter-spacing: 0.01em;
      color: $color-dark-grey;

      @include lt-md {
        font-size: 16px;
        line-height: 20px;
      }
    }

    &__buttons {
      display: flex;
      flex-direction: column;
      gap: 8px;

      @include lt-md {
        gap: 4px;
      }
    }

    &__button {
      @include lt-md {
        display: none;
      }

      display: flex;
      align-items: center;
      justify-content: center;

      height: 44px;
      font-family: $golos-regular;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: #db1838;
      user-select: none;
      cursor: pointer;

      &--mobile {
        @include gt-sm {
          display: none;
        }
      }
    }
  }
}
</style>

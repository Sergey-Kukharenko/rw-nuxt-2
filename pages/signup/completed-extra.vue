<template>
  <div class="layout completed">
    <div class="completed__info">
      <div class="completed__info-title">Registration passed successfully</div>
      <div class="completed__info-text">We are glad to welcome you<br /> on our website!</div>
    </div>
    <div class="completed__btn">
      <app-button theme="green-whitely" stretch="full">Go shopping</app-button>
    </div>
  </div>
</template>

<script>
import AppButton from '~/components/shared/AppButton.vue';

export default {
  name: 'CompletedExtraPage',

  components: {
    AppButton,
  },

  layout: 'mobile',
};
</script>

<style lang="scss" scoped>
.completed {
  @include gt-sm {
    display: none;
  }

  @include lt-md {
    background: $color-green url('~/static/images/registration/reg-bg.png') 100% 60% no-repeat;
    height: calc(100vh - 50px);

    &__info {
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding-top: 12px;

      &-title {
        font-family: $golos-bold;
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.01em;
        color: #ffffff;
      }

      &-text {
        font-family: $golos-regular;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #eaeaea;
      }
    }

    &__btn {
      position: absolute;
      bottom: 4px;
      width: 100%;
      right: 50%;
      transform: translate(50%, -50%);
      width: 90%;
    }
  }
}
</style>

<template>
  <div class="error">
    <figure class="error__figure">
      <img src="/images/status/error.png" class="error__img" alt="Error" />
    </figure>
    <div class="error__title">Oops, something went wrong</div>
    <div class="error__desc">Check your internet connection</div>
    <div class="error__buttons">
      <app-button theme="green" stretch="full">Go back main page</app-button>
      <app-button theme="grey-whitely" stretch="full">Report a problem</app-button>
    </div>
  </div>
</template>

<script>
import AppButton from '~/components/shared/AppButton';

export default {
  name: 'OrderError',

  components: {
    AppButton,
  },
};
</script>

<style lang="scss" scoped>
.error {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  padding: 60px 0 100px 0;
  box-sizing: border-box;

  @include lt-md {
    padding: 24px;
  }

  &__figure {
    display: flex;
    justify-content: center;
    padding-bottom: 32px;

    @include lt-md {
      padding-bottom: 16px;
    }
  }

  &__img {
    width: 196px;
    height: 226px;

    @include lt-md {
      width: 80px;
      height: 92px;
    }
  }

  &__title {
    font-family: $Literata;
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 40px;
    text-align: center;
    letter-spacing: -0.01em;
    color: $color-dark-grey;
    padding-bottom: 16px;

    @include lt-md {
      font-family: $golos-bold;
      font-size: 20px;
      line-height: 24px;
      letter-spacing: 0;
      padding-bottom: 8px;
    }
  }

  &__desc {
    font-family: $golos-regular;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    letter-spacing: -0.01em;
    color: $color-dark-grey;

    @include lt-md {
      font-size: 14px;
      line-height: 20px;
      color: #7c7c7c;
    }
  }

  &__buttons {
    @include lt-md {
      display: none;
    }

    display: flex;
    flex-direction: column;
    gap: 16px;
    padding-top: 24px;
    width: 288px;
  }
}
</style>

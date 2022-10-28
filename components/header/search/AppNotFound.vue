<template>
  <div class="not-found">
    <div class="not-found__figure">
      <img src="/images/not-found.jpg" class="not-found__img" alt="not-found" />
    </div>

    <div class="not-found__group">
      <div class="not-found__title">Sorry, nothing found</div>
      <div class="not-found__desc">
        <p class="not-found__text">Unfortunately, we didn't find anything.</p>
        <p class="not-found__text">Adjust your request or go to the catalog.</p>
      </div>
    </div>

    <nuxt-link to="/">
      <app-button size="pre-lg" class="not-found__button">
        Go to catalog
      </app-button>
    </nuxt-link>
  </div>
</template>

<script>
import AppButton from '~/components/shared/AppButton';

export default {
  name: 'AppNotFound',
  components: {AppButton}
};
</script>

<style lang="scss" scoped>
.not-found {
  text-align: center;
  margin: 0 auto;

  @include gt-sm {
    max-width: 464px;
    padding: 60px 0 38px;
  }

  @include lt-md {
    padding: 34px 0 38px;
  }

  &__figure {
    max-width: 182px;
    max-height: 121px;
    margin: 0 auto;
  }

  &__img {
    display: block;
    max-width: 100%;
  }

  &__group {
    margin: 40px 0;
  }

  &__title {
    font-family: $golos-bold;

    @include gt-sm {
      font-size: 24px;
      line-height: 28px;
    }

    @include lt-md {
      font-size: 20px;
      line-height: 24px;
    }
  }

  &__desc {
    font-family: $golos-regular;

    @include gt-sm {
      font-size: 16px;
      line-height: 24px;
      margin-top: 14px;
    }

    @include lt-md {
      font-size: 14px;
      line-height: 20px;
      margin-top: 12px;
    }
  }

  &__text {
    padding: 0;
    margin: 0;
  }

  &__button {
    width: 240px;
    margin: 0 auto;
  }
}
</style>

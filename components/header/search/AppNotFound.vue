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
    <app-button size="pre-lg" class="not-found__button">
      Go to catalog
    </app-button>
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
  max-width: 464px;
  text-align: center;
  padding: 60px 0 38px;
  margin: 0 auto;

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
    font-size: 24px;
    line-height: 28px;
  }

  &__desc {
    font-family: $golos-regular;
    font-size: 16px;
    line-height: 24px;
    margin-top: 14px;
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

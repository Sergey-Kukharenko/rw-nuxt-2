<template>
  <div class="layout favorites">
    <h2 class="title favorites__title">Favorites</h2>

    <div class="favorites__container">
      <svg-icon name="heart" class="favorites__icon" />

      <div class="favorites__caption">
        <h3 class="favorites__caption-title">You don't have any selected products yet</h3>
        <div class="favorites__caption-text">
          Add your favorite bouquets to favorites so as not to search for them every time before buying
        </div>
      </div>

      <nuxt-link to="/">
        <app-button size="md" class="favorites__button">Choose a bouquet</app-button>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import AppButton from '~/components/shared/AppButton';
export default {
  name: 'AppFavoritesEmpty',

  components: { AppButton }
};
</script>

<style scoped lang="scss">
.favorites {
  &__title {
    margin: 0;
  }

  &__container {
    max-width: 488px;
    color: $color-dark-grey;
    text-align: center;
    margin: 0 auto;

    @include gt-sm {
      padding: 60px 0;
    }

    @include lt-md {
      padding: 76px 0 62px;
    }
  }

  &__icon {
    display: block;
    color: $color-like-active;

    @include gt-sm {
      width: 136px;
      height: 126px;
      margin: 0 auto -6px;
    }

    @include lt-md {
      width: 100px;
      height: 93px;
      margin: 0 auto -4px;
    }
  }

  &__caption {
    @include gt-sm {
      padding: 24px 0;
    }

    @include lt-md {
      padding: 16px 0;
    }
  }

  &__caption-title {
    font-family: $golos-bold;
    margin: 0;

    @include gt-sm {
      font-size: 24px;
      line-height: 28px;
      letter-spacing: 0.01em;
    }

    @include lt-md {
      max-width: 198px;
      font-size: 16px;
      line-height: 20px;
      margin: 0 auto;
    }
  }

  &__caption-text {
    max-width: 392px;
    font-family: $golos-regular;

    @include gt-sm {
      font-size: 16px;
      line-height: 24px;
      margin: 12px auto 0;
    }

    @include lt-md {
      max-width: 264px;
      font-size: 14px;
      line-height: 20px;
      margin: 11px auto 0;
    }
  }

  &__button {
    margin: 0 auto;
  }
}
</style>

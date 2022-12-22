<template>
  <nav class="navigation-user">
    <div class="navigation-user__item">
      <app-favorite />
    </div>
    <div class="navigation-user__item">
      <app-cart />
    </div>
    <div class="navigation-user__item">
      <app-profile />
    </div>
  </nav>
</template>

<script>
import AppFavorite from '@/components/header/AppFavorite';
import AppCart from '@/components/header/AppCart.vue';
import AppProfile from '@/components/header/profile/AppProfile.vue';

export default {
  name: 'AppNavigationUser',

  components: {
    AppFavorite,
    AppCart,
    AppProfile
  }
};
</script>

<style lang="scss" scoped>
.navigation-user {
  display: flex;
  align-items: center;

  @include gt-md {
    margin: 0 -32px;
  }

  @include md {
    margin: 0 -16px;
  }

  @include lt-md {
    margin: 10px 0;
  }

  &__item {
    @include md {
      margin: 0 16px;
    }

    @include gt-md {
      padding: 0 32px;
    }

    &:nth-child(2) {
      @include lt-md {
        display: none;
      }
    }
  }
}

.card {
  &__figure {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    margin: 0 auto;
  }

  &__icon {
    fill: $color-light-grey;
  }

  &__figcaption {
    font-family: $golos-medium;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: $color-white-grey;
    margin-top: 7px;
  }

  &:hover {
    opacity: 0.75;
  }
}
</style>

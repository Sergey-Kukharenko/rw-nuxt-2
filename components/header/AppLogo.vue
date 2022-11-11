<template>
  <nuxt-link to="/" class="logo">
    <img src="/images/logo.jpg" class="logo__img" alt="logo" />
  </nuxt-link>
</template>

<script>
export default {
  name: 'AppLogo'
}
</script>

<style lang="scss" scoped>
.logo {
  display: block;

  @include lt-md {
    margin-right: auto;
  }

  &__img {
    display: block;

    @include gt-sm {
      max-width: 154px;
      margin-left: -6px;
    }

    @include lt-md {
      max-width: 111.22px;
    }
  }
}
</style>

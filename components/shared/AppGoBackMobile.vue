<template>
  <div class="back">
    <svg-icon class="back__icon" name="arrow-green" @click="goBack" />
  </div>
</template>

<script>
export default {
  name: 'AppGoBackMobile',

  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss">
.back {
  @include gt-sm {
    display: none;
  }

  @include lt-md {
    &__icon {
      width: 16px;
      height: 15.54px;
      user-select: none;
    }
  }
}
</style>

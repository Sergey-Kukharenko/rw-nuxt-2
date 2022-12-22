<template>
  <div class="stars">
    <svg-icon v-for="(star, idx) in stars" :key="idx" name="star" class="stars__icon" />
  </div>
</template>

<script>
export default {
  name: 'AppStars',

  props: {
    stars: {
      type: Number,
      default: 1
    }
  }
};
</script>

<style lang="scss" scoped>
.stars {
  display: flex;

  &--content-right {
    justify-content: flex-end;

    .stars__icon {
      @include lt-md {
        height: 16px;
        width: 16px;
      }

      &:not(:first-child) {
        @include gt-sm {
          margin-left: 2.78px;
        }

        @include lt-md {
          margin-left: 2px;
        }
      }
    }
  }

  &__icon {
    width: 15.22px;
    height: 14.47px;

    &:not(:first-child) {
      margin-left: 2.78px;
    }
  }
}
</style>

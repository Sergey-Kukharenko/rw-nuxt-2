<template>
  <div class="card">
    <div class="card__figure">
      <img :src="pathToImage" :alt="slide.img" class="card__img" />
    </div>

    <div class="card__title">{{ slide.title }}</div>
  </div>
</template>

<script>
import { useSizedImage } from '~/helpers';

export default {
  name: 'AppCardSm',

  props: {
    slide: {
      type: Object,
      default: () => ({})
    },

    useLocalPathToImg: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    pathToImage() {
      return this.useLocalPathToImg
        ? this.slide.img
        : this.useSizedImage({ name: this.slide.img, width: 320, height: 320 });
    }
  },

  methods: {
    useSizedImage
  }
};
</script>

<style lang="scss" scoped>
.card {
  &__figure {
    overflow: hidden;

    @include gt-sm {
      min-height: 160px;
      border-radius: 16px;
    }

    @include lt-md {
      min-height: 92px;
      border-radius: 12px;
    }
  }

  &__img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__title {
    font-family: $golos-medium;

    color: $color-dark-grey;
    text-align: center;

    @include gt-sm {
      font-size: 16px;
      line-height: 20px;
      margin-top: 16px;
    }

    @include lt-md {
      font-size: 12px;
      line-height: 16px;
      margin-top: 8px;
    }
  }
}
</style>

<template>
  <div class="slider">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="(slide, index) in slides" :key="index">
        <div class="slider-item slide" :style="getSlideWidth(index)">
          <div class="backdrop"></div>
          <div class="slide__nav">
            <div class="slide__nav-item step">{{ getCurrStep(index) }} of {{ slides.length }}</div>
            <div class="slide__nav-item swipe">
              <svg-icon class="swipe__icon" name="cursor-hand" />
            </div>
          </div>
          <div class="slide__picture">
            <img :src="slide.img" :alt="slide.img" class="slide__picture-img" />
          </div>
          <div class="slide__info info">
            <div class="info__title">{{ slide.title }}</div>
            <div class="info__text">
              {{ slide.text }}
              <a href="#" class="info__text-link">Get bonuses for any purchases on MyFlowers</a>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';

export default {
  name: 'AppBenefitsSlider',

  components: {
    Swiper,
    SwiperSlide
  },

  props: {
    slides: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      swiperOptions: {
        loop: false,
        loopedSlides: 4,
        centeredSlides: false,
        spaceBetween: 4,
        slidesPerView: 1,
        touchRatio: 0.2
      }
    };
  },

  methods: {
    getSlideWidth(index) {
      return index === this.slides.length - 1 ? { width: '100%' } : { width: '97%' };
    },

    getCurrStep(index) {
      return index + 1;
    }
  }
};
</script>

<style lang="scss" scoped>
.slider {
  @include gt-sm {
    display: none;
  }

  @include lt-md {
    display: flex;
    position: relative;
    border-radius: 12px;

    .slide {
      position: relative;
      border-radius: 12px;
      z-index: 2;
      background: #ffffff;
      box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
      margin: 0 1px;

      .backdrop {
        position: absolute;
        width: 103%;
        top: 2.5%;
        height: 95%;
        z-index: -2;
        background: #eaeaea;
        border-radius: 12px;
      }

      &__nav {
        position: absolute;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        top: 8px;
        padding: 0 8px;
        box-sizing: border-box;

        &-item {
          padding: 4px 6px;
          background: rgba(0, 0, 0, 0.26);
          backdrop-filter: blur(10px);
          border-radius: 6px;
          font-family: $golos-regular;
          font-style: normal;
          font-weight: 400;
          font-size: 10px;
          line-height: 12px;
          letter-spacing: 0.01em;
          color: #ffffff;

          &.swipe {
            padding: 4px;
          }
          .swipe__icon {
            width: 16px;
            height: 12px;
          }
        }
      }

      &__picture {
        background: inherit;

        &-img {
          border-radius: 12px 12px 0 0;
          width: 100%;
        }
      }

      .info {
        display: flex;
        flex-direction: column;
        gap: 8px;
        border-radius: 0 0 12px 12px;
        padding: 16px 12px 28px 12px;
        background-color: #fff;

        &__title {
          font-family: $Literata;
          font-style: normal;
          font-weight: 700;
          font-size: 20px;
          line-height: 24px;
          letter-spacing: -0.01em;
          color: #1f2226;
        }

        &__text {
          display: flex;
          flex-direction: column;
          gap: 8px;
          max-width: 90%;

          font-family: $golos-regular;
          font-style: normal;
          font-weight: 400;
          font-size: 12px;
          line-height: 16px;
          letter-spacing: 0.01em;
          color: #7c7c7c;

          &-link {
            display: block;
            max-width: 70%;
            color: $color-dark-green;
          }
        }
      }
    }
  }
}
</style>

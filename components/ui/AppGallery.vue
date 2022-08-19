<template>
  <div class="thumb-example">
    <!-- swiper1 -->
    <swiper
      ref="swiperTop"
      class="swiper gallery-top"
      :options="swiperOptionTop"
    >
      <swiper-slide v-for="(slide, idx) in slides" :key="idx">
        <slot v-bind="{ ...slide }"></slot>
      </swiper-slide>
      <div
        slot="button-next"
        class="swiper-button-next swiper-button-white"
      ></div>
      <div
        slot="button-prev"
        class="swiper-button-prev swiper-button-white"
      ></div>
    </swiper>
    <!-- swiper2 Thumbs -->
    <swiper
      ref="swiperThumbs"
      class="swiper gallery-thumbs"
      :options="swiperOptionThumbs"
    >
      <swiper-slide v-for="(slide, idx) in slides" :key="idx">
        <slot v-bind="{ ...slide }"></slot>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
/*
for more info:
https://github.com/surmon-china/surmon-china.github.io/tree/vue2/projects/vue-awesome-swiper/examples
 */

import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    // options: {
    //   type: Object,
    //   default: () => ({})
    // },
    slides: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      swiperOptionTop: {
        loop: true,
        loopedSlides: 5, // looped slides should be the same
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      swiperOptionThumbs: {
        loop: true,
        loopedSlides: 5, // looped slides should be the same
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.$swiper
      const swiperThumbs = this.$refs.swiperThumbs.$swiper
      swiperTop.controller.control = swiperThumbs
      swiperThumbs.controller.control = swiperTop
    })
  }
}
</script>

<style lang="scss" scoped>
.thumb-example {
  height: 480px;
}

.swiper {
  .swiper-slide {
    background-size: cover;
    background-position: center;
  }

  &.gallery-top {
    height: 80%;
    width: 100%;
  }
  &.gallery-thumbs {
    height: 20%;
    box-sizing: border-box;
    padding: 8px 0;
  }
  &.gallery-thumbs .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
  }
  &.gallery-thumbs .swiper-slide-active {
    opacity: 1;
  }
}
</style>

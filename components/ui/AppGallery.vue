<template>
  <div class="thumb-example">
    <swiper ref="swiperTop" class="swiper swiper--gallery" :options="swiperOptionTop">
      <swiper-slide v-for="(slide, idx) in slides" :key="idx">
        <app-gallery-card :slide="slide" />
      </swiper-slide>

      <div slot="pagination" class="swiper-pagination"></div>
    </swiper>

    <swiper ref="swiperThumbs" class="swiper-thumbs" :options="swiperOptionThumbs">
      <swiper-slide v-for="(slide, idx) in thumbs" :key="idx">
        <div class="thumbs-item">
          <img :src="slide.img" :alt="slide.img" class="thumbs-item__img" />
          <div class="thumbs-item__border absolute-grow" />
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import AppGalleryCard from '@/components/shared/AppGalleryCard.vue';

export default {
  components: {
    Swiper,
    SwiperSlide,
    AppGalleryCard
  },
  props: {
    slides: {
      type: Array,
      default: () => []
    },
    thumbs: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      swiperOptionTop: {
        loop: true,
        loopedSlides: 4,
        keyboard: { enabled: true },
        slidesPerView: 1,
        pagination: {
          el: '.swiper-pagination'
        },
      },

      swiperOptionThumbs: {
        loop: true,
        loopedSlides: 4,
        centeredSlides: false,
        spaceBetween: 4,
        slidesPerView: 4,
        touchRatio: 0.2,
        slideToClickedSlide: true,
      }
    };
  },

  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.$swiper;
      const swiperThumbs = this.$refs.swiperThumbs.$swiper;
      swiperTop.controller.control = swiperThumbs;
      swiperThumbs.controller.control = swiperTop;
    });
  }
};
</script>

<style lang="scss">
.swiper-container.swiper--gallery {
  @include xs {
    padding: 0;
    margin: 0 -14px;
  }
}

.thumbs-item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 66px;
  height: 66px;
  position: relative;
  box-sizing: border-box;
  cursor: pointer;

  &__img {
    display: block;
    width: 60px;
    height: 60px;
    object-fit: cover;
    position: relative;
    z-index: 1;
    border-radius: 12px;
    overflow: hidden;
  }

  &__border {
    opacity: 0;
    border: 2px solid $color-green;
    border-radius: 12px;
  }
}

.swiper-container {
  user-select: none;

  &.swiper-thumbs {
    @include gt-xs {
      width: 276px;
      margin: 12px auto 0 -4px;
    }

    @include xs {
      display: none;
    }

    .swiper-slide {
      width: 66px;
    }
  }
}

.swiper.swiper--gallery {
  .swiper-pagination-bullets {
    @include gt-xs {
      display: none;
    }

    .swiper-pagination-bullet {
      background: rgba(255, 255, 255, 0.5);
    }

    .swiper-pagination-bullet.swiper-pagination-bullet-active {
      background: rgba(255, 255, 255, 1);
    }
  }
}

.swiper-slide-active .thumbs-item__border {
  opacity: 1;
}
</style>

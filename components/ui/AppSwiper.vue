<!--<template>-->
<!--  <swiper-->
<!--    :slides-per-view="4"-->
<!--    :space-between="16"-->
<!--    :free-mode="true"-->
<!--    :navigation="false"-->
<!--    :pagination="false"-->
<!--    :modules="modules"-->
<!--    v-bind="{ ...options }"-->
<!--    class="swiper"-->
<!--  >-->
<!--    <swiper-slide v-for="(slide, idx) in slides" :key="idx">-->
<!--      <slot v-bind="{ ...slide }"></slot>-->
<!--    </swiper-slide>-->
<!--  </swiper>-->
<!--</template>-->

<!--<script>-->
<!--import { Swiper, SwiperSlide } from 'swiper/vue'-->
<!--import { FreeMode, Pagination, Navigation, Mousewheel, Keyboard } from 'swiper'-->

<!--export default {-->
<!--  name: 'AppSwiper',-->
<!--  components: {-->
<!--    Swiper,-->
<!--    SwiperSlide,-->
<!--  },-->
<!--  props: {-->
<!--    options: {-->
<!--      type: Object,-->
<!--      default: () => ({})-->
<!--    },-->
<!--    slides: {-->
<!--      type: Array,-->
<!--      default: () => []-->
<!--    }-->
<!--  },-->
<!--  data() {-->
<!--    return {-->
<!--      modules: [-->
<!--        FreeMode,-->
<!--        Pagination,-->
<!--        Navigation,-->
<!--        Mousewheel,-->
<!--        Keyboard-->
<!--      ]-->
<!--    }-->
<!--  }-->
<!--};-->
<!--</script>-->

<!--<style lang="scss">-->
<!--@import 'swiper/scss';-->
<!--@import 'swiper/scss/free-mode';-->
<!--@import 'swiper/scss/pagination';-->

<!--.swiper {-->
<!--  @include xs {-->
<!--    padding: 0 6px;-->
<!--    margin: 0 -6px;-->
<!--  }-->
<!--}-->
<!--</style>-->

<template>
  <ssr-carousel v-bind="{ ...options }">
    <div v-for="(slide, idx) in slides" :key="idx" class="slide">
      <slot v-bind="{ ...slide }"></slot>
    </div>
  </ssr-carousel>
</template>

<script>
import SsrCarousel from 'vue-ssr-carousel'
import 'vue-ssr-carousel/index.css'

export default {
  name: 'App',
  components: {
    SsrCarousel
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
      options: {
        slidesPerPage: 4,
        gutter: 16
      }
    }
  }
};
</script>

<style lang="scss">

</style>


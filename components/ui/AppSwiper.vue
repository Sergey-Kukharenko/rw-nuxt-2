<template>
  <swiper class="swiper" :options="options">
    <swiper-slide v-for="(slide, idx) in slides" :key="idx">
      <slot v-bind="{ ...slide }" />
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
    Swiper,
    SwiperSlide
  },

  props: {
    options: {
      type: Object,
      default: () => ({})
    },

    slides: {
      type: Array,
      default: () => []
    }
  }
}
</script>

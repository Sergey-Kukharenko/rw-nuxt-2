<template>
  <section class="layout promotion">
    <nuxt-link v-for="promotion in promotions" :key="promotion.text" to="/flowers/roses/0" class="promotion__item">
      <div class="promotion__text">
        {{ promotion.text }}
      </div>
      <figure class="promotion__figure">
        <img :src="promotion.img[getImg]" class="promotion__image" :alt="promotion.text" />
      </figure>
    </nuxt-link>
  </section>
</template>

<script >
import dataPromotions from '@/data/promotions'

export default {
  data() {
    return {
      promotions: dataPromotions
    }
  },

  computed: {
    getImg() {
      return this.$device.isMobileOrTablet ? 'mobile' : 'desktop'
    }
  }
}
</script>

<style scoped lang="scss">
.promotion {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
  grid-gap: $gap-ds;

  @include lt-md {
    margin: 14px 0;
  }

  @include sm {
    grid-template-columns: repeat(auto-fill, minmax(49%, 1fr));
    grid-gap: $gap-mb;
  }

  @include xs {
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
    grid-gap: 8px;
  }

  &__item {
    position: relative;
    background: #fff2d5;
    border-radius: $border-radius-ds;
    box-sizing: border-box;
    overflow: hidden;

    @include gt-xs {
      display: flex;
      align-items: center;
      min-height: 96px;
      padding: 20px;
    }

    @include xs {
      min-height: 48px;
      padding: 12px 16px;
      border-radius: $border-radius-mb;
    }

    &:nth-child(1) {
      .promotion__image {
        top: -78px;
        right: -162px;

        @include sm {
          top: -53px;
          right: -98px;
        }

        @include xs {
          top: -53px;
          right: -98px;
        }
      }

      .promotion__text {
        @include gt-xs {
          max-width: 162px;
        }
      }
    }

    &:nth-child(2) {
      .promotion__image {
        top: -74px;
        right: -30px;

        @include sm {
          top: -38px;
          right: -17px;
        }

        @include xs {
          top: -38px;
          right: -17px;
        }
      }

      .promotion__text {
        @include gt-xs {
          max-width: 114px;
        }
      }
    }

    &:nth-child(3) {
      .promotion__image {
        top: -52px;
        right: -12px;

        @include sm {
          top: -33px;
          right: -8px;
        }

        @include xs {
          top: -33px;
          right: -8px;
        }
      }

      .promotion__text {
        @include gt-xs {
          max-width: 182px;
        }

        @include xs {
          max-width: 150px;
        }
      }
    }
  }

  &__text {
    color: #2f2b20;

    @include gt-xs {
      max-width: 60%;
      font-family: $golos-bold;
      letter-spacing: -0.01em;
    }

    @include xs {
      max-width: 140px;
      font-family: $golos-medium;
      font-size: 13px;
      line-height: 16px;
    }
  }

  &__figure {
    width: 50%;
    height: 0;
    position: absolute;
    top: 0;
    right: 16px;
    bottom: 0;
    margin: auto;
  }

  &__image {
    position: absolute;
  }
}
</style>

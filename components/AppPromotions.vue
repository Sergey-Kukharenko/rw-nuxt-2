<template>
  <div v-if="isPromotions" class="promotion">
    <div v-if="hasTitle" class="layout layout--horizontal promotion-title">Why people choose us</div>
    <div class="layout promotion-list">
      <a v-for="(promotion, idx) in promotions" :key="idx" class="promotion-list__item">
        <div class="promotion-list__text">
          <div v-for="(item, index) in promotion.text" :key="index">{{ item }}</div>
        </div>
        <figure class="promotion-list__figure">
          <img :src="promotion.img[getImg]" class="promotion-list__image" :alt="promotion.text" />
        </figure>
      </a>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: {
    hasTitle: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    ...mapGetters({ promotions: 'pages/home/getPromotions' }),

    isPromotions() {
      return this.promotions.length;
    },

    getImg() {
      return this.$device.isMobileOrTablet ? 'mobile' : 'desktop';
    }
  }
};
</script>

<style scoped lang="scss">
.promotion-title {
  @include gt-sm() {
    font-family: $golos-bold;
    font-size: 20px;
    line-height: 24px;
    color: $color-dark-grey;

    & + .promotion-list {
      margin-top: 0;
    }
  }

  @include lt-md() {
    display: none;

    & + .promotion-list {
      margin-top: 22px;
    }
  }
}

.promotion-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
  grid-gap: $gap-ds;

  @include gt-sm {
    margin-top: 24px;
    margin-bottom: 6px;
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
      min-height: 80px;
      padding: 20px;
    }

    @include xs {
      min-height: 48px;
      padding: 12px 16px;
      border-radius: $border-radius-mb;
    }

    &:nth-child(1) {
      .promotion-list__image {
        top: -37px;
        right: 0;

        @include sm {
          top: -24px;
          right: -4px;
        }

        @include xs {
          top: -24px;
          right: -4px;
        }
      }

      .promotion-list__text {
        @include gt-xs {
          max-width: 162px;
        }

        &:nth-child(1) {
          & > div {
            &:nth-child(1) {
              font-family: $golos-bold;
              color: $color-dark-green;
            }
          }
        }
      }
    }

    &:not(:nth-child(1)) {
      .promotion-list__text {
        & > div {
          &:nth-child(2) {
            font-family: $golos-bold;
            color: $color-dark-green;
          }
        }
      }
    }

    &:nth-child(2) {
      .promotion-list__image {
        top: -63px;
        right: -30px;

        @include sm {
          top: -46px;
          right: -32px;
        }

        @include xs {
          top: -46px;
          right: -32px;
        }
      }

      .promotion-list__text {
        @include gt-xs {
          max-width: 114px;
        }
      }
    }

    &:nth-child(3) {
      .promotion-list__image {
        top: -60px;
        right: -24px;

        @include sm {
          top: -47px;
          right: -36px;
        }

        @include xs {
          top: -47px;
          right: -36px;
        }
      }

      .promotion-list__text {
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
      font-family: $golos-medium;
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
    mix-blend-mode: darken;
  }
}
</style>

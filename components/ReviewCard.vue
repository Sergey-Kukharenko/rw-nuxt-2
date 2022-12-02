<template>
  <div class="review-card">
    <figure class="review-card__picture">
      <img :src="cardImage" class="review-card__image" :alt="cardImage" />
      <div class="review-card__name">
        {{ fullName }}
      </div>
    </figure>
    <div class="review-card__rating rating">
      <div class="rating__stars">
        <!-- <stars-rating :model-value="4.6" star-size="13" spacing="0.68" inactive-color="#ffffff" disable-click /> -->
      </div>
      <div class="rating__social">
        <img :src="`/icons/${socialIcon}.png`" class="rating__social-icon" :alt="`/icons/${socialIcon}.png`" />
      </div>
    </div>
    <div class="review-card__text">
      {{ cardText }} <span v-if="isToggableText" class="more__btn" @click="toggleText">{{ toggleBtnText }}</span>
    </div>
  </div>
</template>

<script>
// import StarsRating from '@/components/shared/stars-rating/StarsRating';
import { REVIEW_CARD_SYMBOLS_COUNT } from '~/constants';

export default {
  name: 'StarsRating',

  components: {
    // StarsRating,
  },

  props: {
    fullName: {
      type: String,
      default: '',
    },

    images: {
      type: Object,
      default: () => ({}),
    },

    socialIcon: {
      type: String,
      default: 'google',
    },

    ratingCount: {
      type: [Number, String],
      default: 0,
    },

    text: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      hidden: true,
    };
  },

  computed: {
    cardImage() {
      return this.$device.isDesktop ? this.images.desktop : this.images.mobile;
    },

    isToggableText() {
      return this.text.length > REVIEW_CARD_SYMBOLS_COUNT;
    },

    cardText() {
      return this.isToggableText && this.hidden ? this.text.substring(0, REVIEW_CARD_SYMBOLS_COUNT) + '...' : this.text;
    },

    toggleBtnText() {
      return this.hidden ? 'more' : 'less';
    },
  },

  methods: {
    toggleText() {
      this.hidden = !this.hidden;
    },
  },
};
</script>

<style lang="scss" scoped>
.review-card {
  background: #f7f7f7;
  border-radius: 24px;
  padding-bottom: 16px;

  @include gt-sm {
    flex: 1;
  }

  @include lt-md {
    width: calc(50% - 8px);
  }

  &__picture {
    display: flex;
    align-items: flex-end;
    position: relative;

    @include lt-md {
    }
  }

  &__image {
    width: 100%;
    border-radius: 24px;
  }

  &__name {
    position: absolute;
    z-index: 2;
    background: #ffffff;

    font-family: $golos-regular;
    font-style: normal;
    font-weight: 400;
    letter-spacing: -0.01em;
    color: $color-dark-grey;
    user-select: none;

    @include gt-sm {
      padding: 6px 12px;
      border-radius: 22px;
      font-size: 14px;
      line-height: 20px;
      transform: translate(16px, -16px);
    }

    @include lt-md {
      padding: 2px 8px;
      border-radius: 8px;
      font-size: 11px;
      line-height: 16px;
      transform: translate(8px, -8px);
    }
  }

  .rating {
    @include gt-sm {
      padding: 8px 16px;
    }

    @include lt-md {
      padding: 8px;
    }

    &__social-icon {
      width: 20px;
      height: 20px;
    }
  }

  &__text {
    font-family: $golos-regular;
    font-style: normal;
    font-weight: 400;
    letter-spacing: -0.01em;
    color: $color-dark-grey;

    @include gt-sm {
      padding: 0 16px;
      font-size: 14px;
      line-height: 20px;
    }

    @include lt-md {
      font-size: 11px;
      line-height: 16px;
      letter-spacing: -0.01em;
      padding: 0 8px;
    }

    .more__btn {
      user-select: none;
      color: $color-dark-green;

      @include gt-sm {
        cursor: pointer;
      }
    }
  }
}
</style>

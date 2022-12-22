<template>
  <div class="reviews">
    <div :class="classNames" @click="sort()">
      <div class="button__figcaption">Popular {{ text }}</div>
      <div class="button__figure">
        <div class="button__icon" />
        <div class="button__icon" />
        <div class="button__icon" />
      </div>
    </div>
    <app-reviews-list :reviews="passedReviews" />
    <app-button theme="grey-whitely" stretch="full"> Show more </app-button>
  </div>
</template>

<script>
import AppReviewsList from '@/components/card-product/AppReviewsList';
import AppButton from '@/components/shared/AppButton';
import { useSortArrayBy, useToggleClassName } from '@/helpers';

export default {
  name: 'AppReviews',

  components: {
    AppReviewsList,
    AppButton
  },

  props: {
    reviews: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      order: false,
      text: 'first'
    };
  },

  computed: {
    classNames() {
      return useToggleClassName(this.order, 'button', 'active');
    },

    passedReviews() {
      return this.reviews;
    }
  },

  methods: {
    toggleText() {
      this.order ? (this.text = 'first') : (this.text = 'last');
    },

    toggleOrder() {
      this.order = !this.order;
    },

    sortArrayBy() {
      return useSortArrayBy(this.passedReviews, this.order, 'date');
    },

    sort() {
      this.toggleText();
      this.sortArrayBy();
      this.toggleOrder();
    }
  }
};
</script>

<style lang="scss" scoped>
.reviews {
  margin: 6px 0 0;

  &__title {
    font-family: $Literata;
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 32px;
  }
}

.button {
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;

  &__figcaption {
    font-family: $golos-bold;
    font-size: 16px;
    line-height: 20px;
    color: #000;

    @include gt-sm {
      margin-right: 10px;
    }

    @include lt-md {
      margin-right: 6px;
    }
  }

  &__figure {
    width: 12px;
    height: 10px;
    position: relative;
  }

  &__icon {
    position: absolute;
    height: 2px;
    background: $color-green;
    transition: width 0.1s ease 0s;

    &:nth-child(1) {
      width: 4px;
      left: 0;
      top: 0;
    }

    &:nth-child(2) {
      width: 8px;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      margin: auto 0;
    }

    &:nth-child(3) {
      width: 12px;
      left: 0;
      bottom: 0;
    }
  }

  &--active {
    .button__icon {
      &:nth-child(1) {
        width: 12px;
      }

      &:nth-child(3) {
        width: 4px;
      }
    }
  }
}
</style>

<template>
  <div class="form">
    <div class="section">
      <div class="section__item item">
        <div class="item__header">{{ product.title }}</div>
        <div class="item__body item__body--sm-include-border">
          <app-offers :offers="product.options" @setOffer="onSetOffer"/>
          <app-offer-detail :list="offer.item.components"/>
        </div>
      </div>
    </div>

    <div class="form__footer">
      <div class="form__footer-price">
        <div class="price">
          <div class="price__current">£{{ offer.price.amount }}</div>
          <div v-if="offer.price.old" class="price__old">£{{ offer.price.old }}</div>
        </div>
        <app-badges v-if="product.badges" :badges="product.badges"/>
      </div>

      <div class="group-buttons">
        <div class="group-buttons__item">
          <app-button theme="green" stretch="fix" @click="addToCart">Send now</app-button>
        </div>
        <div class="group-buttons__item">
          <app-button theme="grey" @click="toggleLike">
            <svg-icon name="heart-outline" :class="classNames"/>
          </app-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {useToggleClassName} from '@/helpers';
import AppOffers from '@/components/product/AppOffers';
import AppButton from '@/components/shared/AppButton';
import AppBadges from '@/components/shared/AppBadges';
import AppOfferDetail from '@/components/product/AppOfferDetail';
import ToastCardDeals from '@/components/toast-cards/ToastCardDeals';

export default {
  name: 'AppFormOffers',

  components: {
    AppOfferDetail,
    AppOffers,
    AppBadges,
    AppButton,
  },

  props: {
    product: {
      type: Object,
      default: () => ({})
    }
  },

  data() {
    return {
      offer: this.product?.options[0],
      like: this.product.like
    };
  },

  computed: {
    classNames() {
      return useToggleClassName(this.like, 'like', 'active');
    }
  },

  mounted() {
    const content = {
      component: ToastCardDeals,
      props: {
        icon: {
          name: 'lightning',
          size: {width: 28, height: 28}
        },
        title: 'Great product!',
        text: '943 people have bought this product in the last 7 days',
      }
    };

    const options = {
      timeout: 3000,
      icon: false,
      closeButton: false,
      position: 'bottom-left',
      class: ['toast', 'toast--width-md', 'toast--theme-dark'],
    };

    this.$toast(content, options);
  },

  methods: {
    onSetOffer(payload) {
      this.offer = payload;
    },

    toggleLike() {
      this.like = !this.like;
    },

    addToCart() {
      this.$store.dispatch('cart/addToCart', this.offer);
    }
  }
};
</script>
<style lang="scss" scoped>
.form {
  &__footer {
    @include gt-sm {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      padding: 28px 0;
    }

    @include lt-md {
      padding: 20px 0;
    }
  }

  &__footer-price {
    margin-top: -4px;

    @include lt-md {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
}

.section {
  border-bottom: 1px solid #eaeaea;

  @include gt-sm {
    padding-bottom: 12px;
    margin: 26px 0 0;
  }

  &__item {
    @include gt-sm {
      margin: 16px 0;
    }

    @include lt-md {
      margin: 12px 0;

      &:last-child {
        margin-bottom: 8px;
      }
    }
  }
}

.item {
  &__header {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    font-family: $golos-regular;

    @include gt-sm {
      font-size: 15px;
      line-height: 24px;
    }

    @include lt-md {
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.01em;
    }
  }

  &__header-number {
    margin: 0;
  }

  &__header-text {
    margin: 0 9px 0 7px;
  }

  &__header-content {
    color: $color-white-grey;

    @include gt-sm {
      margin: 0;
    }

    &--wrapping {
      @include lt-md {
        display: flex;
        width: 100%;
        margin: 11px 0 6px 0;
      }
    }
  }

  &__body {
    @include lt-sm {
      margin: 3px -14px;
      overflow: hidden;
    }

    &--sm-include-border {
      @include lt-sm {
        margin: 3px 0;
      }
    }
  }
}

.price {
  flex-shrink: 0;
  display: flex;

  @include gt-sm {
    align-items: baseline;
  }

  @include lt-sm {
    align-items: center;
  }

  &__current {
    color: #000000;

    @include gt-sm {
      font-family: $golos-medium;
      font-size: 40px;
      line-height: 48px;
    }

    @include lt-md {
      font-family: $golos-bold;
      font-size: 32px;
      line-height: 40px;
    }
  }

  &__old {
    position: relative;
    font-family: $golos-regular;
    font-size: 16px;
    line-height: 16px;
    letter-spacing: -0.01em;
    color: $color-white-grey;

    @include gt-sm {
      margin-left: 10px;
    }

    @include lt-sm {
      margin: 0 0 -8px 6px;
    }

    &:before,
    &:after {
      content: '';
      display: block;
      height: 1px;
      position: absolute;
      top: 0;
      bottom: 0;
      left: -2px;
      right: -2px;
      margin: auto;
      transform: rotate(-26.07deg);
    }

    &:before {
      top: -1px;
      background: #fff;
    }

    &:after {
      background: #db1838;
    }
  }
}

.group-buttons {
  display: flex;

  @include lt-md {
    margin: 8px 0;
  }

  &__item {
    &:not(:first-child) {
      margin-left: 8px;
    }
  }
}

.like {
  display: block;
  width: 20px;
  height: 18.5px;
  fill: transparent;
  stroke: $color-grey;
  transition: fill 0.2s ease-out 0s, stroke 0.2s ease-out 0s;

  &--active {
    fill: $color-grey;
    stroke: $color-grey;
  }
}
</style>

<template>
  <div class="card">
    <div class="card__container">
      <a class="card__figure figure absolute-grow">
        <img
          :src="slide.img"
          class="absolute-center figure__img"
          :alt="slide.img"
        />
        <div class="figure__overlay figure__overlay--top"></div>
        <div class="figure__overlay figure__overlay--bottom"></div>
      </a>
      <div class="card__header header">
        <div class="header__rating rating">
          <div class="rating__text">{{ slide.rating }}</div>
          <svg-icon name="star" class="rating__icon" />
        </div>

        <button class="header__like like">
          <svg-icon name="heart" class="like__icon" />
        </button>
      </div>
      <div class="card__title">
        {{ slide.title }}
      </div>
    </div>
    <div class="card__footer footer">
      <div class="footer__price price">
        <div class="price__group group">
          <div class="group__text">£ {{ slide.price }}</div>
          <div class="group__badge">
            <app-badge theme="red">
              {{ slide.sale.percent }}
            </app-badge>
          </div>
        </div>
        <div class="price__current">£ {{ slide.price }}</div>
      </div>
      <div class="footer__button">
        <app-button theme="green" size="sm">
          <svg-icon name="bag" class="icon" />
          <span>Send</span>
        </app-button>
      </div>
    </div>
  </div>
</template>

<script>
import AppBadge from './AppBadge.vue'
import AppButton from './AppButton.vue'

export default {
  name: 'AppCard',
  components: {
    AppBadge,
    AppButton
  },
  props: {
    slide: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  &__figure {
    z-index: 1;
  }

  &__container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    border-radius: 12px;
    box-sizing: border-box;

    @include gt-xs {
      height: 340px;
      padding: 8px;
    }

    @include xs {
      height: 150px;
      padding: 10px;
    }

    &:hover {
      .figure__img {
        transform: translate(-50%, -50%) scale(1.1);
      }

      .figure__overlay {
        height: 20%;
      }
    }
  }

  &__title {
    position: relative;
    z-index: 2;
    color: #fff;
    text-align: center;

    @include gt-xs {
      font-family: $golos-bold;
      font-size: 18px;
      line-height: 22px;
      padding: 20px 0;
    }

    @include xs {
      font-family: $golos-regular;
      font-size: 14px;
      line-height: 14px;
      padding: 2px 0;
    }
  }

  &__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @include gt-xs {
      padding: 17px 0 18px;
      border-bottom: 1px solid #dde0e6;
    }

    @include xs {
      padding: 7px 0;
    }
  }
}

.figure {
  border-radius: 12px;
  overflow: hidden;

  &__img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
    transform: translate(-50%, -50%) scale(1);
    transition: opacity 0.35s, transform 0.35s;
  }

  &__overlay {
    position: absolute;
    z-index: 2;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 7e-5) 0%,
        rgba(0, 0, 0, 0.0109804) 9.22%,
        rgba(0, 0, 0, 0.0384314) 18.76%,
        rgba(0, 0, 0, 0.0823529) 28.48%,
        rgba(0, 0, 0, 0.14) 38.19%,
        rgba(0, 0, 0, 0.203137) 47.75%,
        rgba(0, 0, 0, 0.27451) 56.99%,
        rgba(0, 0, 0, 0.351373) 65.75%,
        rgba(0, 0, 0, 0.42549) 73.87%,
        rgba(0, 0, 0, 0.496863) 81.18%,
        rgba(0, 0, 0, 0.56) 87.52%,
        rgba(0, 0, 0, 0.617647) 92.74%,
        rgba(0, 0, 0, 0.661569) 96.66%,
        rgba(0, 0, 0, 0.68902) 99.14%,
        rgba(0, 0, 0, 0.7) 100%
    );
    border-radius: 12px;
    transition: height 0.35s;

    &--top {
      left: 0;
      right: 0;
      top: 0;
      transform: matrix(1, 0, 0, -1, 0, 0);

      @include gt-xs {
        height: 25.29777%;
      }

      @include xs {
        height: 32%;
      }
    }

    &--bottom {
      left: 0;
      right: 0;
      bottom: 0;

      @include gt-xs {
        height: 35.29777%;
      }

      @include xs {
        height: 42.67%;
      }
    }
  }
}

.header {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.rating {
  display: flex;
  align-items: center;

  @include gt-xs {
    padding: 4px 8px;
    background: rgba(0, 0, 0, 0.26);
    //backdrop-filter: blur(20px);
    border-radius: 8px;
  }

  @include xs {
  }

  &__text {
    font-family: $golos-regular;
    letter-spacing: -0.01em;
    color: #fff;

    @include gt-xs {
      font-size: 11px;
      line-height: 16px;
    }

    @include xs {
      font-size: 10px;
      line-height: 12px;
    }
  }

  &__icon {
    display: block;

    @include gt-xs {
      width: 13.32px;
      height: 12.66px;
      margin-left: 4px;
    }

    @include xs {
      width: 10px;
      height: 10px;
      margin-left: 2.24px;
    }
  }
}

.like {
  &__icon {
    display: block;
    fill: none;
    stroke: #fff;

    @include gt-xs {
      width: 20px;
      height: 18.5px;
    }

    @include xs {
      width: 13.33px;
      height: 12.33px;
    }
  }
}

.price {
  &__group {
    margin: 0;
  }

  &__current {
    font-family: $golos-bold;

    @include gt-xs {
      font-size: 20px;
      line-height: 24px;
      letter-spacing: 0.03px;
    }

    @include xs {
      font-size: 16px;
      line-height: 20px;
      letter-spacing: -0.01em;
      margin-top: -1px;
    }
  }
}

.group {
  display: flex;

  @include gt-xs {
    align-items: center;
    font-size: 14px;
    line-height: 16px;
  }

  @include xs {
    font-size: 10px;
    line-height: 12px;
  }

  &__text {
    font-family: $golos-regular;
    letter-spacing: 0.01em;
    color: $color-white-grey;

    @include gt-xs {
      font-size: 14px;
      line-height: 16px;
    }

    @include xs {
      font-size: 10px;
      line-height: 12px;
    }
  }

  &__badge {
    @include gt-xs {
      margin-left: 8px;
    }

    @include xs {
      margin-left: 4px;
    }
  }
}

.icon {
  fill: white;

  @include gt-xs {
    width: 16px;
    height: 16.25px;
  }

  @include xs {
    width: 15px;
    height: 16.25px;
  }
}
</style>

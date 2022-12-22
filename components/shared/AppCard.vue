<template>
  <div class="card">
    <div class="card__container">
      <div class="header">
        <app-badge v-if="slide.sale" theme="red" class="header__badge">
          {{ slide.sale.percent }}
        </app-badge>
        <button class="like">
          <svg-icon name="heart" class="like__icon" />
        </button>
      </div>
      <a class="figure absolute-grow">
        <img :src="slide.img" class="absolute-center figure__img" :alt="slide.img" />
      </a>
    </div>
    <div class="card__body">
      <div class="rating">
        <div class="rating__text">{{ slide.rating }}</div>
        <svg-icon name="star" class="rating__icon" />
        <div class="rating__reviews">12 560</div>
      </div>

      <div class="title">
        {{ slide.title }}
      </div>
      <div class="content">
        <div class="price">
          <div v-if="slide.sale" class="group">
            <div class="price__old">£ {{ slide.price }}</div>
            <div class="group__badge">
              <app-badge theme="red">
                {{ slide.sale.percent }}
              </app-badge>
            </div>
          </div>
          <div class="price__current">£ {{ slide.price }}</div>
        </div>
        <app-button theme="green" size="sm">
          <span>Send</span>
        </app-button>
      </div>
    </div>
  </div>
</template>

<script>
import AppBadge from './AppBadge.vue';
import AppButton from './AppButton.vue';

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
  overflow: hidden;

  @include gt-sm {
    box-shadow: 0 4px 32px rgba(0, 0, 0, 0.1);
    border-radius: 14px;
  }

  @include lt-md {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
  }

  &__body {
    background: #fff;
    position: relative;
    z-index: 2;
  }

  &__container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    border-radius: 12px;
    box-sizing: border-box;

    @include gt-sm {
      height: 254px;
      padding: 8px;
    }

    @include lt-md {
      height: 144px;
      padding: 8px;
    }

    &:hover {
      .figure__img {
        transform: translate(-50%, -50%) scale(1.1);
      }
    }
  }
}

.figure {
  z-index: 1;

  &__img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
    transform: translate(-50%, -50%) scale(1);
    transition: opacity 0.35s, transform 0.35s;
  }
}

.title {
  position: relative;
  z-index: 2;
  color: $color-dark-grey;

  @include gt-sm {
    min-height: 40px;
    font-family: $golos-bold;
    font-size: 16px;
    line-height: 20px;
    padding: 10px 12px 8px;
  }

  @include lt-md {
    min-height: 28px;
    font-family: $golos-regular;
    font-size: 11px;
    line-height: 14px;
    padding: 6px 8px 0;
  }
}

.content {
  display: flex;
  align-items: center;
  justify-content: space-between;

  @include gt-sm {
    padding: 0 12px 12px;
  }

  @include lt-md {
    padding: 5px 8px 7px;
  }
}

.rating {
  display: inline-flex;
  align-items: center;
  position: absolute;
  transform: translateY(-50%);
  color: $color-white-grey;
  background: #fff;
  border-radius: 0 8px 0 0;

  @include gt-sm {
    min-height: 22px;
    box-sizing: border-box;
    padding: 3px 10px 3px 12px;
  }

  @include lt-md {
    padding: 4px 6px 4px 8px;
  }

  &__text {
    font-family: $golos-regular;
    letter-spacing: -0.01em;

    @include gt-sm {
      font-size: 11px;
    }

    @include lt-md {
      font-size: 10px;
      line-height: 12px;
    }
  }

  &__icon {
    display: block;

    @include gt-sm {
      width: 13.32px;
      height: 12.66px;
      margin: 0 4px;
    }

    @include lt-md {
      width: 10px;
      height: 10px;
      margin-left: 2px;
    }
  }

  &__reviews {
    font-family: $golos-regular;

    @include gt-sm {
      font-size: 10px;
      line-height: 13px;
    }

    @include lt-md {
      display: none;
    }
  }

  &:after {
    content: '';
    display: block;
    width: 20px;
    height: 19px;
    position: absolute;
    right: -17px;
    clip: rect(11px, 10px, auto, auto);
    border: 3px solid #fff;
    box-sizing: border-box;
    border-radius: 50%;

    @include gt-sm {
      top: -5px;
    }

    @include lt-md {
      top: -6px;
    }
  }
}

.like {
  &__icon {
    display: block;
    color: #fff;
    mix-blend-mode: normal;
    stroke: #7c7c7c;

    @include gt-sm {
      width: 20px;
      height: 18.5px;
    }

    @include lt-md {
      width: 13.33px;
      height: 12.33px;
    }
  }
}

.price {
  display: flex;
  flex-direction: column;
  justify-content: center;

  @include gt-sm {
    min-height: 44px;
  }

  @include lt-md {
    min-height: 27px;
  }

  @include lt-md {
    display: flex;
    flex-direction: column;
  }

  &__group {
    @include lt-md {
      order: 2;
    }
  }

  &__old {
    position: relative;
    font-family: $golos-regular;
    color: $color-white-grey;
    letter-spacing: 0.01em;

    @include gt-sm {
      font-size: 16px;
      line-height: 16px;
    }

    @include lt-md {
      font-size: 11px;
      line-height: 12px;
    }

    &:before,
    &:after {
      content: '';
      display: block;
      height: 1px;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      transform: rotate(-10deg);
    }

    &:before {
      top: -1px;
      background: #fff;
    }

    &:after {
      background: #db1838;
    }
  }

  &__current {
    font-family: $golos-bold;

    @include gt-sm {
      font-size: 20px;
      line-height: 24px;
      letter-spacing: 0.03px;
    }

    @include lt-md {
      font-size: 14px;
      line-height: 16px;
      letter-spacing: -0.01em;
      margin-top: -1px;
    }
  }
}

.group {
  display: flex;

  @include gt-sm {
    align-items: center;
  }

  &__badge {
    @include gt-sm {
      margin-left: 8px;
    }

    @include lt-md {
      display: none;
    }
  }
}

.header {
  display: flex;
  align-items: center;
  position: relative;
  z-index: 2;

  @include gt-sm {
    justify-content: end;
  }

  @include lt-md {
    justify-content: space-between;
  }

  &__badge {
    @include gt-sm {
      display: none;
    }

    @include lt-md {
      display: block;
    }
  }
}
</style>

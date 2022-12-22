<template>
  <div class="card" :style="styles">
    <div class="card__content">
      <div class="card__content-title">{{ title }}</div>
      <div class="card__content-text">{{ text }}</div>
    </div>
    <div class="card__button">
      <app-button theme="green-white">Go to the catalog</app-button>
    </div>
  </div>
</template>

<script>
import AppButton from '@/components/shared/AppButton';

export default {
  name: 'AppAdvertisingCard',

  components: {
    AppButton
  },

  props: {
    bgColor: {
      type: String,
      default: ''
    },

    image: {
      type: String,
      default: ''
    },

    title: {
      type: String,
      default: ''
    },

    text: {
      type: String,
      default: ''
    }
  },

  computed: {
    styles() {
      return {
        background: `${this.bgColor} url(${this.image}) no-repeat 100% 0`,
        backgroundSize: this.$device.isMobileOrTablet ? '50%' : '60%'
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  flex: 1;
  position: relative;
  box-sizing: border-box;
  border-radius: 24px;

  @include gt-sm {
    height: 252px;
    padding: 32px 24px;
  }

  @include lt-md {
    height: 128px;
    padding: 24px;
  }

  &__content {
    display: flex;
    flex-direction: column;

    @include gt-sm {
      gap: 16px;
    }

    @include lt-md {
      gap: 12px;
    }

    &-title {
      font-family: $golos-medium;
      font-style: normal;
      font-weight: 600;
      color: $color-dark-grey;

      @include gt-sm {
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.01em;
      }

      @include lt-md {
        font-size: 16px;
        line-height: 20px;
      }
    }

    &-text {
      font-family: $golos-regular;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
      letter-spacing: -0.01em;
      color: $color-dark-grey;

      @include gt-sm {
        font-size: 18px;
        max-width: 177px;
      }

      @include lt-md {
        font-size: 14px;
        max-width: 138px;
      }
    }
  }

  &__button {
    position: absolute;
    bottom: 32px;

    @include lt-md {
      display: none;
    }
  }
}
</style>

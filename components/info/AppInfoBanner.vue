<template>
  <section class="banner" :class="[page + '-banner']" :style="styles">
    <div class="banner__container layout">
      <div class="banner__content">
        <h1 class="banner__title">{{ title }}</h1>
        <p class="banner__text">{{ text }}</p>
      </div>
      <app-button theme="green" class="banner__button">Go to the catalog</app-button>
      <div v-if="hasButtons" class="banner__button-group button__group">
        <button class="button__item" @click="goToPath">
          Contacts
          <svg-icon name="arrow-rounded" class="button__icon" />
        </button>
        <button class="button__item" @click="goToPath">
          Delivery
          <svg-icon name="arrow-rounded" class="button__icon" />
        </button>
        <button class="button__item" @click="goToPath">
          Reviews
          <svg-icon name="arrow-rounded" class="button__icon" />
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import AppButton from '~/components/shared/AppButton.vue';

export default {
  name: 'AppInfoBanner',

  components: {
    AppButton
  },

  props: {
    backgroundColor: {
      type: String,
      default: '#EBFAF0'
    },

    backgroundImage: {
      type: Object,
      default: () => ({})
    },

    title: {
      type: String,
      default: ''
    },

    text: {
      type: String,
      default: ''
    },

    buttons: {
      type: Array,
      default: () => []
    },

    hasButtons: {
      type: Boolean,
      default: false
    },

    page: {
      type: String,
      default: 'info'
    }
  },

  computed: {
    backgroundImageByDevice() {
      return this.$device.isDesktop ? this.backgroundImage.desktop : this.backgroundImage.mobile;
    },

    styles() {
      return {
        backgroundColor: this.backgroundColor,
        backgroundImage: `url(${this.backgroundImageByDevice})`,
        backgroundRepeat: 'no-repeat'
      };
    }
  },

  methods: {
    goToPath(path) {
      //
    }
  }
};
</script>

<style lang="scss" scoped>
.banner {
  padding-bottom: 0;

  @include gt-sm {
    background-size: contain;
  }
  &.delivery-banner {
    @include gt-sm {
      background-position: 100% 100%;
    }

    @include lt-md {
      background-position: 100% 100%;
    }
  }

  &.about-banner {
    @include gt-sm {
      background-position: 100% 0%;
    }

    @include lt-md {
      background-position: 100% -110%;
    }
  }

  &__container {
    display: flex;
    flex-direction: column;

    @include gt-sm {
      width: 100%;
      padding: 40px 0 46px 0;
      gap: 66px;
    }

    @include lt-md {
      padding: 52px 16px 32px 16px;
      gap: 43px;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;

    @include gt-sm {
      gap: 20px;
    }

    @include lt-md {
      gap: 4px;
    }
  }

  &__title {
    margin: 0;

    font-family: $Literata;
    font-style: normal;
    font-weight: 700;
    color: $color-dark-grey;

    @include gt-sm {
      font-size: 48px;
      line-height: 56px;
    }

    @include lt-md {
      font-size: 20px;
      line-height: 24px;
      letter-spacing: -0.01em;
    }
  }

  &__text {
    margin: 0;

    font-family: $golos-regular;
    font-style: normal;
    font-weight: 400;
    color: $color-dark-grey;

    @include gt-sm {
      max-width: 403px;
      font-size: 16px;
      line-height: 24px;
    }

    @include lt-md {
      max-width: 60%;
      font-size: 11px;
      line-height: 16px;
      letter-spacing: -0.01em;
    }
  }

  &__button {
    max-width: 250px;

    @include lt-md {
      display: none;
    }
  }

  .button {
    &__group {
      @include gt-sm {
        display: none;
      }

      display: flex;
      gap: 8px;
    }

    &__item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      user-select: none;
      box-sizing: border-box;
      padding: 0 12px;
      height: 32px;
      flex: 1;
      background: #ffffff;
      border-radius: 12px;

      font-family: $Literata;
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 24px;
      letter-spacing: -0.01em;
      color: $color-dark-grey;
    }

    &__icon {
      width: 16px;
      height: 16px;
    }
  }
}
</style>

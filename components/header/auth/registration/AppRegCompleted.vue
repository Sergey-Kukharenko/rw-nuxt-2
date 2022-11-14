<template>
  <div class="container">
    <div class="container__header">
      <div class="container__layout">
        <div class="container__title"><app-go-back-mobile />Registration</div>
      </div>
    </div>
    <div class="container__body">
      <div class="container__layout reg-completed">
        <figure class="reg-completed__figure">
          <img src="/images/status/success.png" class="reg-completed__img" alt="" />
        </figure>
        <div class="reg-completed__content">
          <div class="reg-completed__content-title">Registration completed successfully</div>
          <div class="reg-completed__content-text">
            We are glad to welcome you <br />
            on our website
          </div>
        </div>
        <app-button stretch="full" class="reg-completed__button" @click="goToPath('index')">Go back to the main page</app-button>
        <a href="#" class="reg-completed__link" @click="goToPath('cabinet')">Go to personal account</a>
      </div>
    </div>
  </div>
</template>
<script>
import AppButton from '~/components/shared/AppButton';
import AppGoBackMobile from '~/components/shared/AppGoBackMobile';

import authManager from '~/mixins/authManager';

export default {
  name: 'AppRegCompleted',

  components: {
    AppButton,
    AppGoBackMobile,
  },

  mixins: [authManager],

  methods: {
    goToPath(pathName) {
      if (this.$device.isMobileOrTablet) {
        this.$router.push({ name: pathName });

        return;
      }

      this.resetStep();

      this.$emit('close');
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  @include gt-sm {
    width: 392px;
    box-sizing: border-box;
  }

  &__layout {
    @include gt-sm {
      padding: 0 24px;
      overflow: auto;
    }
  }

  &__title {
    @include lt-md {
      display: flex;
      align-items: center;
      gap: 16px;
    }
  }

  &__header {
    @include gt-sm {
      display: none;
    }

    @include lt-md {
      font-family: $golos-bold;
      font-size: 24px;
      line-height: 28px;
      padding: 20px 0;
    }
  }

  &__body {
    .reg-completed {
      display: flex;
      flex-direction: column;
      gap: 24px;

      &__figure {
        display: flex;
        justify-content: center;

        @include lt-md {
          padding-top: 28px;
        }
      }

      &__img {
        @include gt-sm {
          width: 92px;
          height: 84px;
        }

        @include lt-md {
          width: 129px;
          height: 118px;
        }
      }

      &__content {
        display: flex;
        flex-direction: column;
        gap: 8px;

        &-title {
          font-family: $golos-bold;
          font-style: normal;
          font-weight: 600;
          text-align: center;
          color: #000000;

          @include gt-sm {
            font-size: 20px;
            line-height: 24px;
            letter-spacing: 0.03px;
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
          color: #000000;
          text-align: center;

          @include gt-sm {
            font-size: 16px;
            line-height: 24px;
          }

          @include lt-md {
            font-size: 14px;
            line-height: 20px;
            letter-spacing: -0.01em;
          }
        }
      }

      &__link {
        @include gt-sm {
          display: none;
        }

        @include lt-md {
          display: block;
          font-family: $golos-bold;
          font-style: normal;
          font-weight: 600;
          font-size: 16px;
          line-height: 20px;
          text-align: center;
          color: #26ad4f;
        }
      }
    }

    @include gt-sm {
      padding: 24px 0;
    }

    @include lt-md {
      margin: 0;
    }
  }
}
</style>

<template>
  <div class="container">
    <div class="container__body">
      <div class="container__layout notification">
        <figure class="notification__figure">
          <img src="~/static/images/email.png" class="notification__figure-img" alt="Notification" />
        </figure>
        <div class="notification__title">Thank you for creating account.</div>
        <div class="notification__text">
          Please check your email for the final <br />
          step of activation.
        </div>
        <app-button stretch="full" class="notification__button" @click="goToMain">Go back to the main page</app-button>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from '~/components/shared/AppButton';

import authManager from '~/mixins/authManager';

export default {
  name: 'AppRegNotification',

  components: {
    AppButton,
  },

  mixins: [authManager],

  mounted() {
    this.nextStep();
  },

  methods: {
    goToMain() {
      if (this.$device.isMobileOrTablet) {
        this.$router.push({ name: 'index' });

        return;
      }

      this.resetStep();

      this.$emit('close');
    },

    nextStep() {
      const t = setTimeout(() => {
        this.changeStep('regCompleted');

        clearTimeout(t);
      }, 3000);
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

  @include lt-md {
    height: calc(100vh - 74px);
  }

  &__layout {
    @include gt-sm {
      padding: 0 24px;
      overflow: auto;
    }
  }

  &__body {
    @include gt-sm {
      padding: 24px 0;
    }

    @include lt-md {
      margin: 0;
    }

    .notification {
      &__figure {
        width: 92px;
        height: 84px;
        margin: 0 auto;
        margin-bottom: 24px;
      }

      &__title {
        font-family: $golos-bold;
        font-style: normal;
        font-weight: 600;
        text-align: center;
        color: #000000;

        margin-bottom: 8px;

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

      &__text {
        max-width: 256px;

        margin: 0 auto;

        font-family: $golos-regular;
        font-style: normal;
        font-weight: 400;
        text-align: center;
        color: #262626;

        @include gt-sm {
          font-size: 16px;
          line-height: 24px;
          letter-spacing: -0.02em;
        }

        @include lt-md {
          font-size: 14px;
          line-height: 20px;
          letter-spacing: -0.01em;
        }
      }

      &__button {
        margin-top: 24px;
      }
    }
  }
}
</style>

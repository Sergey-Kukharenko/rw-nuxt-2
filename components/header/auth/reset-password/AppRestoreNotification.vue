<template>
  <div class="container">
    <div class="container__body">
      <div class="container__layout notification">
        <figure class="notification__figure">
          <img src="~/static/images/email.png" class="notification__figure-img" alt="Notification" />
        </figure>
        <div class="notification__title">Almost everything is ready.</div>
        <div class="notification__text">
          <div class="notification__text-item">
            The password reset link has been sent to
            <span class="notification__text-item--bold">{{ getReceiver }}</span>
          </div>
          <div class="notification__text-item">Check your email and come up with a new password</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import authManager from '~/mixins/authManager';

export default {
  name: 'AppRestoreNotification',

  mixins: [authManager],

  mounted() {
    this.nextStep();
  },

  methods: {
    nextStep() {
      const t = setTimeout(() => {
        this.changeStep('restorePassNewPassword');

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
        display: flex;
        flex-direction: column;
        gap: 20px;

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

        &-item--bold {
          font-family: $golos-bold;
          font-weight: bold;
        }
      }
    }
  }
}
</style>

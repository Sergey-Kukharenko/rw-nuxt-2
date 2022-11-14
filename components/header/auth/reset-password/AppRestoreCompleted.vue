<template>
  <div class="container">
    <div class="container__body">
      <div class="container__layout restore-completed">
        <figure class="restore-completed__figure">
          <img src="/images/status/success.png" class="restore-completed__img" alt="" />
        </figure>
        <div class="restore-completed__content">
          <div class="restore-completed__content-title">Password changed</div>
          <div class="restore-completed__content-text">
            You have successfully changed <br />
            your password
          </div>
        </div>
        <app-button stretch="full" class="restore-completed__button" @click="goToMain">Continue shopping</app-button>
      </div>
    </div>
  </div>
</template>
<script>
import AppButton from '~/components/shared/AppButton';

import authManager from '~/mixins/authManager';

export default {
  name: 'AppRestoreCompleted',

  components: {
    AppButton,
  },

  mixins: [authManager],

  methods: {
    goToMain() {
      if (this.$device.isMobileOrTablet) {
        this.$router.push({ name: 'index' });

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

  &__body {
    .restore-completed {
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

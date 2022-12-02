<template>
  <div class="container">
    <div class="container__header">
      <div class="container__layout">
        <div class="container__title"><app-go-back-mobile />{{ authTitleText }}</div>
      </div>
    </div>
    <div class="container__body">
      <div class="container__layout">
        <div class="receiver-info">
          Sent to {{ receiver }}
          <svg-icon
            class="receiver-info__icon"
            name="pencil-green"
            @click="goToStep($options.AUTH_REG_STEPS.auth.name)"
          />
        </div>
        <div class="receiver-info__code">
          <app-code-input
            :error="errorMsg"
            :disabled="isRetried"
            @set-code="setCode"
            @reset-code-input="resetCodeInput"
          />
        </div>
        <div class="form-info">
          <div v-if="!errorMsg" class="form-info__retry" :class="{ active: !timerDuration }" @click="reinitTimer">
            <template v-if="$device.isMobileOrTablet">{{ retryTextMobile }}</template>
            <template v-else>{{ retryText }}</template>
          </div>
          <button v-if="!timerDuration" type="button" class="form-info__change-type" @click="changeAuthType">
            {{ changeAuthTypeText }}
          </button>
          <button
            v-else
            type="button"
            class="form-info__not-coming"
            @click="goToStep($options.AUTH_REG_STEPS.codeNotReceived.name)"
          >
            The code doesn't come?
          </button>
        </div>
        <div class="bottom-text-mobile">
          <button
            v-if="!errorMsg"
            type="button"
            class="bottom-text-mobile__not-coming"
            @click="goToStep($options.AUTH_REG_STEPS.codeNotReceived.name)"
          >
            The code doesn't come?
          </button>
          <button v-else type="button" class="bottom-text-mobile__retry" @click="reinitTimer">{{ retryText }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppCodeInput from '~/components/shared/AppCodeInput';
import AppGoBackMobile from '~/components/shared/AppGoBackMobile';

import authManager from '~/mixins/authManager';

import {
  AUTH_CODE_TIMER,
  AUTH_CORRECT_CODE,
  AUTH_REG_ERROR_MESSAGES,
  AUTH_REG_STEPS,
  AUTH_TYPES,
} from '~/constants/index';

export default {
  name: 'AppCode',

  components: {
    AppCodeInput,
    AppGoBackMobile,
  },

  mixins: [authManager],

  data() {
    return {
      timerDuration: AUTH_CODE_TIMER.duration,
      code: '',
      errorMsg: '',
      isRetried: false,
    };
  },

  AUTH_REG_STEPS,

  computed: {
    authTitleText() {
      return 'Enter the ' + (this.isPhoneFormType ? 'SMS code' : 'code');
    },

    changeAuthTypeText() {
      return `Login using ${this.anotherType}`;
    },

    timer() {
      const minutes = Math.floor(this.timerDuration / (AUTH_CODE_TIMER.step * 60));
      const isDurationMoreMinute = !!minutes;
      const seconds = isDurationMoreMinute
        ? Math.floor(this.timerDuration / AUTH_CODE_TIMER.step / minutes) - 60
        : Math.floor(this.timerDuration / AUTH_CODE_TIMER.step);
      const isTwoDigitsInSeconds = seconds >= 10;

      return minutes + ':' + (isTwoDigitsInSeconds ? seconds : '0' + seconds);
    },

    retryText() {
      return this.timerDuration
        ? 'Resend after ' + this.timer
        : this.$device.isMobileOrTablet
        ? 'Send the code again?'
        : 'Send ' + AUTH_TYPES[this.currCodeType].codeName + ' again';
    },

    retryTextMobile() {
      return this.timerDuration ? 'Resend after ' + this.timer : 'Resend';
    },
  },

  mounted() {
    this.initTimer();
  },

  methods: {
    onSubmit() {
      this.code = '';
    },

    goToStep(status) {
      this.changeStep({ status, type: this.codeType });
    },

    changeAuthType() {
      this.changeStep({ status: AUTH_REG_STEPS.auth.name, type: this.anotherType });
    },

    initTimer() {
      const tick = () => {
        this.timerDuration -= AUTH_CODE_TIMER.step;

        if (!this.timerDuration) {
          clearTimeout(timerId);
          this.isRetried = false;

          return;
        }

        timerId = setTimeout(tick, AUTH_CODE_TIMER.step);
      };

      let timerId = setTimeout(tick, AUTH_CODE_TIMER.step);
    },

    reinitTimer() {
      this.reinitTimer = true;
      this.timerDuration = AUTH_CODE_TIMER.duration;

      this.initTimer();
    },

    setCode(code) {
      // const payload = JSON.stringify({
      //   [this.currCodeType]: this.input.value,
      //   code
      // });

      this.$store.dispatch('auth/login');

      if (code === AUTH_CORRECT_CODE) {
        this.code = code;
        this.changeStep({ status: AUTH_REG_STEPS.reg.name });
        // this.$emit('close')
      } else {
        this.errorMsg = AUTH_REG_ERROR_MESSAGES.code;
      }
    },

    resetCodeInput() {
      this.code = '';
      this.errorMsg = '';
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
    }

    .bottom-text-mobile {
      @include gt-sm {
        display: none;
      }

      @include lt-md {
        position: absolute;
        bottom: 12px;
        user-select: none;
        font-family: $golos-regular;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        letter-spacing: -0.02em;

        &__not-coming {
          color: #db1838;
        }

        &__retry {
          color: $color-green;
        }
      }
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
    font-family: $golos-bold;
    font-size: 24px;
    line-height: 28px;

    @include gt-sm {
      padding: 24px 0;
      border-bottom: 1px solid #dde0e6;
    }

    @include lt-md {
      padding: 20px 0;
    }
  }

  &__body {
    @include gt-sm {
      padding: 24px 0;
    }

    @include lt-md {
      margin: 0;
    }

    .receiver-info {
      font-family: $golos-regular;
      font-style: normal;
      font-weight: 400;
      letter-spacing: -0.01em;
      color: #7c7c7c;

      padding-bottom: 16px;

      @include gt-sm {
        display: flex;
        gap: 8px;
        font-size: 14px;
        line-height: 20px;
      }

      @include lt-md {
        text-align: center;
        font-size: 14px;
        line-height: 20px;
      }

      &__code {
        @include lt-md {
          display: flex;
          justify-content: center;
        }
      }

      &__icon {
        @include lt-md {
          display: none;
        }

        @include gt-sm {
          width: 20px;
          height: 20px;
          cursor: pointer;
        }
      }
    }

    .form-info {
      @include gt-sm {
        margin-top: 16px;
      }

      @include lt-md {
        margin-top: 8px;
      }

      &__retry {
        pointer-events: none;
        user-select: none;
        font-family: $golos-regular;
        font-style: normal;
        font-weight: 400;
        color: #7c7c7c;

        @include gt-sm {
          font-size: 14px;
          line-height: 20px;
          letter-spacing: -0.01em;
        }

        @include lt-md {
          margin: 0 auto;
          font-size: 12px;
          line-height: 26px;
          text-align: center;
        }

        &.active {
          color: $color-dark-green;
          pointer-events: all;

          @include gt-sm {
            cursor: pointer;
          }
        }
      }

      &__change-type {
        @include gt-sm {
          display: block;
          margin: 24px auto 0 auto;
          font-family: $golos-bold;
          font-style: normal;
          font-weight: 600;
          font-size: 16px;
          line-height: 20px;
          color: $color-dark-green;
        }

        @include lt-md {
          display: none;
        }
      }

      &__not-coming {
        @include gt-sm {
          display: block;
          font-family: $golos-regular;
          font-style: normal;
          font-weight: 400;
          color: #db1838;
          margin-top: 24px;
          font-size: 14px;
          line-height: 20px;
          letter-spacing: -0.01em;
        }

        @include lt-md {
          display: none;
        }
      }
    }
  }
}
</style>

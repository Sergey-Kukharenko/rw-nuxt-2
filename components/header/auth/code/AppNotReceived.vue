<template>
  <div class="container">
    <div class="container__header">
      <div class="container__layout">
        <div class="container__title"><app-go-back-mobile />The code didn't come?</div>
      </div>
    </div>

    <div class="container__body">
      <div class="container__layout">
        <form class="form" @submit.prevent="handleValidate">
          <div class="form__notice">Check that the phone is entered correctly</div>
          <app-number-input v-if="isPhoneFormType" :error="input.errorMsg" @set-number="setNumber" />
          <template v-if="isEmailFormType">
            <app-input v-model="input.value" size="x-large" class="form__input" placeholder="Enter your E-mail" />
            <div v-show="input.errorMsg" class="form__error">
              {{ input.errorMsg }}
            </div>
          </template>
          <app-button stretch="full" class="form__button">{{ authTypeButtonText }}</app-button>
        </form>
        <div class="form-info">
          <div class="form-info__separator">or</div>
          <button type="button" class="form-info__change-type" @click="changeAuthType">{{ authTypeText }}</button>
          <div class="form-info__term">
            <app-personal-data-terms />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from '~/components/shared/AppButton';
import AppPersonalDataTerms from '~/components/header/auth/AppPersonalDataTerms';
import AppGoBackMobile from '~/components/shared/AppGoBackMobile';

import authManager from '~/mixins/authManager';

import { AUTH_TYPES, AUTH_REG_STEPS } from '~/constants/index';

export default {
  name: 'AppNotReceived',

  components: {
    AppButton,
    AppPersonalDataTerms,
    AppGoBackMobile,
    AppNumberInput: () => import('~/components/shared/AppNumberInput'),
    AppInput: () => import('~/components/shared/AppInput'),
  },

  mixins: [authManager],

  props: {
    user: {
      type: Object,
      default: () => ({}),
    },
  },

  data() {
    return {
      input: {
        value: '',
        errorMsg: '',
        isValid: false,
      },
    };
  },

  computed: {
    authTypeText() {
      return `Log in using ${this.anotherType}`;
    },

    authTypeButtonText() {
      return (
        'Get ' + (this.isPhoneFormType ? 'an ' + AUTH_TYPES.phone.extraCodeName : 'the ' + AUTH_TYPES.email.codeName)
      );
    },

    isInvalidForm() {
      return !!this.input.errorMsg;
    },
  },

  methods: {
    setNumber({ value, isValid }) {
      this.input = { ...this.input, value, isValid };
    },

    handleValidate() {
      const value = this.input.value;

      this.input.errorMsg =
        (this.isPhoneFormType && this.hasPhoneError(this.input.isValid)) ||
        (this.isEmailFormType && this.hasEmailError(value));

      if (this.isInvalidForm) {
        return;
      }

      this.onSubmit(value);
    },

    onSubmit(value) {
      this.changeStep({ status: AUTH_REG_STEPS.code.name, type: this.currCodeType });
      this.setReceiver(value);

      this.resetInput();
    },

    changeAuthType() {
      this.resetInput();
      this.setCodeType(this.anotherType);
    },

    resetInput() {
      this.input.value = '';
      this.input.errorMsg = '';
      this.input.isValid = false;
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

    .form {
      &__notice {
        font-family: $golos-regular;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: -0.01em;
        color: $color-dark-grey;

        @include gt-sm {
          margin-bottom: 16px;
        }

        @include lt-md {
          text-align: center;
          margin-bottom: 12px;
        }
      }

      &__button {
        margin-top: 16px;
      }
    }

    .form-info {
      margin-top: 16px;

      &__separator {
        @include gt-sm {
          display: none;
        }

        @include lt-md {
          margin-bottom: 16px;

          font-family: $golos-regular;
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 20px;
          text-align: center;
          letter-spacing: -0.01em;
          color: $color-dark-grey;
        }
      }

      &__change-type {
        display: block;
        font-family: $golos-bold;
        font-style: normal;
        font-weight: 600;
        margin: 0 auto;
        font-size: 16px;
        line-height: 20px;

        @include gt-sm {
          color: $color-dark-green;
          margin-bottom: 16px;
        }

        @include lt-md {
          color: $color-green;
        }
      }

      &__term {
        @include lt-md {
          position: absolute;
          bottom: 24px;
          right: 50%;
          transform: translate(50%, -50%);
          width: 288px;
          max-width: 288px;
        }
      }
    }
  }
}
</style>

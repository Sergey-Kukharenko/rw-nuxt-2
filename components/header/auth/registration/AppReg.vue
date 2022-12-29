<template>
  <div class="container">
    <div class="container__header">
      <div class="container__layout">
        <div class="container__title"><app-go-back-mobile />Registration</div>
      </div>
    </div>
    <div class="container__body">
      <div class="container__layout">
        <form class="form" @submit.prevent="handleValidate">
          <div class="form__fields">
            <app-input v-model="form.name.value" size="x-large" class="form__input" placeholder="Enter your name" />
            <div v-show="form.name.errorMsg" class="form__error">
              {{ form.name.errorMsg }}
            </div>

            <app-number-input v-if="isEmailFormType" :error="form.phone.errorMsg" @set-number="setNumber" />
            <app-input
              v-if="isPhoneFormType"
              v-model="form.phone.value"
              :mask="phoneMask"
              size="x-large"
              class="form__input"
              placeholder="Enter your phone"
              disabled
            >
              <template #right>
                <svg-icon name="lock" class="form__input-icon" />
              </template>
            </app-input>

            <app-input
              v-model="form.email.value"
              size="x-large"
              class="form__input"
              placeholder="Enter your E-mail"
              :disabled="isEmailFormType"
            >
              <template v-if="isEmailFormType" #right>
                <svg-icon name="lock" class="form__input-icon" />
              </template>
            </app-input>
            <div v-show="form.email.errorMsg" class="form__error">
              {{ form.email.errorMsg }}
            </div>
          </div>

          <div class="form__tabs">
            <div class="form__tabs-title">Specify your gender</div>
            <div class="form__tabs-row">
              <div
                v-for="gender in $options.GENDERS_DATA"
                :key="gender.name"
                class="form__tab"
                :class="{ active: isActiveGender(gender.name) }"
                @click="setGender(gender.name)"
              >
                <img :src="gender.img" class="form__tab-icon" :alt="gender.img" /> {{ gender.name }}
              </div>
            </div>
          </div>
          <div class="form__checkbox">
            <app-checkbox
              class="form__checkbox-item"
              :value="form.checkbox"
              name="checkbox_1"
              @change="handleCheckbox($event, 'checkbox_1')"
            >
              <span> I agree with the processing of <a href="#" class="form__checkbox-link"> personal data</a> </span>
            </app-checkbox>
            <app-checkbox
              class="form__checkbox-item"
              :value="form.checkbox"
              name="checkbox_2"
              @change="handleCheckbox($event, 'checkbox_2')"
            >
              <span> I agree to receive promotional messages </span>
            </app-checkbox>
          </div>
          <app-button stretch="full" class="form__button" :disabled="isSubmitDisabled">Register</app-button>
        </form>
        <div class="terms">
          <app-personal-data-terms />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from '~/components/shared/AppButton';
import AppCheckbox from '~/components/shared/AppCheckbox';
import AppPersonalDataTerms from '~/components/header/auth/AppPersonalDataTerms';
import AppGoBackMobile from '~/components/shared/AppGoBackMobile';

import authManager from '~/mixins/authManager';

import GENDERS_DATA from '~/data/genders';
import { AUTH_REG_STEPS } from '~/constants';

export default {
  name: 'AppReg',

  components: {
    AppButton,
    AppCheckbox,
    AppPersonalDataTerms,
    AppGoBackMobile,
    AppNumberInput: () => import('~/components/shared/AppNumberInput'),
    AppInput: () => import('~/components/shared/AppInput')
  },

  mixins: [authManager],

  data() {
    return {
      form: {
        name: {
          value: '',
          errorMsg: ''
        },

        phone: {
          value: '',
          errorMsg: '',
          isValid: false
        },

        email: {
          value: '',
          errorMsg: ''
        },

        gender: '',

        checkbox: []
      }
    };
  },

  GENDERS_DATA,

  computed: {
    isSubmitDisabled() {
      return !this.form.gender || this.form.checkbox.length < 2;
    },

    isInvalidForm() {
      return Object.keys(this.form).some((key) => this.form[key].errorMsg);
    }
  },

  mounted() {
    this.initReceiverData();
  },

  methods: {
    setNumber({ value, isValid }) {
      this.form.phone = { ...this.form.phone, value, isValid };
    },

    setGender(name) {
      this.form.gender = name;
    },

    isActiveGender(name) {
      return this.form.gender === name;
    },

    handleCheckbox(value) {
      if (!value) {
        this.form.checkbox.splice(this.form.checkbox.indexOf(value), 1);
      } else {
        this.form.checkbox.push(value);
      }
    },

    handleValidate() {
      this.form.name.errorMsg = this.isEmptyField(this.form.name.value);
      this.form.email.errorMsg = this.hasEmailError(this.form.email.value);
      this.form.phone.errorMsg = this.isEmailFormType ? this.hasPhoneError(this.form.phone.isValid) : '';

      if (this.isInvalidForm) {
        return;
      }

      this.onSubmit();
    },

    onSubmit() {
      this.changeStep({ status: AUTH_REG_STEPS.regCompleted.name });
      this.resetInputErrors();
    },

    initReceiverData() {
      if (this.isPhoneFormType) {
        this.form.phone.value = this.receiver;
      } else if (this.isEmailFormType) {
        this.form.email.value = this.receiver;
      }
    },

    resetInputErrors() {
      Object.keys(this.form).forEach((key) => {
        if (this.form[key]?.errorMsg) this.form[key].errorMsg = '';
      });
      this.form.phone.isValid = this.hasFormError = false;
    }
  }
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
      @include gt-sm {
        padding-bottom: 24px;
      }

      &__input-icon {
        width: 24px;
        height: 24px;
      }

      &__fields {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding-bottom: 24px;
      }

      &__tabs {
        @include gt-sm {
          padding-bottom: 50px;
        }

        @include lt-md {
          padding-bottom: 25.67px;
        }

        &-row {
          display: flex;
          gap: 8px;
        }

        &-title {
          font-family: $golos-medium;
          font-style: normal;
          font-weight: 600;
          color: $color-dark-grey;
          font-size: 16px;
          line-height: 20px;

          @include gt-sm {
            margin-bottom: 16px;
          }

          @include lt-md {
            margin-bottom: 12px;
          }
        }
      }

      &__tab {
        display: flex;
        align-items: center;
        gap: 8px;
        flex: 1;

        background: #f7f7f7;
        border-radius: 12px;
        cursor: pointer;
        user-select: none;

        font-family: $golos-regular;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
        font-size: 14px;
        letter-spacing: -0.01em;
        color: $color-dark-grey;

        @include gt-sm {
          padding-left: 37px;
          height: 48px;
        }

        @include lt-md {
          justify-content: center;
          height: 52px;
        }

        &.active {
          background: $color-green;
          color: #ffffff;
        }

        &-icon {
          width: 24px;
          height: 24px;
        }
      }

      &__checkbox {
        display: flex;
        flex-direction: column;

        @include gt-sm {
          gap: 12px;
          padding-bottom: 24px;
        }

        @include lt-md {
          gap: 7.33px;
          padding-bottom: 25.67px;
        }

        &-item {
          font-family: $golos-regular;
          font-style: normal;
          font-weight: 400;
          color: #7c7c7c;
          width: 100%;

          @include gt-sm {
            font-size: 14px;
            line-height: 20px;
          }

          @include lt-md {
            font-size: 11px;
            line-height: 16px;
            letter-spacing: -0.01em;
          }
        }

        &-link {
          color: $color-green;

          @include lt-md {
            display: inline;
          }
        }
      }
    }

    .terms {
      @include lt-md {
        padding-top: 16px;
      }
    }
  }
}
</style>

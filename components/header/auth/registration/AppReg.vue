<template>
  <div class="container">
    <div class="container__header">
      <div class="container__layout">
        <div class="container__title"><app-go-back-mobile />Create an account</div>
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

            <app-input
              v-model="form.surname.value"
              size="x-large"
              class="form__input"
              placeholder="Enter your surname"
            />
            <div v-show="form.surname.errorMsg" class="form__error">
              {{ form.surname.errorMsg }}
            </div>

            <app-input v-model="form.email.value" size="x-large" class="form__input" placeholder="Enter your E-mail" />
            <div v-show="form.email.errorMsg" class="form__error">
              {{ form.email.errorMsg }}
            </div>

            <app-input
              v-model="form.password.value"
              :type="getPasswordInputType('password')"
              size="x-large"
              class="form__input"
              placeholder="Enter the password"
            >
              <template #right>
                <svg-icon
                  v-show="form.password.value"
                  :name="getPasswordInputIcon(form.password.isVisible)"
                  class="form__input-icon"
                  @click="changePasswordVisibility('password')"
                />
              </template>
            </app-input>
            <div v-show="form.password.errorMsg" class="form__error">
              {{ form.password.errorMsg.text }}
              <ul class="form__error-list error-list">
                <li v-for="item in form.password.errorMsg.items" :key="item" class="error-list__item">{{ item }}</li>
              </ul>
            </div>

            <app-input
              v-model="form.rePassword.value"
              :type="getPasswordInputType('rePassword')"
              size="x-large"
              class="form__input"
              placeholder="Repeat the password"
            >
              <template #right>
                <svg-icon
                  v-show="form.rePassword.value"
                  :name="getPasswordInputIcon(form.rePassword.isVisible)"
                  class="form__input-icon"
                  @click="changePasswordVisibility('rePassword')"
                />
              </template>
            </app-input>
            <div v-show="isPasswordsMismatch" class="form__error">Passwords do not match</div>
          </div>
          <app-button stretch="full" class="form__button">Sign up</app-button>
        </form>
        <div class="terms">
          <div href="#" class="terms__signin">
            Need an account? <a href="#" class="terms__signin-link" @click.prevent="goToSignIn">Sign up now</a>
          </div>
          <app-personal-data-terms />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppInput from '~/components/shared/AppInput';
import AppButton from '~/components/shared/AppButton';
import AppPersonalDataTerms from '~/components/header/auth/AppPersonalDataTerms';
import AppGoBackMobile from '~/components/shared/AppGoBackMobile';

import authManager from '~/mixins/authManager';

export default {
  name: 'AppReg',

  components: {
    AppButton,
    AppInput,
    AppPersonalDataTerms,
    AppGoBackMobile,
  },

  mixins: [authManager],

  data() {
    return {
      form: {
        name: {
          value: '',
          errorMsg: '',
        },

        surname: {
          value: '',
          errorMsg: '',
        },

        email: {
          value: '',
          errorMsg: '',
        },

        password: {
          value: '',
          errorMsg: '',
        },

        rePassword: {
          value: '',
          errorMsg: '',
        },
      },
      
      isPasswordsMismatch: false,
    };
  },

  computed: {
    isInvalidForm() {
      return Object.keys(this.form).some((key) => this.form[key].errorMsg);
    },
  },

  methods: {
    goToSignIn() {
      this.changeStep('auth');
      this.resetForm();
    },

    getPasswordInputType(key) {
      return this.form[key].isVisible ? 'text' : 'password';
    },

    changePasswordVisibility(key) {
      this.form[key].isVisible = !this.form[key].isVisible;
    },

    matchPasswords() {
      this.isPasswordsMismatch = this.form.password.value !== this.form.rePassword.value;
    },

    handleValidate() {
      const name = this.isEmptyField(this.form.name.value);
      const surname = this.isEmptyField(this.form.surname.value);
      const email = this.hasEmailError(this.form.email.value);
      const password = this.hasPasswordError(this.form.password.value);
      const rePassword = this.hasPasswordError(this.form.rePassword.value);

      this.setFormErrorMsg(name, surname, email, password, rePassword);
      this.matchPasswords();

      if (!this.isInvalidForm && !this.isPasswordsMismatch) {
        this.onSubmit();
      }
    },

    onSubmit() {
      this.changeStep('regNotification');
      this.resetForm();
    },

    resetForm() {
      Object.keys(this.form).forEach((key) => {
        this.form[key].errorMsg = '';
        this.form[key].value = '';
      });
    },

    setFormErrorMsg(nameErr = '', surnameErr = '', emailErr = '', passErr = '', rePassErr = '') {
      this.form.name.errorMsg = nameErr;
      this.form.surname.errorMsg = surnameErr;
      this.form.email.errorMsg = emailErr;
      this.form.password.errorMsg = passErr;
      this.form.rePassword.errorMsg = rePassErr;
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
        user-select: none;
        width: 24px;
        height: 24px;

        @include gt-sm {
          cursor: pointer;
        }
      }

      &__fields {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding-bottom: 24px;
      }
    }

    .terms {
      @include lt-md {
        padding-top: 16px;
      }

      &__signin {
        font-family: $golos-regular;
        font-weight: 400;
        font-style: normal;
        color: $color-dark-grey;
        text-align: center;
        font-size: 16px;
        line-height: 20px;

        padding-bottom: 20px;

        &-link {
          @include gt-sm {
            font-family: $golos-bold;
            font-weight: 600;
            color: $color-dark-green;
          }

          @include lt-md {
            color: $color-green;
          }
        }
      }
    }
  }
}
</style>

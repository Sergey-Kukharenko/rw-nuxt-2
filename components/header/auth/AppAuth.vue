<template>
  <div class="container">
    <div class="container__header">
      <div class="container__layout">
        <div class="container__title"><app-go-back-mobile />Log in to your account</div>
      </div>
    </div>

    <div class="container__body">
      <div class="container__layout">
        <form class="form" @submit.prevent="handleValidate">
          <app-input
            v-model.trim="form.email.value"
            size="x-large"
            class="form__input"
            placeholder="Enter your Email"
          />
          <div v-show="form.email.errorMsg" class="form__error">
            {{ form.email.errorMsg }}
          </div>
          <app-input
            v-model="form.password.value"
            :type="passwordInputType"
            size="x-large"
            class="form__input"
            placeholder="Enter the password"
          >
            <template #right>
              <svg-icon
                v-show="form.password.value"
                :name="getPasswordInputIcon(form.password.isVisible)"
                class="form__input-icon"
                @click="changePasswordVisibility"
              />
            </template>
          </app-input>
          <div v-show="form.password.errorMsg" class="form__error">
            <template v-if="isPasswordErrorDetail"
              >{{ form.password.errorMsg.text }}
              <ul class="form__error-list error-list">
                <li v-for="item in form.password.errorMsg.items" :key="item" class="error-list__item">{{ item }}</li>
              </ul>
            </template>
            <template v-else>
              {{ form.password.errorMsg }}
            </template>
          </div>
          <a href="#" class="form__link" @click.prevent="forgotPassword">Forgot your password?</a>
          <app-button stretch="full" class="form__button">Login</app-button>
        </form>
        <div class="info">
          <div href="#" class="info__signup">
            Need an account? <a href="#" class="info__signup-link" @click.prevent="goToSignUp">Sign up now</a>
          </div>
          <div class="info__term">
            <app-personal-data-terms />
          </div>
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
  name: 'AppAuth',

  components: {
    AppButton,
    AppInput,
    AppPersonalDataTerms,
    AppGoBackMobile,
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
      form: {
        email: {
          value: '',
          errorMsg: '',
        },

        password: {
          value: '',
          errorMsg: '',
          isVisible: false,
        },
      },
    };
  },

  computed: {
    hasFormError() {
      return this.form.email.errorMsg || this.form.password.errorMsg;
    },

    passwordInputType() {
      return this.form.password.isVisible ? 'text' : 'password';
    },

    isPasswordErrorDetail() {
      return (
        typeof this.form.password.errorMsg === 'object' &&
        !Array.isArray(this.form.password.errorMsg) &&
        this.form.password.errorMsg !== null
      );
    },
  },

  methods: {
    handleValidate() {
      const formData = {
        email: this.form.email.value,
        password: this.form.password.value,
      };

      this.setFormErrorMsg(this.hasEmailError(formData.email), this.hasPasswordError(formData.password));

      if (this.hasFormError) {
        return;
      }

      const { emailError, passwordError } = this.checkCredentials(formData.email, formData.password, 'auth');

      this.setFormErrorMsg(emailError, passwordError);

      if (!this.hasFormError) {
        this.onSubmit(formData);
      }
    },

    async onSubmit(payload) {
      await this.$store.dispatch('auth/signIn', payload)

      this.resetForm();

      if (this.$device.isMobileOrTablet) {
        this.$router.push({ name: 'index' });
      } else {
        this.$emit('close');
      }
    },

    changePasswordVisibility() {
      this.form.password.isVisible = !this.form.password.isVisible;
    },

    goToSignUp() {
      this.changeStep('reg');
      this.resetForm();
    },

    resetForm() {
      for (const key in this.form) {
        this.form[key].value = '';
        this.form[key].errorMsg = '';
      }
    },

    forgotPassword() {
      this.changeStep('restorePassword');
      this.resetForm();
    },

    setFormErrorMsg(emailErr = '', passErr = '') {
      this.form.email.errorMsg = emailErr;
      this.form.password.errorMsg = passErr;
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
      display: flex;
      flex-direction: column;
      gap: 8px;

      &__input-icon {
        user-select: none;
        width: 24px;
        height: 24px;

        @include gt-sm {
          cursor: pointer;
        }
      }

      &__link {
        display: block;
        padding: 8px 0;
        font-family: $golos-regular;
        font-style: normal;
        font-weight: 400;
        color: $color-green;
        font-size: 16px;
        line-height: 24px;

        @include gt-sm {
          max-width: 60%;
        }
      }
    }

    .info {
      margin-top: 16px;

      &__signup {
        font-family: $golos-regular;
        font-weight: 400;
        font-style: normal;
        color: $color-dark-grey;
        text-align: center;
        font-size: 16px;
        line-height: 20px;

        &-link {
          @include gt-sm {
            font-family: $golos-bold;
            font-weight: 600;
            color: $color-dark-green;
            margin-bottom: 16px;
          }

          @include lt-md {
            color: $color-green;
          }
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

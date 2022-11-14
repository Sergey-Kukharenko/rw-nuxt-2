<template>
  <div class="container">
    <div class="container__header">
      <div class="container__layout">
        <div class="container__title"><app-go-back-mobile />Reset password</div>
      </div>
    </div>
    <div class="container__body">
      <div class="container__layout">
        <div v-if="isAlertVisible" class="alert__container">
          <app-alert theme="warning">
            <div v-if="hasFormError">
              The new password must be no shorter than 8 characters, include large and small Latin letters and at least
              one digit
            </div>
            <div v-if="isPasswordsMismatch">Passwords do not match</div>
          </app-alert>
        </div>
        <form class="form" @submit.prevent="handleValidate">
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
          <app-button stretch="full" class="form__button">Save</app-button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import AppInput from '~/components/shared/AppInput';
import AppButton from '~/components/shared/AppButton';
import AppGoBackMobile from '~/components/shared/AppGoBackMobile';
import AppAlert from '~/components/shared/AppAlert';

import authManager from '~/mixins/authManager';

export default {
  name: 'AppRestoreNewPassword',

  components: {
    AppButton,
    AppInput,
    AppGoBackMobile,
    AppAlert,
  },

  mixins: [authManager],

  data() {
    return {
      form: {
        password: {
          value: '',
          errorMsg: '',
          isVisible: false,
        },

        rePassword: {
          value: '',
          errorMsg: '',
          isVisible: false,
        },
      },

      hasFormError: false,
      isPasswordsMismatch: false,
    };
  },

  computed: {
    isAlertVisible() {
      return this.hasFormError || this.isPasswordsMismatch;
    },
  },

  methods: {
    getPasswordInputType(key) {
      return this.form[key].isVisible ? 'text' : 'password';
    },

    matchPasswords() {
      this.isPasswordsMismatch = this.form.password.value !== this.form.rePassword.value;
    },

    handleValidate() {
      this.setFormErrorMsg(this.hasPasswordError(this.form.password.value));
      this.matchPasswords();

      if (!this.isAlertVisible) {
        this.onSubmit();
      }
    },

    onSubmit() {
      this.changeStep('restorePassCompleted');

      this.resetForm();
    },

    changePasswordVisibility(key) {
      this.form[key].isVisible = !this.form[key].isVisible;
    },

    resetForm() {
      for (const key in this.form) {
        this.form[key].value = '';
        this.form[key].errorMsg = '';
        this.form[key].isVisible = false;
      }
    },

    setFormErrorMsg(passErr = '') {
      this.hasFormError = false

      if (passErr) this.hasFormError = true;

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

    .alert__container {
      margin-bottom: 24px;
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

      &__button {
        margin-top: 8px;
      }
    }
  }
}
</style>

<template>
  <div class="container">
    <div class="container__header">
      <div class="container__layout">
        <div class="container__title"><app-go-back-mobile />Reset password</div>
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
          <app-button stretch="full" class="form__button">Get the code</app-button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import AppInput from '~/components/shared/AppInput';
import AppButton from '~/components/shared/AppButton';
import AppGoBackMobile from '~/components/shared/AppGoBackMobile';

import authManager from '~/mixins/authManager';

export default {
  name: 'AppRestore',

  components: {
    AppButton,
    AppInput,
    AppGoBackMobile,
  },

  mixins: [authManager],

  data() {
    return {
      form: {
        email: {
          value: '',
          errorMsg: '',
        },
      },
    };
  },

  computed: {
    hasFormError() {
      return this.form.email.errorMsg;
    },
  },

  methods: {
    handleValidate() {
      const email = this.form.email.value;

      this.setFormErrorMsg(this.hasEmailError(email));

      if (this.hasFormError) {
        return;
      }

      const { emailError } = this.checkCredentials(email);

      this.setFormErrorMsg(emailError);

      if (!this.hasFormError) {
        this.onSubmit(email);
      }
    },

    onSubmit(payload) {
      this.resetForm();

      this.setReceiver(payload);
      this.changeStep('restorePassNotification');
    },

    resetForm() {
      this.form.email = {
        value: '',
        errorMsg: '',
      };
    },

    setFormErrorMsg(emailErr = '') {
      this.form.email.errorMsg = emailErr;
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

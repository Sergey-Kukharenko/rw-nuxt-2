<script>
import { AUTH_REG_STEPS, AUTH_REG_ERROR_MESSAGES, USER_CREDENTIALS } from '~/constants/index';
import { isEmailValid, isPasswordValid } from '~/helpers/validators';

export default {
  name: 'AuthManager',

  computed: {
    getReceiver() {
      return this.$store.getters['auth/receiver'];
    },
  },

  methods: {
    getPasswordInputIcon(status) {
      return status ? 'eye-closed' : 'eye';
    },

    isEmptyField(field) {
      return !field?.length ? AUTH_REG_ERROR_MESSAGES.requiredField : '';
    },

    hasEmailError(email) {
      return !isEmailValid(email) ? AUTH_REG_ERROR_MESSAGES.email.invalid : '';
    },

    hasPasswordError(password) {
      return !isPasswordValid(password) ? AUTH_REG_ERROR_MESSAGES.password.invalid : '';
    },

    checkCredentials(email, password, type) {
      const emailError = this.checkEmailCredentials(email, type);
      const passwordError = this.checkPasswordCredentials(password, type);

      return { emailError, passwordError };
    },

    checkEmailCredentials(email, type) {
      if (email !== USER_CREDENTIALS.email && type === 'auth') {
        return AUTH_REG_ERROR_MESSAGES.email.notExist;
      } else if (email === USER_CREDENTIALS.email && type === 'reg') {
        return AUTH_REG_ERROR_MESSAGES.email.alreadyExist;
      }

      return '';
    },

    checkPasswordCredentials(password, type) {
      return password !== USER_CREDENTIALS.password && type === 'auth' ? AUTH_REG_ERROR_MESSAGES.password.notExist : '';
    },

    changeStep(step) {
      if (this.$device.isMobileOrTablet) this.$router.push({ name: AUTH_REG_STEPS[step].page });

      this.$store.commit('auth/setCurrStep', AUTH_REG_STEPS[step].component);
    },

    resetStep() {
      this.$store.commit('auth/setCurrStep', AUTH_REG_STEPS.auth.component);
    },

    setReceiver(payload) {
      this.$store.commit('auth/setReceiver', payload);
    },

    setCodeType(payload) {
      this.$store.commit('auth/setCodeType', payload);
    },
  },
};
</script>

<style lang="scss">
.form__error {
  font-family: $golos-regular;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #db1838;
  padding-left: 18px;

  position: relative;
  top: -4px;

  .error-list {
    margin: 0;
    padding-left: 18px;
  }
}
</style>

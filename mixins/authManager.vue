<script>
import { AUTH_REG_STEPS, AUTH_REG_TYPES, AUTH_TYPES, AUTH_REG_ERROR_MESSAGES } from '~/constants/index';
import { isEmailValid } from '~/helpers/validators';

export default {
  name: 'AuthManager',

  computed: {
    currCodeType() {
      return this.$store.getters['auth/codeType'];
    },

    receiver() {
      return this.$store.getters['auth/receiver'];
    },

    isPhoneFormType() {
      return this.currCodeType === AUTH_TYPES.phone.name;
    },

    isEmailFormType() {
      return this.currCodeType === AUTH_TYPES.email.name;
    },

    anotherType() {
      return AUTH_REG_TYPES.filter((t) => t !== this.currCodeType)[0];
    },

    phoneMask() {
      return this.$store.getters['auth/phoneMask'];
    },
  },

  methods: {
    isEmptyField(field) {
      return !field?.length ? AUTH_REG_ERROR_MESSAGES.requiredField : '';
    },

    hasPhoneError(status) {
      return !status ? AUTH_REG_ERROR_MESSAGES.phone.invalid : '';
    },

    hasEmailError(email) {
      return !isEmailValid(email) ? AUTH_REG_ERROR_MESSAGES.email.invalid : '';
    },

    changeStep({ status, type }) {
      if (type) this.setCodeType(type);

      if (this.$device.isMobileOrTablet) this.$router.push({ name: AUTH_REG_STEPS[status].page });

      this.$store.commit('auth/setCurrStep', AUTH_REG_STEPS[status].component);
    },

    resetStep() {
      this.$store.commit('auth/setCurrStep', AUTH_REG_STEPS.auth.component);
      this.$store.commit('auth/setCodeType', AUTH_REG_TYPES[0]);
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
  margin-top: 4px;

  .error-list {
    margin: 0;
    padding-left: 18px;
  }
}
</style>

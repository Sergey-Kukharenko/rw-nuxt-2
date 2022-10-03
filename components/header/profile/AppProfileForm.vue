<template>
  <div class="profile-form">
    <h1>Will be form ...</h1>
    <button class="profile-form__button" @click="logIn()">log in</button>
  </div>
</template>

<script>
export default {
  name: 'AppProfileForm',

  props: {
    user: {
      type: Object,
      default: () => ({})
    }
  },

  methods: {
    logIn() {
      this.$store.dispatch('user/login');
    }
  }
};
</script>

<style lang="scss" scoped>
.profile-form {
  padding: 18px 20px;
  box-sizing: border-box;

  @include gt-sm {
    width: 320px;
  }

  @include lt-md {
    width: 290px;
    padding: 18px 20px;
    box-sizing: border-box;
  }

  &__button {
    color: #fff;
    padding: 0.5em;
    background: #ccc;
    border-radius: 8px;
  }
}
</style>

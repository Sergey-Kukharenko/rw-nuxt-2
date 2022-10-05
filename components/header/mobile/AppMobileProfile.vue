<template>
  <div class="profile">
    <app-profile-button :user="user" />
  </div>
</template>

<script>
import AppProfileButton from '~/components/header/profile/AppProfileButton';
export default {
  name: 'AppMobileProfile',

  components: {AppProfileButton},

  computed: {
    user() {
      return this.$store.getters['user/state']
    }
  }
};
</script>

<style scoped>

</style>

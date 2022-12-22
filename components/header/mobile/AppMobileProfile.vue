<template>
  <div class="profile">
    <app-profile-button :user="user" @close="$emit('close')" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import AppProfileButton from '~/components/header/profile/AppProfileButton';
export default {
  name: 'AppMobileProfile',

  components: { AppProfileButton },

  computed: {
    ...mapGetters({ user: 'user/state' })
  }
};
</script>

<style scoped></style>

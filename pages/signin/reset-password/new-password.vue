<template>
  <div class="layout">
    <app-restore-new-password />
  </div>
</template>

<script>
import AppRestoreNewPassword from '~/components/header/auth/reset-password/AppRestoreNewPassword';

export default {
  name: 'NewPasswordPage',

  components: {
    AppRestoreNewPassword,
  },

  layout: 'mobile',
};
</script>

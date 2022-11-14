<template>
  <div class="layout">
    <app-restore />
  </div>
</template>

<script>
import AppRestore from '~/components/header/auth/reset-password/AppRestore';

export default {
  name: 'ResetPasswordPage',

  components: {
    AppRestore,
  },

  layout: 'mobile',
};
</script>

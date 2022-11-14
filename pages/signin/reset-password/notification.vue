<template>
  <div class="layout">
    <app-restore-notification />
  </div>
</template>

<script>
import AppRestoreNotification from '~/components/header/auth/reset-password/AppRestoreNotification'

export default {
  name: 'NotificationPage',

  components: {
    AppRestoreNotification,
  },

  layout: 'mobile',
};
</script>

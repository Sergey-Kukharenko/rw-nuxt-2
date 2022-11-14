<template>
  <div class="layout">
    <app-reg-notification />
  </div>
</template>

<script>
import AppRegNotification from '~/components/header/auth/registration/AppRegNotification';

export default {
  name: 'NotificationPage',

  components: {
    AppRegNotification,
  },

  layout: 'mobile',
};
</script>

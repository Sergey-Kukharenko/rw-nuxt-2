<template>
  <div class="layout">
    <app-restore-completed />
  </div>
</template>

<script>
import AppRestoreCompleted from '~/components/header/auth/reset-password/AppRestoreCompleted';

export default {
  name: 'CompletedPage',

  components: {
    AppRestoreCompleted,
  },

  layout: 'mobile',
};
</script>

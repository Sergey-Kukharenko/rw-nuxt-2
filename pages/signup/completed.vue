<template>
  <div class="layout">
    <app-reg-completed />
  </div>
</template>

<script>
import AppRegCompleted from '~/components/header/auth/registration/AppRegCompleted';

export default {
  name: 'CompletedPage',

  components: {
    AppRegCompleted,
  },

  layout: 'mobile',
};
</script>

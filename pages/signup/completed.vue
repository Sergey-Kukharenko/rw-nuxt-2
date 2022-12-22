<template>
  <div class="layout">
    <app-completed/>
  </div>
</template>

<script>
import AppCompleted from '~/components/header/auth/registration/AppCompleted';

export default {
  name: 'CompletedPage',

  components: {
    AppCompleted
  },

  layout: 'mobile'
};
</script>

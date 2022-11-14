<template>
  <div class="layout">
    <app-auth />
  </div>
</template>

<script>
import AppAuth from '~/components/header/auth/AppAuth';

export default {
  name: 'IndexPage',

  components: {
    AppAuth,
  },

  layout: 'mobile',
};
</script>

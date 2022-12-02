<template>
  <div class="layout">
    <app-not-received />
  </div>
</template>

<script>
import AppNotReceived from '~/components/header/auth/code/AppNotReceived';

export default {
  name: 'CodeNotReceived',

  components: {
    AppNotReceived,
  },

  layout: 'mobile',
};
</script>

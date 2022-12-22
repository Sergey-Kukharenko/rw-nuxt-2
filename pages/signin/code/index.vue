<template>
  <div class="layout">
    <app-code/>
  </div>
</template>

<script>
import AppCode from '~/components/header/auth/code/AppCode';

export default {
  name: 'CodePage',

  components: {
    AppCode
  },

  layout: 'mobile'
};
</script>

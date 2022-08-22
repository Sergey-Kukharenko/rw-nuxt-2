<template>
  <div>
    <Nuxt />
    <app-footer />
  </div>
</template>


<script>
import AppFooter from '~/components/footer/AppFooter';

export default {
  name: 'DefaultLayout',
  components: {
    AppFooter
  }
};
</script>

<style scoped>

</style>

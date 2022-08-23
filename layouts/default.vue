<template>
  <div>
    <app-header-mobile v-if="isDevice" />
    <template v-else>
      <app-header/>
      <app-nav-bar/>
    </template>
    <Nuxt />
    <app-footer />
  </div>
</template>


<script>
import AppHeader from '@/components/header/AppHeader';
import AppHeaderMobile from '~/components/header/AppHeaderMobile';
import AppFooter from '@/components/footer/AppFooter';
import AppNavBar from '~/components/header/AppNavBar';

export default {
  name: 'DefaultLayout',
  components: {
    AppNavBar,
    AppHeaderMobile,
    AppHeader,
    AppFooter
  },
  computed: {
    isDevice() {
      return !this.$device.isDesktop;
    }
  },
};
</script>

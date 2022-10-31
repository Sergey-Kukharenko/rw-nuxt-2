<template>
  <div>
    <template v-if="$device.isMobileOrTablet">
      <app-header-mobile/>
      <app-notification/>
    </template>

    <template v-else>
      <app-header/>
      <app-nav-bar/>
    </template>

<!--    <app-breadcrumbs/>-->
<!--    <Nuxt/>-->
<!--    <app-footer/>-->
  </div>
</template>

<script>
import AppHeader from '@/components/header/AppHeader';
import AppHeaderMobile from '~/components/header/mobile/AppHeaderMobile';
import AppNavBar from '@/components/header/AppNavBar';
// import AppBreadcrumbs from '~/components/shared/AppBreadcrumbs';
// import AppFooter from '@/components/footer/AppFooter';
import AppNotification from '~/components/header/AppNotification';

export default {
  name: 'DefaultLayout',
  components: {
    AppNotification,
    AppNavBar,
    AppHeaderMobile,
    AppHeader,
    // AppBreadcrumbs,
    // AppFooter,
  }
};
</script>

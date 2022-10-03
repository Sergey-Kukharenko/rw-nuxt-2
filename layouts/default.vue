<template>
  <div>
    <app-header-mobile v-if="$device.isMobileOrTablet"/>
    <template v-else>
      <app-header/>
      <app-nav-bar/>
    </template>
    <app-breadcrumbs/>
    <Nuxt/>
    <app-footer/>
  </div>
</template>


<script>
import AppHeader from '@/components/header/AppHeader';
import AppHeaderMobile from '@/components/header/AppHeaderMobile';
import AppNavBar from '@/components/header/AppNavBar';
import AppBreadcrumbs from '~/components/shared/AppBreadcrumbs';
import AppFooter from '@/components/footer/AppFooter';

export default {
  name: 'DefaultLayout',
  components: {
    AppNavBar,
    AppHeaderMobile,
    AppHeader,
    AppBreadcrumbs,
    AppFooter,
  }
};
</script>

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
    <Nuxt/>
    <app-footer-bottom/>
  </div>
</template>

<script>
import AppHeader from '@/components/header/AppHeader';
import AppHeaderMobile from '~/components/header/mobile/AppHeaderMobile';
import AppNavBar from '@/components/header/AppNavBar';
import AppNotification from '~/components/header/AppNotification';
import AppFooterBottom from '~/components/footer/AppFooterBottom';

export default {
  name: 'BasketLayout',
  components: {
    AppFooterBottom,
    AppNotification,
    AppNavBar,
    AppHeaderMobile,
    AppHeader,
  }
};
</script>

<template>
  <div class="wrapper">
    <template v-if="$device.isMobileOrTablet">
      <app-header-mobile />
    </template>

    <template v-else>
      <app-header class="header-group" />
      <app-nav-bar />
    </template>

    <div class="content">
      <Nuxt />
    </div>

    <div class="footer">
      <order-footer />
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/header/AppHeader';
import OrderFooter from '@/components/OrderFooter';
import AppHeaderMobile from '~/components/header/mobile/AppHeaderMobile';
import AppNavBar from '@/components/header/AppNavBar';

export default {
  name: 'OrderLayout',

  components: {
    AppHeader,
    OrderFooter,
    AppHeaderMobile,
    AppNavBar,
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;

  .content {
    flex: 1 0 auto;
  }

  .footer {
  flex: 0 0 auto;
}
}
</style>

<template>
  <div class="wrapper">
    <template v-if="$device.isMobileOrTablet">
      <app-header-mobile/>
    </template>

    <template v-else>
      <app-header class="header-group"/>
    </template>

    <div class="content">
      <Nuxt/>
    </div>

    <div class="footer">
      <order-footer/>
    </div>
  </div>
</template>

<script>
import OrderFooter from '@/components/OrderFooter';

export default {
  name: 'OrderLayout',

  components: {
    OrderFooter,
    AppHeader: () => import('@/components/header/AppHeader'),
    AppHeaderMobile: () => import('~/components/header/mobile/AppHeaderMobile'),
  }
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

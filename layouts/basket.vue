<template>
  <div>
    <app-header-mobile v-if="$device.isMobileOrTablet"/>
    <app-header v-else class="header-group"/>
    <Nuxt/>
    <footer>
      <app-footer-bottom class="layout"/>
    </footer>
  </div>
</template>

<script>
import AppHeader from '@/components/header/AppHeader';
import AppHeaderMobile from '~/components/header/mobile/AppHeaderMobile';
import AppFooterBottom from '~/components/footer/AppFooterBottom';

export default {
  name: 'BasketLayout',
  components: {
    AppFooterBottom,
    AppHeaderMobile,
    AppHeader,
  }
};
</script>

<style lang="scss" scoped>
.header-group {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.04);
}

footer {
  background: $bg-grey;
}
</style>

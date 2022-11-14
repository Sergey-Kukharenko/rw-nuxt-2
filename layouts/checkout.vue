<template>
  <div>
    <app-header-mobile v-if="$device.isMobileOrTablet"/>
    <app-header-checkout v-else/>
    <Nuxt/>
    <footer>
      <app-footer-bottom class="layout"/>
    </footer>
  </div>
</template>
<script>
import AppHeaderMobile from '~/components/header/mobile/AppHeaderMobile';
import AppHeaderCheckout from '~/components/header-checkout/AppHeaderCheckout';
import AppFooterBottom from '~/components/footer/AppFooterBottom';

export default {
  name: 'CheckoutLayout',
  components: {
    AppFooterBottom,
    AppHeaderMobile,
    AppHeaderCheckout
  }
};
</script>

<style lang="scss" scoped>
footer {
  background: $bg-grey;
}
</style>

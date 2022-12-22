<template>
  <div class="header-checkout">
    <div class="layout layout--horizontal-dt">
      <div class="header">
        <app-header-checkout-order />
        <app-logo />
        <app-call />
      </div>
    </div>
  </div>
</template>

<script>
import AppLogo from '~/components/header/AppLogo';
import AppCall from '~/components/header/AppCall';
import AppHeaderCheckoutOrder from '~/components/header-checkout/AppHeaderCheckoutOrder';

export default {
  name: 'AppHeaderCheckout',
  components: { AppHeaderCheckoutOrder, AppCall, AppLogo }
};
</script>

<style scoped lang="scss">
.header-checkout {
  border-bottom: 1px solid #eaeaea;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 0;
}
</style>

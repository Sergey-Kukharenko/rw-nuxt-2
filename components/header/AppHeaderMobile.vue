<template>
  <header>
    <app-drawer>
      <app-navigation />
      <app-menu />
      <app-nav-bar />
    </app-drawer>

    <app-logo />
    <app-search />
    <app-call />
    <app-cart />
  </header>

  <!--  <app-notification />-->
</template>

<script>
import AppDrawer from '@/components/shared/AppDrawer'
import AppNavigation from '@/components/header/AppNavigation'
import AppMenu from '@/components/header/AppMenu'
import AppNavBar from '@/components/header/AppNavBar'
import AppLogo from '@/components/header/AppLogo'
import AppSearch from '~/components/header/search/AppSearch'
import AppCall from '@/components/header/AppCall'
import AppCart from '@/components/header/AppCart'
// import AppNotification from '@/components/header/AppNotification';

export default {
  name: 'AppHeaderMobile',

  components: {
    AppCart,
    AppCall,
    AppSearch,
    AppLogo,
    AppNavBar,
    AppMenu,
    AppDrawer,
    AppNavigation
    // AppNotification
  }
}
</script>

<style lang="scss" scoped>
header {
  @include gt-sm {
  }

  @include lt-md {
    display: flex;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 4;
    height: 50px;
    padding: 0 16px;
    background: #fff;
    box-sizing: border-box;
  }
}
</style>

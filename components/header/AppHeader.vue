<template>
  <div>
    <app-notification />
    <app-navigation/>
    <app-menu/>

  </div>
</template>

<script>
import AppNotification from '@/components/header/AppNotification';
import AppNavigation from '@/components/header/AppNavigation';
import AppMenu from '@/components/header/AppMenu';
import AppNavBar from '@/components/header/AppNavBar';

export default {
  name: 'AppHeader',
  components: {
    AppNavBar,
    AppMenu,
    AppNavigation,
    AppNotification
  }
};
</script>

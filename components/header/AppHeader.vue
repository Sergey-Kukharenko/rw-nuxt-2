<template>
  <div>
    <app-navigation />
    <app-multiply-navigation />
    <app-nav-bar/>
    <app-notification/>
  </div>
</template>

<script>
import AppNotification from '~/components/header/AppNotification';
import AppNavigation from '@/components/header/AppNavigation'
import AppMultiplyNavigation from '~/components/header/AppMultiplyNavigation'
import AppNavBar from '~/components/header/AppNavBar';

export default {
  name: 'AppHeader',
  components: {
    AppNotification,
    AppNavBar,
    AppMultiplyNavigation,
    AppNavigation,
  }
}
</script>

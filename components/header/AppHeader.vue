<template>
  <div>
    <app-navigation />
    <app-multiply-navigation />
    <app-nav-bar/>
  </div>
</template>

<script>
import AppNavigation from '@/components/header/AppNavigation'
import AppMultiplyNavigation from '~/components/header/AppMultiplyNavigation'
import AppNavBar from '~/components/header/AppNavBar';

export default {
  name: 'AppHeader',
  components: {
    AppNavBar,
    AppMultiplyNavigation,
    AppNavigation,
  }
}
</script>

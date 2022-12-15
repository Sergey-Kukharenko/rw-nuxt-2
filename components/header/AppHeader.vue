<template>
  <div class="header-group">
    <app-navigation />
    <app-multiply-navigation />
    <app-nav-bar v-if="$route.name !== 'basket'"/>
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

<style lang="scss" scoped>
.header-group {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.04);
}
</style>

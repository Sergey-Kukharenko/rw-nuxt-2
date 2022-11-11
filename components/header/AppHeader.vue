<template>
  <div>
    <app-navigation />
    <app-multiply-navigation />
  </div>
</template>

<script>
import AppNavigation from '@/components/header/AppNavigation'
import AppMultiplyNavigation from '~/components/header/AppMultiplyNavigation'

export default {
  name: 'AppHeader',
  components: {
    AppMultiplyNavigation,
    AppNavigation,
  }
}
</script>

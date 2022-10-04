<template>
  <div>
    <app-notification />
    <app-navigation />
    <app-multiply-navigation />
  </div>
</template>

<script>
import AppNotification from '@/components/header/AppNotification'
import AppNavigation from '@/components/header/AppNavigation'
import AppMultiplyNavigation from '~/components/header/AppMultiplyNavigation'

export default {
  name: 'AppHeader',
  components: {
    AppMultiplyNavigation,
    AppNavigation,
    AppNotification
  }
}
</script>

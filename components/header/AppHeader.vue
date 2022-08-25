<template>
  <div>
    <app-notification />
    <app-navigation />
    <app-menu />
  </div>
</template>

<script>
import AppNotification from '@/components/header/AppNotification'
import AppNavigation from '@/components/header/AppNavigation'
import AppMenu from '@/components/header/AppMenu'

export default {
  name: 'AppHeader',
  components: {
    AppMenu,
    AppNavigation,
    AppNotification
  }
}
</script>

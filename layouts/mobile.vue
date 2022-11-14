<template>
  <div v-if="$device.isMobileOrTablet">
    <app-header-mobile />
    <Nuxt />
  </div>
</template>

<script>
import AppHeaderMobile from '~/components/header/mobile/AppHeaderMobile';

export default {
  name: 'MobileLayout',

  components: {
    AppHeaderMobile,
  },

  middleware: ['verifyMobileDevice'],
};
</script>

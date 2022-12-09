<template>
  <div>
    <app-header-mobile v-if="$device.isMobileOrTablet"/>
    <app-header v-else class="header-group"/>
    <app-breadcrumbs/>
    <Nuxt/>
    <app-footer/>
  </div>
</template>

<script>
import AppHeader from '@/components/header/AppHeader';
import AppHeaderMobile from '~/components/header/mobile/AppHeaderMobile';
import AppBreadcrumbs from '~/components/shared/AppBreadcrumbs';
import AppFooter from '@/components/footer/AppFooter';

export default {
  name: 'DefaultLayout',
  components: {
    AppHeaderMobile,
    AppHeader,
    AppBreadcrumbs,
    AppFooter,
  }
};
</script>

<style lang="scss" scoped>
.header-group {
  border-bottom: 1px solid #e5e5e5;
}
</style>

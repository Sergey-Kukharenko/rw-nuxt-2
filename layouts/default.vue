<template>
  <div>
    <!--    <template >-->
    <!--      <app-header-mobile v-if="$device.isMobileOrTablet"/>-->
    <!--      <app-notification/>-->
    <!--    </template>-->

    <!--    <template v-else>-->
    <!--      <app-notification/>-->
    <!--      <app-header class="header-group"/>-->
    <!--      <app-nav-bar/>-->
    <!--    </template>-->

    <app-header-mobile v-if="$device.isMobileOrTablet"/>
    <app-header v-else class="header-group"/>
<!--    <app-notification/>-->

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
// import AppNotification from '~/components/header/AppNotification';

export default {
  name: 'DefaultLayout',
  components: {
    // AppNotification,
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

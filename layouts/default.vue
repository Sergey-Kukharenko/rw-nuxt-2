<template>
  <div class="default-layout">
    <app-notification/>
    <app-header-mobile v-if="$device.isMobileOrTablet"/>
    <app-header v-else/>
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
import AppNotification from '~/components/header/AppNotification';

export default {
  name: 'DefaultLayout',
  components: {
    AppHeaderMobile,
    AppHeader,
    AppBreadcrumbs,
    AppFooter,
    AppNotification
  }
};
</script>

<style lang="scss" scoped>
.default-layout {
  @include lt-md {
    display: flex;
    flex-direction: column;

    & .header-group {
      order: 0;
    }

    & .notification {
      order: 1;
    }

    & main {
      order: 2;
    }

    & footer {
      order: 3;
    }
  }
}
</style>

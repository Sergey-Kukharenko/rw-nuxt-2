<template>
  <div class="menu">
    <div class="layout layout--horizontal-dt">
      <div class="menu-list">
        <div class="menu-list__item">
          <app-logo/>
        </div>
        <div class="menu-list__item">
          <app-location/>
        </div>
        <div class="menu-list__item">
          <app-informer/>
        </div>
        <div class="menu-list__item">
          <app-navigation-user/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppLogo from '~/components/header/AppLogo';
import AppLocation from '~/components/header/AppLocation';
import AppInformer from '~/components/header/AppInformer';
import AppNavigationUser from '~/components/header/AppNavigationUser';

export default {
  name: 'AppMenu',

  components: {
    AppLogo,
    AppLocation,
    AppInformer,
    AppNavigationUser,
  }
};
</script>

<style lang="scss" scoped>
.menu {
  @include gt-sm {
    position: relative;
    z-index: 5;
    padding: 24px 0 20px;
    border-bottom: 1px solid #e5e5e5;
  }
}

.menu-list {
  @include md {
    margin: 0 -8px;
  }

  @include gt-sm {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin: 0 -16px;
  }

  &__item {
    @include gt-md {
      padding: 0 16px;
    }

    @include md {
      margin: 0 8px;
    }

    @include sm {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1 1 50%;
      margin: 8px 0;
    }

    @include lt-md {
      margin: 0;
    }

    &:first-child {
      @include lt-sm {
        display: none;
      }
    }

    &:last-child {
      @include gt-sm {
        margin-left: auto;
      }
    }
  }
}
</style>

<template>
  <header>
    <app-drawer>
      <div :class="classNames">
        <div class="content__layout content__layout--md">
          <div class="content__row nested-group">
            <app-mobile-profile/>
            <app-search/>
          </div>
        </div>
        <div class="content__layout content__layout--md">
          <app-mobile-location/>
        </div>
        <div class="content__layout">
          <app-header-mobile-menu/>
        </div>
        <div class="content__group">
          <div class="content__separator"/>
          <div class="content__layout">
            <app-header-mobile-nav/>
          </div>
        </div>
      </div>
    </app-drawer>

    <app-logo/>
    <app-search/>
    <app-call/>
    <app-cart/>
  </header>

  <!--  <app-notification />-->
</template>

<script>
import {useToggleClassName} from '~/helpers';

import AppDrawer from '~/components/shared/AppDrawer';
import AppLogo from '~/components/header/AppLogo';
import AppSearch from '~/components/header/search/AppSearch';
import AppCall from '~/components/header/AppCall';
import AppCart from '~/components/header/AppCart';
import AppMobileProfile from '~/components/header/mobile/AppMobileProfile';
import AppMobileLocation from '~/components/header/mobile/AppMobileLocation';
import AppHeaderMobileMenu from '~/components/header/mobile/AppHeaderMobileMenu';
import AppHeaderMobileNav from '~/components/header/mobile/AppHeaderMobileNav';

export default {
  name: 'AppHeaderMobile',

  components: {
    AppHeaderMobileNav,
    AppHeaderMobileMenu,
    AppMobileLocation,
    AppMobileProfile,
    AppCart,
    AppCall,
    AppSearch,
    AppLogo,
    AppDrawer
  },

  provide() {
    return {
      updateVisibility: this.updateVisibility
    };
  },

  data() {
    return {
      isVisible: false
    };
  },

  computed: {
    classNames() {
      return useToggleClassName(this.isVisible, 'content', 'active');
    }
  },

  methods: {
    open() {
      this.isVisible = true;
    },

    close() {
      this.isVisible = false;
    },

    updateVisibility(payload) {
      this.isVisible = payload;
    }
  }
};

</script>

<style lang="scss" scoped>
header {
  @include lt-md {
    display: flex;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 4;
    height: 50px;
    padding: 0 16px;
    background: #fff;
    box-sizing: border-box;
  }
}

.content {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 12px 0;
  box-sizing: border-box;
  overflow: hidden;

  &__row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__layout {
    padding: 0 24px;
    box-sizing: border-box;

    &--md {
      padding: 0 16px;
    }
  }

  &__separator {
    width: 100%;
    height: 1px;
    background: #dde0e6;
    opacity: 1;
    transition: opacity 0.15s ease 0.15s;
  }

  &__group {
    margin-top: 16px;
  }

  &--active {
    .link {
      opacity: 0;
      transform: translateX(-40%);
    }

    & .content__separator {
      opacity: 0;
      transition: opacity 0.15s ease 0s;
    }
  }
}
</style>

<style lang="scss">
.nested-group {
  opacity: 1;
  transition: opacity 0.3s ease 0s, transform 0.3s ease 0s;
}

.content {
  &--active {
    .nested-group {
      opacity: 0;
      transform: translateX(-100%);
    }
  }
}
</style>


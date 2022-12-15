<template>
  <div class="navbar">
    <div class="layout layout--horizontal-dt">
      <div class="navbar-list">
        <div class="navbar-list__item">
          <app-menu :list="navBar"/>
        </div>
        <div class="navbar-list__item content">
          <div class="content__static">
            <app-search/>
          </div>
          <div class="content__scrolled list">
            <div class="list__item">
              <app-call/>
            </div>
            <div class="list__item">
              <app-cart theme="inline"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dataNavBar from '@/data/nav-bar';
import AppMenu from '~/components/header/menu/AppMenu';
import AppSearch from '~/components/header/search/AppSearch.vue';
import AppCart from '@/components/header/AppCart.vue';
import AppCall from '@/components/header/AppCall.vue';

export default {
  name: 'AppNavBar',

  components: {
    AppMenu,
    AppSearch,
    AppCart,
    AppCall
  },

  data() {
    return {
      navBar: dataNavBar,
    };
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  background: #fff;
  padding: 8px 0;

  @include gt-sm {
    border-top: 1px solid #EAEAEA;
    //box-shadow: 0 4px 8px rgba(0, 0, 0, 0.04);
  }

  @include lt-md {
    border-top: 1px solid #dde0e6;
  }

  .content {
    @include lt-md {
      display: none;
    }
  }
}

.navbar-list {
  @include gt-sm {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  &__item {
    &:last-child {
      @include lt-sm {
        display: none;
      }
    }
  }
}

.content {
  &__static {
    display: block;
  }

  &__scrolled {
    display: none;
  }
}
</style>

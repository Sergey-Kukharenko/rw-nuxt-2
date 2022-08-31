<template>
  <div :class="classNames">
    <div class="layout layout--horizontal-dt">
      <div class="navbar-list">
        <div class="navbar-list__item">
          <app-navigation-list :list="navBar" :options="{ theme: 'full' }" />
        </div>
        <div class="navbar-list__item content">
          <div class="content__static">
            <app-search />
          </div>
          <div class="content__scrolled list">
            <div class="list__item">
              <app-call />
            </div>
            <div class="list__item">
              <app-cart theme="inline" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dataNavBar from '@/data/nav-bar'
import AppNavigationList from '@/components/header/AppNavigationList.vue'
import AppSearch from '@/components/header/AppSearch.vue'
import AppCart from '@/components/header/AppCart.vue'
import AppCall from '@/components/header/AppCall.vue'

import { useToggleClassName } from '@/helpers'

export default {
  name: 'AppNavBar',

  components: {
    AppNavigationList,
    AppSearch,
    AppCart,
    AppCall
  },

  data() {
    return {
      navBar: dataNavBar,
      limitPosition: 184,
      scrolled: false,
    }
  },

  computed: {
    classNames() {
      return useToggleClassName(this.scrolled, 'navbar', 'modified')
    }
  },

  mounted() {
    this.handleScroll()
    window.addEventListener('scroll', this.handleScroll)
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },

  methods: {
    handleScroll() {
      this.scrolled = this.limitPosition < window.scrollY;
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  background: #fff;
  padding: 8px 0;

  @include gt-sm {
    position: sticky;
    top: 0;
    z-index: 4;
  }

  @include lt-md {
    border-top: 1px solid #dde0e6;
  }

  .content {
    @include lt-md {
      display: none;
    }
  }

  &--modified {
    @include gt-sm {
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.04);
    }

    .content {
      &__static {
        display: none;
      }

      &__scrolled {
        display: flex;
      }
    }

    .list {
      margin: 0 -16px;

      &__item {
        display: flex;
        padding: 10px 16px;
      }
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

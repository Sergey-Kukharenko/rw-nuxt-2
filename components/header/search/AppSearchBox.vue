<template>
  <div v-click-outside="onFocusOut" class="search">
    <div class="layout layout--md">
      <div :class="classNames">
        <form class="search-form" @submit.prevent="onSubmit">
          <input
            v-model="query"
            autocomplete="off"
            type="text"
            name="name"
            placeholder="Search for the best bouquet"
            class="input"
            @focus="onFocusIn"
          />
          <app-button v-if="$device.isDesktop" theme="search" size="lg" class="search__button"> Search</app-button>
        </form>
        <button v-if="$device.isMobileOrTablet" class="search__cancel cancel" @click="clearQuery">Cancel</button>
      </div>

      <div v-show="isSearchHistory" class="section">
        <div class="section__title">Search history</div>
        <div class="section__list">
          <app-list :list="searchHistory" has-remove-btn @removeItem="onRemoveItem" />
        </div>
      </div>

      <div v-show="isSearchResult" class="section">
        <div class="section__title">Categories</div>
        <div class="section__list">
          <app-list :list="filteredList" @addItem="onAddItem" />
        </div>
      </div>

      <app-not-found v-show="isNotFound" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import vClickOutside from 'v-click-outside';
import AppList from './AppList';
import AppButton from '~/components/shared/AppButton';
import siteData from '@/data/site-data';
import AppNotFound from '~/components/header/search/AppNotFound';
import { useToggleClassName } from '~/helpers';

export default {
  name: 'AppSearchBox',

  components: { AppNotFound, AppList, AppButton },

  directives: {
    clickOutside: vClickOutside.directive
  },

  data() {
    return {
      query: '',
      data: siteData,
      showSearchHistory: false,
      isVisible: false
    };
  },

  computed: {
    ...mapGetters({ searchHistory: 'user/getSearchHistory' }),

    filteredList() {
      return this.data.filter((item) => {
        return item.toLowerCase().includes(this.query.toLowerCase());
      });
    },

    isSearchResult() {
      return this.filteredList.length > 0 && this.query;
    },

    isNotFound() {
      return this.filteredList.length === 0 && this.query !== '';
    },

    isSearchHistory() {
      return this.searchHistory.length > 0 && this.showSearchHistory && !this.query;
    },

    classNames() {
      return useToggleClassName(this.isVisible, 'search-group', 'active');
    }
  },

  methods: {
    onFocusIn() {
      this.isVisible = true;
      this.showSearchHistory = true;
    },

    onFocusOut() {
      this.isVisible = false;
      this.showSearchHistory = false;
    },

    clearQuery() {
      this.query = '';
    },

    onSubmit() {
      if (!this.query) return;
      this.$store.commit('user/addToHistory', this.query);
      this.clearQuery();
    },

    onRemoveItem(payload) {
      this.$store.commit('user/removeFromHistory', payload);
    },

    onAddItem(payload) {
      this.$store.commit('user/addToHistory', payload);
      this.clearQuery();
    }
  }
};
</script>

<style lang="scss" scoped>
.search {
  background: #fff;

  @include gt-sm {
    min-height: 376px;
  }

  @include lt-md {
    margin-top: 12px;
  }
}

.search-group {
  display: flex;
  width: 100%;

  @include lt-md {
    &--active {
      & .cancel {
        display: block;
      }
    }
  }
}

.search-form {
  display: flex;

  @include lt-md {
    flex: 1;
  }
}

.input {
  font-family: $golos-regular;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.01em;
  background: $bg-grey;
  outline: none;
  border: none;
  border-radius: 10px;
  box-sizing: border-box;

  @include gt-sm {
    padding: 16px;
  }

  @include lt-md {
    padding: 12px 16px;
  }

  &:focus {
    &::placeholder {
      opacity: 0;
    }
  }

  @include gt-sm {
    width: 620px;
    margin-right: 24px;
  }

  @include lt-md {
    width: 100%;
  }
}

.section {
  @include gt-sm {
    display: flex;
    margin: 16px 0;
  }

  @include lt-md {
    margin: 24px 0;
  }

  &__title {
    font-family: $golos-regular;
    font-size: 14px;
    color: $color-white-grey;
    letter-spacing: -0.01em;

    @include gt-sm {
      width: 164px;
      line-height: 24px;
      padding-right: 10px;
    }
  }
}

.cancel {
  display: none;
  font-family: $golos-regular;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.01em;
  color: $color-white-grey;
  margin-left: 8px;
}
</style>

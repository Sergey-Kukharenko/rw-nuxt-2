<template>
  <div v-click-outside="onHideSearchHistory" class="search">
    <div class="layout">
      <form class="search-form" @submit.prevent="onSubmit">
        <input
          v-model="query"
          autocomplete="off"
          type="text"
          name="name"
          placeholder="Search for the best bouquet"
          class="input"
          @focus="onShowSearchHistory"
        />
        <app-button theme="search" size="lg">Search</app-button>
      </form>

      <div v-show="isSearchHistory" class="section">
        <div class="section__title">Search history</div>
        <div class="section__list">
          <app-list
            :list="searchHistory"
            has-remove-btn
            @removeItem="onRemoveItem"
          />
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
import vClickOutside from 'v-click-outside';
import AppList from './AppList';
import AppButton from '~/components/shared/AppButton';
import siteData from '@/data/site-data';
import AppNotFound from '~/components/header/search/AppNotFound';

export default {
  name: 'AppSearchBox',

  components: {AppNotFound, AppList, AppButton},

  directives: {
    clickOutside: vClickOutside.directive
  },

  data() {
    return {
      query: '',
      data: siteData,
      showSearchHistory: false
    };
  },

  computed: {
    searchHistory() {
      return this.$store.getters['user/searchHistory'];
    },

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
    }
  },

  methods: {
    onShowSearchHistory() {
      this.showSearchHistory = true;
    },

    onHideSearchHistory() {
      this.showSearchHistory = false;
    },

    clearQuery() {
      this.query = '';
    },

    onSubmit() {
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
  min-height: 376px;
}

.search-form {
  display: flex;
}

.input {
  width: 620px;
  font-family: $golos-regular;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.01em;
  background: $bg-grey;
  padding: 16px;
  margin-right: 24px;
  outline: none;
  border: none;
  border-radius: 10px;
  box-sizing: border-box;

  &:focus {
    &::placeholder {
      opacity: 0;
    }
  }
}

.section {
  display: flex;
  margin: 16px 0;

  &__title {
    width: 164px;
    padding-right: 10px;
    font-family: $golos-regular;
    font-size: 14px;
    line-height: 24px;
    color: $color-white-grey;
    letter-spacing: -0.01em;
  }
}
</style>

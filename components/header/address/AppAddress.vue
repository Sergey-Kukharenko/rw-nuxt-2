<template>
  <div class="container">
    <div class="container__header">
      <h1>Address finder</h1>
    </div>

    <div class="container__body">
      <div class="container__layout">
        <app-input :query.sync="query" />
        <app-list v-show="isList" :list="list" @clearQuery="onClearQuery" />
        <app-cities-by-default v-if="isCitiesByDefault" />
      </div>
    </div>
  </div>
</template>

<script>
import AppInput from './AppInput';
import AppList from './AppList';
import { woosMapService } from '@/services/woosMapService';
import AppCitiesByDefault from '~/components/header/address/AppCitiesByDefault';

export default {
  name: 'AppAddress',

  components: { AppCitiesByDefault, AppList, AppInput },

  data() {
    return {
      query: '',
      list: []
    };
  },

  computed: {
    isList() {
      return this.list.length > 0;
    },

    isCitiesByDefault() {
      return this.$device.isMobileOrTablet && !this.isList;
    }
  },

  watch: {
    async query(value) {
      this.list = value ? await woosMapService(value) : [];
    }
  },

  methods: {
    onClearQuery() {
      this.query = '';
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  @include gt-sm {
    width: 500px;
    padding-top: 18px;
    box-sizing: border-box;
  }

  &__layout {
    @include gt-sm {
      padding: 0 24px;
    }
  }

  &__header {
    @include gt-sm {
      padding: 0 24px;
      border-bottom: 1px solid #dde0e6;
    }

    @include lt-md {
      display: none;
    }
  }

  &__body {
    @include gt-sm {
      margin-top: 24px;
      height: 305px;
    }

    @include lt-md {
      margin: 0;
    }
  }
}
</style>

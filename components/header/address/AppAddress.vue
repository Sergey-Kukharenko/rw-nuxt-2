<template>
  <div class="container">
    <div class="container__header">
      <div class="container__layout">
        <h1>Address finder</h1>
      </div>
    </div>

    <div class="container__body">
      <div class="container__layout">
        <app-input :query.sync="query" />
<!--        <app-list v-show="isList" :list="list" @clearQuery="onClearQuery" />-->
<!--        <app-cities-by-default v-if="isCitiesByDefault" />-->
      </div>
    </div>
  </div>
</template>

<script>
import AppInput from './AppInput';
export default {
  name: 'AppAddress',

  components: {AppInput},

  data() {
    return {
      query: '',
      list: []
    }
  },

  computed: {
    isList() {
      return this.list.length > 0
    },

    isCitiesByDefault() {
      return this.$device.isMobileOrTablet && !this.isList
    }
  },

  watch: {
    query(value) {
      console.log(value);
    }
  },

  methods: {
    onClearQuery() {
      this.query = ''
    }
  },
};
</script>

<style scoped>

</style>

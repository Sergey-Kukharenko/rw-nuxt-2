<template>
  <div>
    <app-mobile-link v-if="isLink" :link="link" />
    <app-mobile-list v-if="isList" :list="list" />

    <template v-if="isAll">
      <app-mobile-tiles :section="categories" />
      <app-mobile-section :section="by.price" />
      <app-mobile-products :section="products" />
    </template>

    <div v-if="isRoses" class="group-sections">
      <app-mobile-section :section="by.quantity" />
      <app-mobile-tiles :section="categories" theme="outline" />
      <app-mobile-products :section="products" size="md" />
      <app-mobile-section :section="by.look" />
      <app-mobile-section :section="by.height" />
    </div>
  </div>
</template>

<script>
import AppMobileLink from '~/components/header/mobile/AppMobileLink';
import AppMobileList from '~/components/header/mobile/AppMobileList';
import AppMobileTiles from '~/components/header/mobile/AppMobileTiles';
import AppMobileSection from '~/components/header/mobile/AppMobileSection';
import AppMobileProducts from '~/components/header/mobile/AppMobileProducts';

export default {
  name: 'AppMobileSubMenu',

  components: {
    AppMobileProducts,
    AppMobileSection,
    AppMobileTiles,
    AppMobileList,
    AppMobileLink
  },

  props: {
    list: {
      type: Array,
      default: () => []
    },

    link: {
      type: Object,
      default: () => ({})
    },

    categories: {
      type: Object,
      default: () => ({})
    },

    by: {
      type: Object,
      default: () => ({})
    },

    products: {
      type: Object,
      default: () => ({})
    },

    type: {
      type: String,
      default: ''
    }
  },

  computed: {
    isLink() {
      return this.link.text;
    },

    isList() {
      return this.list?.length > 0;
    },

    isAll() {
      return this.type === 'all';
    },

    isRoses() {
      return this.type === 'roses';
    }
  }
};
</script>

<style lang="scss">
.group-sections {
  & .section:not(:last-child) {
    border-bottom: 1px solid #dde0e6;
  }
}
</style>

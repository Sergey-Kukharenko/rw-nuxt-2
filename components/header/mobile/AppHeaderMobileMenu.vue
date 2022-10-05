<template>
  <div>
    <app-mobile-menu
      :list="menu"
      class="nested-group"
      @selectItem="onSelectItem"
    />
    <app-drawer-nested :visible="isVisible" :title="title" @close="close">
<!--      <app-mobile-sub-menu-->
<!--        v-bind="{ list, link, categories, by, products, type }"-->
<!--      />-->
    </app-drawer-nested>
  </div>
</template>

<script>
import dataMenu from '@/data/menu.js';
import AppMobileMenu from '~/components/header/mobile/AppMobileMenu';
import AppDrawerNested from '~/components/header/mobile/AppDrawerNested';

export default {
  name: 'AppHeaderMobileMenu',

  components: {AppDrawerNested, AppMobileMenu},

  inject: ['updateVisibility'],

  data() {
    return {
      menu: dataMenu,
      isVisible: false,
      selected: 0
    };
  },

  computed: {
    currentItem() {
      return this.menu[this.selected];
    },

    isSubLevel() {
      return this.currentItem.hasSubLevel;
    },

    title() {
      return this.currentItem.title;
    },

    list() {
      return this.currentItem.list;
    },

    link() {
      return this.currentItem.link;
    },

    categories() {
      return this.currentItem?.categories;
    },

    by() {
      return this.currentItem?.by;
    },

    products() {
      return this.currentItem?.products;
    },

    type() {
      return this.currentItem?.type;
    }
  },

  watch: {
    isVisible(value) {
      this.updateVisibility(value);
    }
  },

  methods: {
    open() {
      this.isVisible = true;
    },

    close() {
      this.isVisible = false;
    },

    onSelectItem(idx) {
      this.selected = idx;
      this.isSubLevel && this.open();
    }
  },
};
</script>

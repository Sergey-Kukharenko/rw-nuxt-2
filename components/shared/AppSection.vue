<template>
  <div :class="classNames">
    <section class="section">
      <app-section-header :header-props="section.main" />
      <app-section-grid v-slot="slotProps" :slides="section.list" :theme="theme" :slug="name">
        <app-card :slide="{ ...slotProps }" />
      </app-section-grid>
    </section>
  </div>
</template>

<script>
import AppSectionHeader from '~/components/shared/AppSectionHeader.vue';
import AppSectionGrid from '~/components/shared/AppSectionGrid.vue';
import AppCard from '~/components/shared/AppCard.vue';

export default {
  name: 'AppSpecialOffers',

  components: {
    AppSectionHeader,
    AppSectionGrid,
    AppCard
  },

  props: {
    section: {
      type: Object,
      default: () => ({})
    },

    theme: {
      type: String,
      default: ''
    },

    name: {
      type: String,
      default: ''
    },

    slug: {
      type: String,
      default: ''
    }
  },

  computed: {
    classNames() {
      return ['layout', this.name];
    }
  }
};
</script>

<style lang="scss">
.section {
  margin-top: 0;
}
</style>

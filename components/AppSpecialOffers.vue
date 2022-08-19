<template>
  <section class="layout section">
    <app-section-header v-bind="{ headerProps }" />
    <app-grid v-slot="slotProps" :slides="slides">
      <app-card :slide="{ ...slotProps }" />
    </app-grid>
  </section>
</template>

<script>
import dataSpecialOffers from '@/data/special-offers';
import AppSectionHeader from '@/components/AppSectionHeader.vue';
import AppGrid from '@/components/shared//AppGrid.vue';
import AppCard from '@/components/shared/AppCard.vue';

const { main, list } = dataSpecialOffers;

export default {
  name: 'AppSpecialOffers',
  components: {
    AppSectionHeader,
    AppGrid,
    AppCard,
  },
  data() {
    return {
      headerProps: main,
      slides: list,
    };
  },
};
</script>

<style lang="scss">
.section {
  margin-top: 0;
}
</style>

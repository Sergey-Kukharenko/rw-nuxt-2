<template>
  <section>
    <app-section-header v-bind="{ headerProps }" />
    <app-section-grid v-slot="slotProps" :slides="slides">
      <app-card :slide="{ ...slotProps }" />
    </app-section-grid>
  </section>
</template>

<script>
import dataRecently from '@/data/recently';
import AppSectionHeader from '~/components/shared/AppSectionHeader';
import AppSectionGrid from '@/components/shared/AppSectionGrid';
import AppCard from '@/components/shared/AppCard';

const { main, list } = dataRecently;

export default {
  name: 'AppRecently',

  components: {
    AppSectionHeader,
    AppSectionGrid,
    AppCard
  },

  data() {
    return {
      headerProps: main,
      slides: list
    };
  }
};
</script>

<style scoped></style>

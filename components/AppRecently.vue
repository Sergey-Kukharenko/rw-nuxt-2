<template>
  <section>
    <app-section-header v-bind="{ headerProps }" />
    <app-grid v-slot="slotProps" :slides="slides">
      <app-card :slide="{ ...slotProps }" />
    </app-grid>
  </section>
</template>

<script>
import dataRecently from '@/data/recently'
import AppSectionHeader from '@/components/AppSectionHeader'
import AppGrid from '@/components/shared/AppGrid'
import AppCard from '@/components/shared/AppCard'

const { main, list } = dataRecently

export default {
  name: 'AppSimilar',

  components: {
    AppSectionHeader,
    AppGrid,
    AppCard
  },

  data() {
    return {
      headerProps: main,
      slides: list,
    }
  }
};
</script>

<style scoped>

</style>

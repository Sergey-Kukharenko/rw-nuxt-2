<template>
  <main>
    <app-promotions/>
    <app-popular-categories/>
    <app-section :section="bestBouquets"/>
    <app-section-sm :section="recipient"/>
    <app-section :section="specialOffers" theme="custom"/>
    <app-section :section="underPounds" theme="custom"/>
    <app-shop-by-price />
    <app-section-sm :section="pickBouquet" theme="custom"/>
  </main>
</template>

<script>
import AppSection from '@/components/shared/AppSection.vue';
import AppSectionSm from '~/components/shared/AppSectionSm';

import dataRecipient from '@/data/recipient';
import dataPickBouquet from '@/data/pick-bouquet';
import dataBestBouquets from '@/data/best-bouquets';
import dataSpecialOffers from '@/data/special-offers';
import dataUnderPounds from '@/data/under-pounds';

export default {
  name: 'IndexPage',

  components: {
    AppSectionSm,
    AppSection,
  },

  data() {
    return {
      recipient: dataRecipient,
      pickBouquet: dataPickBouquet,
      bestBouquets: dataBestBouquets,
      specialOffers: dataSpecialOffers,
      underPounds: dataUnderPounds
    }
  },
};
</script>

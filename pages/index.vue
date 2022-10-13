<template>
  <main>
    <app-promotion />
    <app-popular-categories />
    <app-section-sm :section="recipient"/>
    <app-section :section="specialOffers" theme="custom"/>
  </main>

</template>

<script>
import AppSection from '@/components/shared/AppSection.vue';
import AppSectionSm from '~/components/shared/AppSectionSm';

import dataRecipient from '@/data/recipient';
import dataSpecialOffers from '@/data/special-offers';

export default {
  name: 'IndexPage',

  components: {
    AppSectionSm,
    AppSection,
  },

  data() {
    return {
      recipient: dataRecipient,
      specialOffers: dataSpecialOffers,
    }
  },
};
</script>

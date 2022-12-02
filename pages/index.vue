<template>
  <main>
    <app-promotions/>
    <app-popular-categories/>
    <app-section :section="bestBouquets"/>
    <app-section-sm :section="recipient"/>
    <app-section :section="specialOffers" theme="custom"/>
    <app-reviews />
    <app-section :section="underPounds" theme="custom"/>
    <app-shop-by-price />
    <app-section :section="autumnCollection" theme="custom"/>
    <app-benefits />
    <app-section-sm :section="pickBouquet" theme="custom"/>
    <app-discount />
    <app-faq />
    <app-info />
    <app-best-offer />
  </main>
</template>

<script>
import AppSection from '@/components/shared/AppSection.vue';
import AppSectionSm from '@/components/shared/AppSectionSm';

import dataRecipient from '@/data/recipient';
import dataPickBouquet from '@/data/pick-bouquet';
import dataBestBouquets from '@/data/best-bouquets';
import dataSpecialOffers from '@/data/special-offers';
import dataUnderPounds from '@/data/under-pounds';
import dataAutumnCollection from '@/data/autumn-collection';
import ToastCardDeals from '~/components/toast-cards/ToastCardDeals';

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
      underPounds: dataUnderPounds,
      autumnCollection: dataAutumnCollection
    }
  },

  mounted() {
    const content = {
      component: ToastCardDeals,
      props: {
        icon: {
          name: 'lightning',
          size: {width: 28, height: 28}
        },
        title: 'Great product!',
        text: '943 people have bought this product in the last 7 days',
      }
    };

    const options = {
      timeout: 5000,
      icon: false,
      closeButton: false,
      position: 'bottom-left',
      class: ['toast', 'toast--md', 'toast--dark'],
    };

    this.$toast(content, options);
  },
};
</script>

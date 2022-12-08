<template>
  <main>
    <app-promotions class="promotions"/>
    <app-popular-categories class="popular-categories"/>
    <app-section :section="bestBouquets" class="best-bouquets"/>
    <app-section-sm :section="recipient" class="recipient"/>
    <app-section :section="specialOffers" theme="custom" class="special-offers"/>
    <app-reviews class="reviews"/>
    <app-section :section="underPounds" theme="custom" class="under-pounds"/>
    <app-shop-by-price class="shop-by-price" />
    <app-section :section="autumnCollection" theme="custom" class="autumn-collection"/>
<!--    <app-benefits class="benefits"/>-->
    <app-section-sm :section="pickBouquet" theme="custom" class="pick-bouquet"/>
<!--    <app-discount class="discount"/>-->
<!--    <app-faq class="faq" />-->
<!--    <app-info class="info"/>-->
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
};
</script>

<style lang="scss" scoped>
main {
  @include lt-md{
    display: flex;
    flex-direction: column;

    .promotions{
      order: 0;
    }

    .best-bouquets {
      order: 1;
    }

    .popular-categories{
      order: 2;
    }

    .special-offers{
      order: 3;
    }

    .recipient{
      order: 4;
    }

    .under-pounds{
      order: 5;
    }

    .reviews{
      order: 7;
    }

    .shop-by-price{
      order: 7;
    }

    .autumn-collection{
      order: 7;
    }

    .benefits{
      order: 7;
    }

    .pick-bouquet{
      order: 7;
    }

    .discount{
      order: 7;
    }

    .faq{
      order: 7;
    }

    .info{
      order: 7;
    }
  }

  > section {
    @include lt-md{
      width: 100%;
      box-sizing: border-box;
    }
  }
}
</style>

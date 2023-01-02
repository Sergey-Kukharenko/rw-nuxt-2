<template>
  <main>
    <app-promotions />
    <app-popular-categories />
    <app-section v-if="isBestBouquets" :section="bestBouquets" name="best-bouquets" />
    <app-section-sm v-if="isRecipient" :section="recipient" name="recipient" />
    <app-section v-if="isSpecialOffers" :section="specialOffers" name="special-offers" theme="custom" />
    <app-reviews />
    <app-section v-if="isUnderPounds" :section="underPounds" name="under-pounds" theme="custom" />
    <app-shop-by-price />
    <app-section v-if="isAutumnCollection" :section="autumnCollection" name="autumn-collection" theme="custom" />
    <app-benefits />
    <app-section-sm v-if="isPickBouquet" :section="pickBouquet" name="pick-bouquet" theme="custom" />
    <app-discount />
    <app-faq />
    <app-info />
  </main>
</template>

<script>
import { mapGetters } from 'vuex';
import { useObjectNotEmpty } from '~/helpers';

import AppSection from '@/components/shared/AppSection.vue';
import AppSectionSm from '@/components/shared/AppSectionSm';

export default {
  name: 'IndexPage',

  components: {
    AppSection,
    AppSectionSm
  },

  computed: {
    ...mapGetters({
      bestBouquets: 'pages/home/getBestBouquets',
      recipient: 'pages/home/getRecipient',
      specialOffers: 'pages/home/getSpecialOffers',
      underPounds: 'pages/home/getUnderPounds',
      autumnCollection: 'pages/home/getAutumnCollection',
      pickBouquet: 'pages/home/getPickBouquet'
    }),

    isBestBouquets() {
      return useObjectNotEmpty(this.bestBouquets);
    },

    isRecipient() {
      return useObjectNotEmpty(this.recipient);
    },

    isSpecialOffers() {
      return useObjectNotEmpty(this.specialOffers);
    },

    isUnderPounds() {
      return useObjectNotEmpty(this.underPounds);
    },

    isAutumnCollection() {
      return useObjectNotEmpty(this.autumnCollection);
    },

    isPickBouquet() {
      return useObjectNotEmpty(this.pickBouquet);
    }
  },

  mounted() {
    this.$store.dispatch('pages/home/fetchMainPage');
  }
};
</script>

<style lang="scss" scoped>
main {
  @include lt-md {
    display: flex;
    flex-direction: column;

    .promotion {
      order: 0;
    }

    .best-bouquets {
      order: 1;
    }

    .popular-categories {
      order: 2;
    }

    .special-offers {
      order: 3;
    }

    .recipient {
      order: 4;
    }

    .under-pounds {
      order: 5;
    }

    .reviews {
      order: 7;
    }

    .shop-by-price {
      order: 7;
    }

    .autumn-collection {
      order: 7;
    }

    .benefits {
      order: 7;
    }

    .pick-bouquet {
      order: 7;
    }

    .discount {
      order: 7;
    }

    .faq {
      order: 7;
    }

    .info {
      order: 7;
    }
  }

  > section,
  > .layout {
    @include lt-md {
      width: 100%;
      box-sizing: border-box;
    }
  }
}
</style>

<template>
  <div class="layout layout-dt detail-page">
    <div class="detail-page__row">
      <div class="detail-page__col">gallery</div>
      <div class="detail-page__col">
        <h1 class="detail-page__title">{{ title }}</h1>
        <app-form-offers :product="getProduct" />
        <app-service :text="description" />
      </div>
    </div>

    <div class="detail-page__about about">
      <h2 class="about__title">reviews.title</h2>
      <div class="about__row">
        <div class="about__reviews">reviews.list</div>
        <div class="about__rating">rating</div>
      </div>
    </div>

    <div class="detail-page__section">
      <app-section v-if="isSimilarBouquets" :section="similarBouquets" name="similar-bouquets" />
    </div>
    <div class="detail-page__section">
      <app-section v-if="isRecentlyWatched" :section="recentlyWatched" name="recently-watched" />
    </div>
    <div class="detail-page__section">
      <app-popular-categories-items v-if="isPopularCategoriesItems" :popular="popularCategoriesItems" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { useObjectNotEmpty } from '~/helpers';

import AppFormOffers from '@/components/product/AppFormOffers';
import AppService from '@/components/product/AppService';
import AppSection from '@/components/shared/AppSection.vue';
import AppPopularCategoriesItems from '@/components/card-product/AppPopularCategoriesItems';

export default {
  name: 'IdPage',

  components: {
    AppService,
    AppFormOffers,
    AppSection,
    AppPopularCategoriesItems
  },

  middleware: ['not-found'],

  async asyncData({ route, $axios }) {
    const path = route.fullPath;
    const data = {
      seo: {},
      title: '',
      description: '',

      positions: [],
      price: {},
      like: null,
    };

    try {
      const { data: response } = await $axios.$get(`/offers${path}`);

      console.log(response);

      data.seo = response.seo;
      data.title = response.title;
      data.description = response.description;

      data.id = response.id;
      data.positions = response.positions;
      data.price = response.price;
      data.like = response.like;
    } catch (error) {
      console.error(error);
    }

    return data;
  },

  head() {
    return {
      title: this.seo.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.seo.description
        }
      ]
    };
  },

  computed: {
    ...mapGetters({
      similarBouquets: 'pages/card-product/getSimilarBouquets',
      recentlyWatched: 'pages/card-product/getRecentlyWatched',
      popularCategoriesItems: 'pages/card-product/getPopularCategoriesItems'
    }),

    isSimilarBouquets() {
      return useObjectNotEmpty(this.similarBouquets);
    },

    isRecentlyWatched() {
      return useObjectNotEmpty(this.recentlyWatched);
    },

    isPopularCategoriesItems() {
      return useObjectNotEmpty(this.popularCategoriesItems);
    },

    getProduct() {
      const id = this.id;
      const positions = this.positions;
      const price = this.price;
      const like = this.like;

      return {
        id,
        positions,
        price,
        like
      };
    }
  },

  mounted() {
    this.fetchCardProductPage();
  },

  methods: {
    ...mapActions({ fetchCardProductPage: 'pages/card-product/fetchCardProductPage' })
  }
};
</script>

<style lang="scss" scoped>
.detail-page {
  &__row {
    @include gt-sm {
      display: flex;
    }
  }

  &__col {
    box-sizing: border-box;

    @include gt-sm {
      width: 50%;

      &:first-child {
        padding-right: 12px;
      }

      &:last-child {
        padding-left: 12px;
      }
    }
  }

  &__title {
    @include gt-sm {
      margin-top: 8px;
    }

    @include lt-sm {
      margin-top: 22px;
    }
  }

  &__section {
    @include gt-sm {
      margin: 76px 0;
    }

    @include lt-md {
      margin: 40px 0;
    }
  }
}

.about {
  &__title {
    @include gt-sm {
      margin: 0 0 16px 0;
    }
  }

  &__row {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  &__reviews {
    @include gt-sm {
      flex: 0 0 620px;
    }

    @include lt-md {
      order: 1;
    }
  }

  &__rating {
    @include gt-sm {
      flex: 0 0 344px;
    }

    @include lt-md {
      width: 100%;
    }
  }

  &__text {
    font-family: $golos-bold;
    font-size: 16px;
    line-height: 20px;
    color: #000;
    margin-right: 10px;
  }
}
</style>

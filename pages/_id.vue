<template>
  <div class="layout layout-dt detail-page">
    <div class="detail-page__row">
      <div class="detail-page__col">
        gallery
      </div>
      <div class="detail-page__col">
        <h1 class="detail-page__title">{{ title }}</h1>
        <app-form-offers v-if="isTypeComposite" :product="getProduct"/>
        <app-service :text="description"/>
      </div>
    </div>

    <div class="detail-page__about about">
      <h2 class="about__title">
        reviews.title
      </h2>
      <div class="about__row">
        <div class="about__reviews">
          reviews.list
        </div>
        <div class="about__rating">
          rating
        </div>
      </div>
    </div>

    <div class="detail-page__section">
      similar
    </div>
    <div class="detail-page__section">
      recently
    </div>
    <div class="detail-page__section">
      popular-categories
    </div>
  </div>
</template>

<script>
import bouquetSunshine from '@/data/bouquet-sunshine';
import AppFormOffers from '~/components/product/AppFormOffers';
import AppService from '~/components/product/AppService';

export default {
  name: 'IdPage',

  components: {AppService, AppFormOffers},

  middleware: ['not-found'],

    async asyncData({route, $axios, redirect}) {
      const path = route.fullPath;
      const data = {
        seo: {},
        title: '',
        description: '',
        object: {},
        positions: []
      };

      try {
        // const {data: response} = await $axios.$get(`/offers${path}`);
        const res = await $axios.$get(`https://api.nuxtjs.dev/mountains/1`);

        if(res) {
          console.log(res);
          console.log(path);

        const {data: response} = bouquetSunshine

        data.seo = response.seo;
        data.title = response.title;
        data.description = response.description;
        data.object = response.object;
        data.positions = response.positions;
        }
      } catch (error) {
        console.error(error.response);
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
      ],
    };
  },

  computed: {
    isTypeComposite() {
      return this.object === 'Offer';
    },

    getProduct() {
      return this.isTypeComposite ? this.positions[0] : this.positions[1];
    },
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

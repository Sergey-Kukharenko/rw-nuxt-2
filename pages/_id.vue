<template>
  <div class="layout layout-dt detail-page">
    <div class="detail-page__row">
      <div class="detail-page__col">
        gallery
      </div>
      <div class="detail-page__col">
        <h1 class="detail-page__title">{{ title }}</h1>
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

export default {
  name: 'IdPage',

  asyncData({route, $axios}) {
    // const path = route.fullPath;
    // const bouquet = await $axios.$get(`${path}`);
    const {data} = bouquetSunshine;
    const {seo, title} = data;

    return {seo, title};
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

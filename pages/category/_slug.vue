<template>
  <main class="layout category-page">
    <div class="category-page__row">
      <div class="category-page__col filter-panel">
        <div class="filter-panel__header">
          <h1 class="filter-panel__header-title">{{ categoryTitle }}</h1>
        </div>
      </div>
      <div class="category-page__col category-products">
        <category-product-list />
      </div>
    </div>
  </main>
</template>

<script>
import dataCategoryProducts from '~/data/category-products';
import { PAGINATION } from '~/constants';

export default {
  name: 'CategoryPage',

  async asyncData({ store, route }) {
    const { slug } = route.params;

    await store.dispatch('category/fetchCategory', {
      slug,
      params: {
        limit: PAGINATION.limit
      }
    });
  },

  data() {
    return {
      categoryProducts: dataCategoryProducts,
      title: dataCategoryProducts.main.title
    };
  },

  computed: {
    categoryTitle() {
      return this.$store.getters['category/getCategory']?.main?.title ?? this.$route.params.slug.split('-').join(' ');
    }
  }
};
</script>

<style lang="scss" scoped>
.category-page {
  margin-top: 0;

  &__row {
    display: flex;
    flex-direction: column;

    @include lt-md {
      flex-direction: column;
    }

    .filter-panel {
      width: 344px;
      margin-right: 31px;

      &__header {
        display: flex;
        align-items: flex-end;
        box-sizing: border-box;

        @include gt-sm {
          height: 73px;
        }

        @include lt-md {
          height: 40px;
        }

        &-title {
          font-family: $Literata;
          font-style: normal;
          letter-spacing: -0.01em;
          margin: 0;

          @include gt-sm {
            font-weight: 600;
            font-size: 32px;
            line-height: 40px;
            color: #000000;
            margin-bottom: 24px;
          }

          @include lt-md {
            font-weight: 700;
            font-size: 20px;
            line-height: 24px;
            color: $color-dark-grey;
            margin-bottom: 12px;
          }
        }
      }

      &__menu {
        @include lt-md {
          display: none;
        }
      }
    }

    .category-products {
      flex: auto;

      &__header {
        height: 73px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #eaeaea;

        @include lt-md {
          display: none;
        }

        &-title {
          font-family: $golos-regular;
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 20px;
          letter-spacing: -0.01em;
          color: #7c7c7c;
        }
      }

      &__header-bottom .active-filters {
        @include lt-md {
          display: none;
        }
      }
    }
  }
}
</style>

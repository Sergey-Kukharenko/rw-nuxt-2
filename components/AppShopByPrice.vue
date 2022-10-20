<template>
  <section class="layout shop-by-price">
    <h2 class="title shop-by-price__title">
      {{ shopByPrice.title }}
    </h2>

    <div class="list">
      <div
        v-for="(item, idx) in shopByPrice.list"
        :key="idx"
        class="list__item"
      >
        <div class="card">
          <div class="card__figure">{{ item.type }}</div>
          <div class="card__group">
            <div class="title card__title">
              {{ item.title }}
              <span v-if="item.currency" class="currency">{{
                  item.currency
                }}</span>
            </div>
            <a class="card__link">{{ item.link }}</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import dataShopByPrice from '@/data/shop-by-price'

export default {
  name: 'AppShopByPrice',

  data() {
    return {
      shopByPrice: dataShopByPrice
    }
  }
};
</script>

<style lang="scss" scoped>
.title {
  font-family: $Literata;
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  margin: 0;
}

.shop-by-price {
  &__title {
    @include gt-sm {
      margin-bottom: 24px;
    }

    @include lt-md {
      display: none;
    }
  }
}

.list {
  display: flex;

  @include gt-sm {
    gap: 24px;
  }

  @include lt-md {
    gap: 2px;
  }

  &__item {
    flex: 30%;
  }
}

.card {
  text-align: center;
  background: #f7f7f7;
  box-sizing: border-box;

  @include gt-sm {
    padding: 16px;
    border-radius: 16px;
  }

  @include lt-md {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 96px;
    height: 96px;
    padding: 6px;
    margin: auto;
    border-radius: 50%;
  }

  &__figure {
    display: inline-block;
    font-family: $golos-medium;
    color: $color-dark-grey;
    letter-spacing: 0.01em;
    background: #fff;
    line-height: 16px;
    border: 1px solid #393939;
    border-radius: 32px;
    box-sizing: border-box;

    @include gt-sm {
      font-size: 16px;
      padding: 10px 13px;
    }

    @include lt-md {
      font-size: 13px;
      padding: 3px 7px;
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  &__group {
  }

  &__title {
    @include gt-sm {
      margin: 4px 0;
    }

    @include lt-md {
      font-size: 16px;
      line-height: 20px;
      margin-bottom: 2px;
    }
  }

  &__link {
    font-family: $golos-medium;

    color: $color-dark-green;

    @include gt-sm {
      font-size: 16px;
      line-height: 22px;
    }

    @include lt-md {
      font-size: 13px;
      line-height: 16px;
      letter-spacing: 0.01em;
    }
  }
}

.currency {
  @include lt-md {
    display: none;
  }
}
</style>

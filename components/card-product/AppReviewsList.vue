<template>
  <div class="list">
    <div v-for="item in reviews" :key="item.name" class="list__item">
      <div class="card">
        <div class="card__header">
          <div class="figure" :style="item.style">
            <div class="figure__letter">
              {{ item.logo }}
            </div>
          </div>
          <div class="figcaption">
            <div class="figcaption__name">
              {{ item.name }}
            </div>
            <div class="figcaption__rating">
              <app-stars :stars="item.rating" />
            </div>
          </div>
        </div>
        <div class="card__body">
          {{ item.message }}
        </div>
        <div class="card__footer">
          <div class="date">
            {{ item.formatted_date }}
          </div>
          <app-like :like="item.like" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AppStars from '@/components/shared/AppStars';
import AppLike from '@/components/shared/AppLike';

export default {
  name: 'AppReviewsList',

  components: {
    AppStars,
    AppLike
  },

  props: {
    reviews: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="scss" scoped>
.list {
  @include lt-md {
    margin-top: 4px;
  }

  &__item {
    @include gt-sm {
      padding: 32px 0;
    }

    @include lt-md {
      padding: 24px 0;
    }

    &:not(:last-child) {
      border-bottom: 1px solid #eaeaea;
    }
  }
}

.card {
  &__header {
    display: flex;
  }

  &__body {
    font-family: $golos-regular;
    color: #000000;
    letter-spacing: 0.01em;

    @include gt-sm {
      font-size: 16px;
      line-height: 24px;
      margin-top: 10px;
    }

    @include lt-md {
      font-size: 14px;
      line-height: 20px;
      margin-top: 14px;
    }
  }

  &__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 16px;
  }
}

.figure {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;

  &__letter {
    font-family: $sana-black;
    font-style: normal;
    font-weight: 900;
    font-size: 24px;
    line-height: 32px;
    color: #fff;
  }
}

.figcaption {
  flex: 1;
  margin-left: 12px;

  &__name {
    font-family: $Literata;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: -0.01em;
    margin: 0;
  }

  &__rating {
    margin-top: 4px;
  }
}

.date,
.likes {
  font-family: $golos-regular;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.01em;
}

.date {
  color: #7e8895;
}
</style>

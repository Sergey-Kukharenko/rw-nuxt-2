<template>
  <div class="list">
    <div v-for="item in rating.list" :key="item.stars" class="list__item">
      <div class="card">
        <div class="card__stars">
          <app-stars :stars="item.stars" class="stars--content-right" />
        </div>
        <div class="card__progress progress">
          <div
            class="progress__bar"
            :style="getProgressWidth(item.count)"
          ></div>
        </div>
        <div class="card__number">
          {{ item.count }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppStars from '@/components/shared/AppStars.vue'

export default {
  name: 'AppRatingList',

  components: { AppStars },

  props: {
    rating: {
      type: Object,
      default: () => {}
    }
  },

  methods: {
    getProgressWidth(count) {
      const total = this.rating.reviews
      return 'width:' + ((count / total) * 100).toFixed(4) + '%'
    }
  }
};
</script>

<style lang="scss" scoped>
.list {
  &__item {
    margin: 2px 0;
  }
}

.card {
  display: flex;
  align-items: center;

  &__stars,
  &__number {
    flex-shrink: 0;
  }

  &__stars {
    width: 88px;
  }

  &__number {
    @include gt-sm {
      width: 24px;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.01em;
      color: $color-white-grey;
    }

    @include lt-md {
      display: none;
    }
  }

  &__progress {
    flex: 1;
    height: 4px;
    background: #dde0e6;
    border-radius: 2px;

    @include gt-sm {
      margin: 0 8px;
    }

    @include lt-md {
      margin-left: 16px;
    }
  }
}

.progress {
  &__bar {
    width: 10%;
    height: 100%;
    border-radius: 2px;
    background: #ffcd1e;
    transition: width 0.2s ease-out 0s;
  }
}
</style>

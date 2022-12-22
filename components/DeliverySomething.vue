<template>
  <div class="something layout">
    <div class="something__top">
      <h2 class="something__title">
        {{ $options.SOMETHING_IMPORTANT.title }}
      </h2>
      <p class="something__text">{{ $options.SOMETHING_IMPORTANT.text }}</p>
    </div>

    <div class="something__cards">
      <app-info-card v-for="(card, index) in $options.SOMETHING_IMPORTANT.columns" :key="index" :number="index + 1">
        <template #title>
          <h3 class="card__title">{{ card.title }}</h3>
        </template>
        <template #text>
          <p class="card__text">{{ card.text }}</p>
        </template>
      </app-info-card>
    </div>
  </div>
</template>

<script>
import AppInfoCard from '~/components/info/AppInfoCard';

import { SOMETHING_IMPORTANT } from '~/data/delivery';

export default {
  name: 'DeliverySomething',

  components: {
    AppInfoCard
  },

  SOMETHING_IMPORTANT
};
</script>

<style lang="scss" scoped>
.something {
  display: flex;
  flex-direction: column;

  @include gt-sm {
    gap: 52px;
  }

  @include lt-md {
    gap: 24px;
  }

  &__top {
    display: flex;
    flex-direction: column;

    @include gt-sm {
      gap: 24px;
    }

    @include lt-md {
      gap: 12px;
    }
  }

  &__title {
    margin: 0;
    font-family: $Literata;
    font-style: normal;
    font-weight: 700;
    color: $color-dark-grey;

    @include gt-sm {
      font-size: 48px;
      line-height: 70px;
    }

    @include lt-md {
      font-size: 20px;
      line-height: 24px;
      letter-spacing: -0.01em;
    }
  }

  &__text {
    margin: 0;
    font-family: $golos-regular;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.01em;
    color: $color-dark-grey;

    @include gt-sm {
      width: 50%;
      white-space: pre-wrap;
    }
  }

  &__cards {
    display: flex;

    @include gt-sm {
      gap: 24px;
    }

    @include lt-md {
      flex-direction: column;
      gap: 16px;
    }

    .card {
      &__title {
        margin: 0;
        font-family: $golos-medium;
        font-style: normal;
        font-weight: 600;
        color: $color-dark-grey;

        @include gt-sm {
          min-height: 48px;
          font-size: 20px;
          line-height: 24px;
          white-space: pre-wrap;
        }

        @include lt-md {
          font-size: 16px;
          line-height: 20px;
        }
      }

      &__text {
        margin: 0;
        font-family: $golos-regular;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: -0.01em;
        color: $color-dark-grey;

        @include gt-sm {
          white-space: pre-wrap;
        }
      }
    }
  }
}
</style>

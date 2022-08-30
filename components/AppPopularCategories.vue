<template>
  <section class="layout popular-categories">
    <h1 class="popular-title">New way to show love</h1>
    <div class="popular-list">
      <nuxt-link v-for="item in popular" :key="item.hashTag" to="/flowers/roses/1" class="popular-list__item card">
        <div class="absolute-grow card__content">
          <img
            :key="item.hashTag"
            :src="item.img[getImg]"
            class="absolute-center card__image"
            :alt="item.hashTag"
          />
          <div v-if="item.timer" class="card__timer">
            <app-timer />
          </div>
        </div>

        <div class="card__figcaption">
          <span class="card__figcaption-text">{{ item.text }}</span>
          <span class="card__figcaption-hash">{{ item.hashTag }}</span>
        </div>
      </nuxt-link>
    </div>
  </section>
</template>

<script >
import dataPopularCategories from '@/data/popular-categories'
import AppTimer from '@/components/shared/AppTimer'

export default {
  components: {
    AppTimer
  },

  data() {
    return {
      popular: dataPopularCategories
    }
  },

  computed: {
    getImg() {
      return this.$device.isMobileOrTablet ? 'mobile' : 'desktop'
    }
  }
}
</script>

<style scoped lang="scss">
.popular-title {
  display: none;

  @include xs {
    display: block;
  }
}

.popular-list {
  display: grid;

  @include gt-sm {
    column-gap: $gap-ds;
    row-gap: $gap-mb;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 182px);
  }

  @include sm {
    grid-gap: $gap-mb;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 182px);
  }

  @include xs {
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 5px;
  }

  &__item {
    @include xs {
      grid-column: span 3;
    }

    .card__figcaption {
      @include xs {
        font-size: 12px;
        line-height: 16px;
        text-align: center;
        padding: 9px 0 4px 0;
      }
    }

    &:nth-child(1) {
      @include gt-sm {
        grid-column: 1 / span 2;
        grid-row: 1 / span 2;
        padding: 28px;
      }

      @include sm {
        grid-row: 1 / span 1;
        grid-column: 1 / span 2;
      }

      @include xs {
        padding: 0;
        border-radius: 0;
      }

      .card__figcaption {
        box-sizing: border-box;

        @include gt-xs {
          max-width: 252px;
          font-size: 38px;
          line-height: 40px;
          font-weight: 600;
        }
      }

      .card__image {
        @include sm {
          transform: translate(48px, -50%);
        }
      }
    }

    &:not(:nth-child(1), :nth-child(2)) {
      @include gt-xs {
        padding: 20px;
      }

      @include xs {
        padding: 0;
        grid-column: span 2;
      }
    }

    &:not(:nth-child(1)) {
      .card__figcaption {
        @include gt-xs {
          display: inline-block;
          font-size: 20px;
          line-height: 24px;
        }
      }

      .card__figcaption-text {
        @include gt-xs {
          display: none;
        }

        @include xs {
          display: block;
        }
      }

      .card__figcaption-hash {
        color: #2f2b20;

        @include gt-xs {
          display: block;
        }

        @include xs {
          display: none;
        }
      }
    }
  }
}

.card {
  @include gt-xs {
    width: 100%;
    height: 100%;
    position: relative;
    padding: $gap-mb;
    margin: 0;
    box-sizing: border-box;
  }

  @include xs {
    display: grid;
    grid-template-rows: 92px auto;
  }

  &__content {
    background: $bg-grey;
    overflow: hidden;

    @include gt-xs {
      margin: auto;
      border-radius: $border-radius-ds;
    }

    @include xs {
      position: relative;
      z-index: 1;
      margin: 0;
      border-radius: 12px;
    }
  }

  &__image {
    @include gt-xs {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: 1;
    }

    @include xs {
      width: 100%;
      height: 100%;
      object-fit: cover;
      margin: 0;
      top: 50%;
      left: 50%;
    }
  }

  &__figcaption {
    position: relative;
    z-index: 2;

    letter-spacing: -0.01em;
    color: $color-dark-grey;

    @include gt-xs {
      font-family: $Literata;
      font-weight: 600;
    }

    @include xs {
      font-family: $golos-regular;
    }
  }

  &__timer {
    position: absolute;
    z-index: 2;

    @include gt-xs {
      bottom: 20px;
      left: 20px;
    }

    @include xs {
      bottom: 10px;
      left: $gap-mb;
    }
  }
}
</style>

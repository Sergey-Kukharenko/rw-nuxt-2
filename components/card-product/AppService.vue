<template>
  <div class="service">
    <div class="service__list list">
      <div v-for="(item, idx) in service.list" :key="idx" class="list__item card">
        <div class="card__container">
          <img :src="item.img[getImg]" class="card__img" :alt="item.alt" />
        </div>
        <div class="card__title">
          {{ item.title }}
        </div>
      </div>
    </div>

    <div class="service__container container">
      <div class="container__text">
        Our florists redesign these limited-edition bouquets every four weeks, so they’re always changing. Oozing
        vintage charm, our florist's pick is filled with pretty pastel stems...
      </div>

      <div v-show="isShowMore" class="container__text">
        i'am hidden text ... <br />
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at
        its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
        opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing
        packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'
        will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </div>

      <a class="container__link" @click="toggle()">{{ toggleText }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppService',

  props: {
    service: {
      type: Object,
      default: () => {}
    }
  },

  data() {
    return {
      isShowMore: false,
      toggleText: 'Show more'
    };
  },

  computed: {
    getImg() {
      return this.$device.isMobileOrTablet ? 'mobile' : 'desktop';
    }
  },

  methods: {
    toggle() {
      this.isShowMore = !this.isShowMore;
      this.isShowMore ? (this.toggleText = 'Hide') : (this.toggleText = 'Show more');
    }
  }
};
</script>

<style lang="scss" scoped>
.service {
  &__container {
    margin: 26px 0;
  }
}

.container {
  @include lt-md {
    display: none;
  }

  &__text,
  &__link {
    font-family: $golos-regular;
    font-size: 16px;
    line-height: 24px;
  }

  &__text {
    &:not(:first-child) {
      margin-top: 10px;
    }
  }

  &__link {
    display: block;
    color: $color-green;
  }
}

.list {
  @include gt-sm {
    display: flex;
    margin: -4px;
  }

  &__item {
    background: #ffeec6;
    border-radius: 16px;

    @include gt-sm {
      flex: 1 1 33%;
      min-height: 164px;
      margin: 4px;
    }

    @include lt-md {
      margin: 4px 0;
    }

    &:nth-child(1) {
      .card__img {
        @include gt-sm {
          bottom: 0px;
          left: -112px;
        }

        @include lt-md {
          bottom: -28px;
          left: 10px;
        }
      }
    }

    &:nth-child(2) {
      .card__img {
        @include gt-sm {
          bottom: -2px;
          left: 12px;
        }

        @include lt-md {
          bottom: -14px;
          left: 21px;
        }
      }
    }

    &:nth-child(3) {
      .card__img {
        @include gt-sm {
          bottom: -82px;
          left: -108px;
        }

        @include lt-md {
          bottom: -26px;
          left: -8px;
        }
      }
    }
  }
}

.card {
  display: flex;
  overflow: hidden;

  @include gt-sm {
    flex-direction: column;
  }

  @include lt-md {
    position: relative;
  }

  &__container {
    position: relative;

    @include gt-sm {
      flex: 1;
    }

    @include lt-md {
      order: 1;
      width: 130px;
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
    }
  }

  &__img {
    display: block;
    position: absolute;
  }

  &__title {
    font-family: $golos-bold;
    font-size: 13px;
    line-height: 16px;
    color: $color-dark-grey;

    @include gt-sm {
      flex-shrink: 0;
      max-width: 130px;
      padding: 10px 16px 16px 16px;
    }

    @include lt-md {
      width: 170px;
      padding: 12px;
    }
  }
}
</style>

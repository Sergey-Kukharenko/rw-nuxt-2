<template>
  <div v-if="isFaqList" class="faq layout">
    <div class="faq-mobile-title">Answers to popular questions</div>
    <div class="faq__row">
      <div class="faq__col head-info">
        <div class="head-info__title">Answers to popular questions</div>

        <div class="head-info__text">Didn't find the answer to your question? Write to our care service</div>

        <a class="head-info__email" href="mailto:test@gmail.com">
          <svg-icon class="head-info__email-icon" name="mail" />
        </a>
      </div>
      <div class="faq__col content">
        <div
          v-for="(item, index) in faqList"
          :key="index"
          :class="{ active: isActiveItem(index) }"
          class="content__item item"
        >
          <div class="item__top" @click="toggleFaqItem(index)">
            <span class="item__top-text">
              {{ item.question }}
            </span>
            <svg-icon class="item__top-icon" name="arrow-down" />
          </div>
          <div class="item__bottom">
            {{ item.answer }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'AppFaq',

  data() {
    return {
      activeElementsIndex: []
    };
  },

  computed: {
    ...mapGetters({ faqList: 'index-page/getFaq' }),

    isFaqList() {
      return this.faqList.length;
    }
  },

  methods: {
    isActiveItem(index) {
      return this.activeElementsIndex.includes(index);
    },
    toggleFaqItem(index) {
      if (this.isActiveItem(index)) {
        this.activeElementsIndex = this.activeElementsIndex.filter((activeIndex) => activeIndex !== index);
      } else {
        this.activeElementsIndex.push(index);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.faq {
  @include gt-sm {
    padding-top: 52px;
    padding-bottom: 30px;

    &-mobile-title {
      display: none;
    }
  }

  @include lt-md {
    &-mobile-title {
      font-family: $golos-bold;
      font-weight: 600;
      font-size: 20px;
      line-height: 24px;
      letter-spacing: 0.03px;
      color: $color-dark-grey;
      margin-bottom: 12px;
    }
  }

  &__row {
    display: flex;

    @include lt-md {
      flex-direction: column-reverse;
    }
  }

  &__col {
    flex: 1;

    .head-info {
      &__title {
        font-style: normal;

        @include gt-sm {
          max-width: 149px;
          font-family: $Literata;
          font-weight: 700;
          font-size: 28px;
          line-height: 32px;
          color: #000000;
          margin-bottom: 40px;
        }

        @include lt-md {
          display: none;
        }
      }

      &__text {
        font-family: $golos-regular;
        font-style: normal;
        font-weight: 400;
        color: $color-dark-grey;

        @include gt-sm {
          font-size: 16px;
          line-height: 24px;
          max-width: 252px;
          margin-bottom: 32px;
        }

        @include lt-md {
          font-size: 14px;
          line-height: 20px;
          letter-spacing: -0.01em;
          margin-bottom: 16px;

          max-width: 252px;
        }
      }

      &__email {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        background: #f7f7f7;
        border-radius: 16px;

        &-icon {
          width: 18px;
          height: 18px;
        }
      }
    }

    &.content {
      display: flex;
      flex-direction: column;

      @include gt-sm {
        max-width: 620px;
      }

      .item {
        @include gt-sm {
          margin-top: 16px;
          padding-bottom: 24px;

          &:first-child {
            margin-top: 0;
          }
        }

        &.active {
          .item__top-icon {
            opacity: 1;
            transform: rotate(-180deg);
          }

          .item__bottom {
            display: block;
          }
        }

        @include lt-md {
          margin-top: 16px;
          padding-bottom: 16px;
          border-bottom: 1px solid #dde0e6;

          &:first-child {
            margin-top: 0;
          }

          &:last-child {
            border-bottom: none;
          }
        }

        &__top {
          display: flex;
          justify-content: space-between;
          cursor: pointer;
          flex: 1;

          &-text {
            font-family: $golos-bold;
            font-style: normal;
            font-weight: 600;
            color: $color-dark-grey;
            flex: 1;

            @include gt-sm {
              font-size: 24px;
              line-height: 28px;
              letter-spacing: 0.01em;
            }

            @include lt-md {
              font-size: 14px;
              line-height: 20px;
            }
          }

          &-icon {
            opacity: 0.3;
            transition: transform 0.25s ease-in;

            @include gt-sm {
              width: 24px;
              height: 24px;
            }

            @include lt-md {
              width: 16px;
              height: 16px;
            }
          }
        }

        &__bottom {
          display: none;
          font-family: $golos-regular;
          font-style: normal;
          font-weight: 400;
          color: $color-dark-grey;
          white-space: pre-line;

          @include gt-sm {
            font-size: 16px;
            line-height: 24px;
          }

          @include lt-md {
            font-size: 11px;
            line-height: 16px;
            letter-spacing: -0.01em;
          }
        }
      }
    }
  }
}
</style>

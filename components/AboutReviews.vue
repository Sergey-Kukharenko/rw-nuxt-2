<template>
  <div class="reviews layout">
    <h3 class="reviews__title">Reviews</h3>
    <div class="reviews__top top">
      <p class="top__text">
        Our dear customers are the key to the success of the company.<br />
        And we do everything to make it convenient and profitable <br />to order flowers from us.
      </p>
      <div class="top__review-panel">
        <div class="review-panel">
          <div class="review-panel__score score">
            <div class="score__social">
              <img src="/icons/google.png" class="score__icon" alt="/icons/google.png" />
            </div>
            <div class="score__avarage">4,6</div>
            <div class="score__reviews">
              <div class="score__reviews-stars">
                <stars-rating :model-value="4.6" star-size="13" spacing="0.68" inactive-color="#ffffff" disable-click />
              </div>
              <div class="score__reviews-count">47 reviews</div>
            </div>
          </div>
          <div class="review-panel__info">
            All reviews are from <br />
            the real customers!
          </div>
        </div>
      </div>
    </div>
    <div class="reviews__cards">
      <review-card
        v-for="(card, index) in $options.REVIEWS"
        :key="index"
        :images="card.images"
        :full-name="card.fullName"
        :rating-count="card.ratingCount"
        :text="card.text"
      />
    </div>
  </div>
</template>

<script>
import StarsRating from '@/components/shared/stars-rating/StarsRating';

import { REVIEWS } from '~/data/about';

export default {
  name: 'AboutReviews',

  components: {
    StarsRating
  },

  REVIEWS
};
</script>

<style lang="scss" scoped>
.reviews {
  @include gt-sm {
    width: 1080px;
  }

  &__title {
    font-family: $Literata;
    font-style: normal;
    font-weight: 700;
    color: $color-dark-grey;

    @include gt-sm {
      margin: 0 0 26px 0;
      font-size: 50px;
      line-height: 50px;
    }

    @include lt-md {
      margin: 0 0 16px 0;
      font-size: 21px;
      line-height: 31px;
    }
  }

  .top {
    display: flex;
    align-items: center;

    & > div {
      flex: 1;
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

      @include lt-md {
        display: none;
      }
    }

    &__review-panel {
      display: flex;

      @include gt-sm {
        justify-content: flex-end;
      }

      @include lt-md {
        width: 100%;
      }

      .review-panel {
        display: flex;

        background-color: #f7f7f7;
        border-radius: 8px;
        box-sizing: border-box;

        @include gt-sm {
          width: 403px;
          height: 64px;
          padding: 12px 32px;
        }

        @include lt-md {
          flex: 1;
          height: 60px;
          padding: 14px;
        }

        .score {
          display: flex;
          width: 56%;

          @include gt-sm {
            gap: 12px;
          }

          @include lt-md {
            gap: 8px;
          }

          &__icon {
            @include gt-sm {
              width: 36px;
              height: 36px;
            }

            @include lt-md {
              width: 30px;
              height: 30px;
            }
          }

          &__avarage {
            font-family: $Literata;
            font-style: normal;
            font-weight: 700;
            color: $color-dark-grey;

            @include gt-sm {
              font-size: 28px;
              line-height: 32px;
            }

            @include lt-md {
              font-size: 20px;
              line-height: 24px;
              letter-spacing: -0.01em;
            }
          }

          &__reviews {
            display: flex;
            flex-direction: column;
            gap: 2.55px;

            &-count {
              font-family: $golos-regular;
              font-style: normal;
              font-weight: 400;
              letter-spacing: -0.01em;
              color: $color-dark-grey;

              @include gt-sm {
                font-size: 14px;
                line-height: 20px;
              }

              @include lt-md {
                font-size: 11px;
                line-height: 16px;
              }
            }
          }
        }

        &__info {
          border-left: 1px solid #7c7c7c;
          font-family: $golos-regular;
          font-style: normal;
          font-weight: 400;
          letter-spacing: -0.01em;
          color: #7c7c7c;

          @include gt-sm {
            padding-left: 16px;
            font-size: 14px;
            line-height: 20px;
          }

          @include lt-md {
            padding-left: 8px;
            font-size: 11px;
            line-height: 16px;
          }
        }
      }
    }
  }

  &__cards {
    display: flex;

    @include gt-sm {
      padding-top: 48px;
      gap: 24px;
    }

    @include lt-md {
      padding-top: 24px;
      flex-wrap: wrap;
      gap: 8px;
    }
  }
}
</style>

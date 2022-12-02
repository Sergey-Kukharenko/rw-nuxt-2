<template>
  <section class="layout reviews">
    <div class="reviews__row">
      <div class="reviews__col review-service">
        <div class="review-service__top">
          <div class="review-service__top-social">
            <img
              :src="`/icons/${currReviewDetails.social.name}.png`"
              class="review-service__top-icon"
              :alt="`/icons/${currReviewDetails.social.name}.png`"
            />
          </div>
          <div class="review-service__top-rating">{{ currReviewDetails.social.rating_count }}</div>
          <div class="review-service__top-garanty">{{ currReviewDetails.social.text }}</div>
        </div>
        <div class="review-service__bottom">
          <stars-rating
            :model-value="currReviewDetails.social.rating_count"
            star-size="38.04"
            spacing="5.96"
            inactive-color="#ffffff"
            disable-click
          />
        </div>
      </div>
      <div class="reviews__col review-content">
        <div class="review-content__nav">
          <div class="arrows">
            <div class="arrows__btn left" :class="{ active: hasPrev }" @click="prevReview">
              <svg-icon class="arrows__btn-icon" name="arrow-right" />
            </div>
            <div class="arrows__btn right" :class="{ active: hasNext }" @click="nextReview">
              <svg-icon class="arrows__btn-icon" name="arrow-right" />
            </div>
          </div>
        </div>
        <div class="review-content__body">
          <div class="review-content__body-col review-avatar">
            <figure class="review-avatar__figure">
              <img :src="currReviewDetails.avatar" class="review-avatar__image" :alt="currReviewDetails.avatar" />
            </figure>
          </div>
          <div class="review-content__body-col review-info">
            <div class="review-info__name">{{ currReviewDetails.user_name }}</div>
            <div class="review-info__rating">
              <client-only>
                <stars-rating
                  :model-value="currReviewDetails.rating_count"
                  star-size="15.22"
                  :spacing="starSpacing"
                  inactive-color="#ffffff"
                  disable-click
                />
              </client-only>
            </div>
            <div class="review-info__text">
              {{ reviewText }}
              <a href="#" class="link" @click.prevent="toggleReviewText">{{ reviewContentToggleText }}</a>
            </div>
          </div>
        </div>

        <div class="review-content__text">
          {{ reviewText }} <a href="#" class="link" @click.prevent="toggleReviewText">{{ reviewContentToggleText }}</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import StarsRating from '@/components/shared/stars-rating/StarsRating';

import dataReviews from '@/data/reviews';

export default {
  name: 'AppReviews',

  components: {
    StarsRating,
  },

  data() {
    return {
      currReview: 0,
      starSpacing: '',
      reviewList: dataReviews,
    };
  },

  computed: {
    currReviewDetails() {
      return this.reviewList[this.currReview];
    },

    reviewText() {
      return this.currReviewDetails.isTextHidden
        ? this.currReviewDetails.text.substring(0, 100) + '...'
        : this.currReviewDetails.text;
    },

    reviewContentToggleText() {
      return this.currReviewDetails.isTextHidden ? 'still' : 'hide';
    },

    hasNext() {
      return this.currReview < this.reviewList.length - 1;
    },

    hasPrev() {
      return this.currReview > 0;
    },
  },

  mounted() {
    this.setStarSpacing();
  },

  methods: {
    toggleReviewText() {
      this.reviewList[this.currReview].isTextHidden = !this.reviewList[this.currReview].isTextHidden;
    },

    nextReview() {
      this.currReview++;
    },

    prevReview() {
      this.currReview--;
    },

    setStarSpacing() {
      if (window.innerWidth > 1280) {
        this.starSpacing = '2.78';
        return;
      }

      this.starSpacing = '0.68';
    },
  },
};
</script>

<style lang="scss" scoped>
.reviews {
  @include gt-sm {
    padding-top: 32px;
  }

  &__row {
    display: flex;
    background-color: #f7f7f7;
    box-sizing: border-box;

    @include gt-sm {
      gap: 69px;
      border-radius: 24px;
      padding: 24px 91px 24px 32px;
    }

    @include lt-md {
      flex-direction: column;
      border-radius: 8px;
      padding: 16px 0;
    }

    .review-service {
      @include gt-sm {
        width: 300px;
      }

      @include lt-md {
        padding: 16px 16px 21px 16px;
      }

      &__top {
        display: flex;
        align-items: center;
        box-sizing: border-box;

        @include gt-sm {
          height: 40px;
        }

        @include lt-md {
          height: 32px;
          padding-bottom: 21px;
        }

        &-social {
          display: flex;
          align-items: center;
          height: 100%;

          @include gt-sm {
            padding-right: 16px;
          }

          @include lt-md {
            padding-right: 8px;
          }
        }

        &-icon {
          @include gt-sm {
            width: 35px;
            height: 35px;
          }

          @include lt-md {
            width: 32px;
            height: 32px;
          }
        }

        &-rating {
          display: flex;
          align-items: center;
          height: 100%;

          font-family: $Literata;
          font-style: normal;
          font-weight: 700;
          font-size: 40px;
          color: #000000;

          @include gt-sm {
            font-size: 40px;
            line-height: 40px;
            padding-right: 12px;
          }

          @include lt-md {
            font-size: 28px;
            line-height: 32px;
            padding-right: 16px;
          }
        }

        &-garanty {
          display: flex;
          align-items: center;
          font-family: $golos-regular;
          font-style: normal;
          font-weight: 400;
          line-height: 16px;
          color: #7e8895;

          border-left: 1px solid #dde0e6;

          @include gt-sm {
            height: 40px;
            font-size: 11px;
            letter-spacing: -0.01em;
            padding-left: 12px;
          }

          @include lt-md {
            height: 32px;
            font-size: 12px;
            letter-spacing: 0.01em;
            padding-left: 16px;
          }
        }
      }

      &__bottom {
        @include gt-sm {
          padding-top: 16.83px;
        }

        @include lt-md {
          display: none;
        }
      }
    }
    .review-content {
      position: relative;

      @include gt-sm {
        flex: 1;
      }

      @include lt-md {
        padding: 14px 16px 0 14px;
        border-top: 1px solid #dde0e6;
      }

      &__nav {
        display: flex;
        justify-content: flex-end;
        position: absolute;
        z-index: 2;

        @include gt-sm {
          right: 0;
        }

        @include lt-md {
          right: 16px;
        }

        .arrows {
          display: flex;
          justify-content: space-between;
          user-select: none;

          @include gt-sm {
            width: 85px;
          }

          @include lt-md {
            width: 68px;
          }

          .arrows__btn {
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            pointer-events: none;

            @include gt-sm {
              cursor: pointer;
              width: 40px;
              height: 40px;
            }

            @include lt-md {
              width: 32px;
              height: 32px;
            }

            &.left {
              transform: rotate(180deg);
            }

            &.active {
              pointer-events: all;
              background-color: #ffffff;

              &-icon {
                opacity: 1;
              }
            }

            &-icon {
              opacity: 0.5;

              @include gt-sm {
                width: 13.33px;
                height: 12.96px;
              }

              @include lt-md {
                width: 10.67px;
                height: 10.37px;
              }
            }
          }
        }
      }

      &__body {
        display: flex;

        @include gt-sm {
          gap: 20px;
        }

        @include lt-md {
          gap: 8px;
        }

        .review-avatar {
          @include gt-sm {
            width: 96px;
          }

          @include lt-md {
            width: 40px;
          }

          &__image {
            border-radius: 50%;

            @include gt-sm {
              width: 96px;
              height: 96px;
            }

            @include lt-md {
              width: 40px;
              height: 40px;
            }
          }
        }

        .review-info {
          display: flex;
          flex-direction: column;

          @include gt-sm {
            gap: 9.33px;
          }

          @include lt-md {
            gap: 4.29px;
          }

          &__name {
            font-family: $Literata;
            font-style: normal;
            font-weight: 700;
            letter-spacing: -0.01em;
            color: #000000;

            @include gt-sm {
              font-size: 18px;
              line-height: 22px;
            }

            @include lt-md {
              font-size: 14px;
              line-height: 20px;
            }
          }

          &__text {
            @include gt-sm {
              font-family: $golos-regular;
              font-style: normal;
              font-weight: 400;
              font-size: 14px;
              line-height: 20px;
              color: $color-dark-grey;
              letter-spacing: -0.01em;
            }

            @include lt-md {
              display: none;
            }
          }
        }
      }

      &__text {
        @include gt-sm {
          display: none;
        }

        @include lt-md {
          padding-top: 10px;
          font-family: $golos-regular;
          font-style: normal;
          font-weight: 400;
          font-size: 12px;
          line-height: 20px;
          letter-spacing: 0.01em;
          color: $color-white-grey;
        }
      }

      .link {
        color: $color-dark-green;
      }
    }
  }
}
</style>

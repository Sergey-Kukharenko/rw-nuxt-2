<template>
  <div class="rating">
    <div class="rating__text">Overall rating</div>
    <div class="rating__group group">
      <div class="group__number">
        {{ rating.count }}
      </div>
      <div class="group__separator"></div>
      <div class="group__text">
        {{ rating.text }}
      </div>
    </div>


    <stars-rating
      :model-value="rating.count"
      star-size="38.03"
      spacing="2"
    />

    <!--    <app-rating-list :rating="rating" class="rating__list" />-->
    <!--    <app-button theme="grey-whitely" stretch="full">-->
    <!--      Leave feedback-->
    <!--    </app-button>-->
  </div>
</template>

<script>
// import AppStarsRating from '@/components/ui/AppStarsRating'
import StarsRating from '@/components/shared/stars-rating/StarsRating'

export default {
  name: 'AppRating',

  components: {
    // AppStarsRating,
    StarsRating
  },

  props: {
    rating: {
      type: Object,
      default: () => {}
    }
  }

}
</script>

<style lang="scss" scoped>
.rating {
  @include lt-md {
    padding-bottom: 24px;
    margin-bottom: 16px;
    border-bottom: 1px solid #eaeaea;
  }

  &__text {
    @include gt-sm {
      font-family: $golos-bold;
      font-size: 16px;
      line-height: 20px;
      color: #000;
    }

    @include lt-md {
      display: none;
    }
  }

  &__group {
    margin: 36px 0 12px;
  }

  &__list {
    margin: 40px 0;
  }
}

.group {
  display: flex;
  align-items: center;

  &__number {
    font-family: $Literata;
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 40px;
    color: #000000;
  }

  &__separator {
    width: 1px;
    height: 40px;
    background: #dde0e6;

    @include gt-sm {
      margin: 0 17px;
    }

    @include lt-md {
      margin: 0 14px;
    }
  }

  &__text {
    font-family: $golos-regular;
    color: #7e8895;
    letter-spacing: -0.01em;

    @include gt-sm {
      max-width: 164px;
      font-size: 14px;
      line-height: 20px;
    }

    @include lt-md {
      max-width: 150px;
      font-size: 12px;
      line-height: 16px;
    }
  }
}
</style>

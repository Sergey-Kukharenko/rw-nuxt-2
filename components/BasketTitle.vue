<template>
  <div class="title">
    <div class="title__label">Basket</div>
    <div class="title__rating">
      <div class="title__stars">
        <svg-icon
          v-for="(_, index) in 5"
          :key="index"
          name="star"
          class="title__icon-star"
        />
      </div>
      <div class="title__star">
        <img
          src="~/assets/sprite/svg/star.svg"
          width="16"
          height="16"
          alt="star"
        />
        <div class="title__star-rating">{{ rating }}</div>
      </div>
      <div class="title__reviews">{{reviews.toLocaleString('ru')}} reviews</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "BasketTitle",
    data () {
      return {
        reviews: 13074,
        rating: 4.9
      };
    }
  };
</script>

<style lang="scss" scoped>
.title {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 56px;

  &__label {
    font-family: $Literata;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;

    @include lt-lg {
      font-size: 20px;
      line-height: 24px;
    }
  }

  &__rating {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 12px;

    @include lt-lg {
      gap: 8px;
    }
  }

  &__reviews {
    font-family: $golos-regular;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    color: #7C7C7C;
    letter-spacing: -0.01em;

    @include lt-lg {
      font-size: 12px;
      line-height: 21px;
    }
  }

  &__stars {
    display: flex;
    flex-direction: row;

    @include lt-lg {
      display: none;
    }
  }

  &__star {
    display: flex;
    flex-direction: row;
    gap: 2px;

    & > img {
      margin-top: 1px;
    }

    @include gt-md {
      display: none;
    }
  }

  &__star-rating {
    font-family: $golos-bold;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
  }

  &__icon-star {
    width: 20px;
    height: 20px;
  }
}
</style>

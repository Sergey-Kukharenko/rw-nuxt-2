<template>
  <div class="item">
    <div
      class="item__img"
      :style="imgStyle"
    />
    <div class="item__title">{{ title }}</div>
    <div class="item__footer">
      <div class="item__price">£ {{ price }}</div>
      <basket-button
        theme="grey"
        size="x-small"
        class="item__button-desktop"
      >
        Add
      </basket-button>
      <basket-button
        theme="grey"
        size="x-small"
        :stretch="true"
        class="item__button-mobile"
      >
        +
      </basket-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "BasketSomethingItem",
  props: {
    img: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    price: {
      type: Number,
      default: 0
    }
  },
  computed: {
    imgStyle () {
      return {
        backgroundImage: `url(${this.img})`
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex-shrink: 0;
  width: 160px;

  @include lt-lg {
    width: 91px;
    gap: 8px;
  }

  &__img {
    width: 160px;
    height: 160px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border-radius: 12px;

    @include lt-lg {
      width: 91px;
      height: 91px;
    }
  }

  &__title {
    font-family: $golos-regular;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.01em;
    color: #1F2226;


    @include lt-lg {
      font-family: $golos-medium;
      font-size: 12px;
      line-height: 16px;
      letter-spacing: 0;
    }
  }

  &__footer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    color: #1F2226;

    @include lt-lg {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  &__price {
    font-family: $golos-bold;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #000000;

    @include lt-lg {
      font-family: $golos-regular;
      font-weight: 600;
      font-size: 12px;
      line-height: 20px;
      margin-top: -6px;
    }
  }

  &__button-desktop {
    @include lt-lg {
      display: none;
    }
  }

  &__button-mobile {
    margin-top: 12px;
    display: none;

    font-family: $golos-regular;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 16px;
    color: #1F2226;

    @include lt-lg {
      display: flex;
      justify-content: center;
    }
  }
}
</style>

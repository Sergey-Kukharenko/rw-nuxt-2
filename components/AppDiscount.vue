<template>
  <section class="layout discount">
    <div class="discount__panel">
      <div class="discount__panel-col info">
        <div class="info__title">Get 7% discount!</div>
        <div class="info__text">
          Subscribe to our news and promotions!<br />
          And get a promo code for 7% discount
        </div>
      </div>
      <div class="discount__panel-col form">
        <input v-model="email" class="form__input" placeholder="Your Email" />
        <button class="form__button">Subscribe</button>
      </div>
    </div>
    <div class="blur"></div>
  </section>
</template>

<script>
export default {
  name: 'AppDiscount',

  data() {
    return {
      email: ''
    };
  }
};
</script>

<style lang="scss" scoped>
.discount {
  position: relative;

  @include lt-md {
    display: none;
  }

  @include gt-sm {
    &__panel {
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      z-index: 2;
      padding: 24px 42px 24px 32px;
      background: #fffce0 url('~/assets/sprite/svg/gift-bg.svg') no-repeat 297px 8px;
      box-shadow: 0 6px 16px rgba(51, 51, 50, 0.08);
      border-radius: 24px;

      .info {
        display: flex;
        flex-direction: column;
        gap: 8px;
        width: 296px;

        &__title {
          font-family: $golos-bold;

          font-style: normal;
          font-weight: 600;
          font-size: 24px;
          line-height: 28px;
          letter-spacing: 0.01em;
          color: #000000;
        }

        &__text {
          font-family: $golos-regular;
          font-style: normal;
          font-weight: 400;
          font-size: 12px;
          line-height: 16px;
          letter-spacing: 0.01em;
          color: #000000;
        }
      }

      .form {
        display: flex;
        align-items: center;
        gap: 8px;

        &__input {
          border: none;
          outline: none;
          box-sizing: border-box;
          background: #fff;
          color: $color-dark-grey;
          border-radius: 10px;
          width: 100%;
          font-family: $golos-regular;
          font-style: normal;
          font-size: 14px;
          line-height: 20px;
          padding: 0 16px;

          &::placeholder {
            font-family: $golos-regular;
            font-style: normal;
            font-size: 14px;
            line-height: 20px;
            color: $color-white-grey;
          }

          height: 52px;
          min-width: 350px;
        }

        &__button {
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: $golos-regular;
          font-weight: 500;
          line-height: 24px;
          color: #ffffff;
          border-radius: 12px;
          padding: 0 12px;
          transition: background-color 0.2s ease 0s;

          min-height: 52px;
          width: 184px;
          color: #000000;
          background: #ffcd1e;
          font-size: 15px;

          &:hover:not(:disabled) {
            background: #ffcd1e;
            box-shadow: 2px 4px 7px darken(#ffcd1e, 10%);
            cursor: pointer;
          }

          &:active:not(:disabled) {
            box-shadow: 0 0 0 $bg-grey;
          }

          &:disabled {
            background: #ccc;
            cursor: none;
          }
        }
      }
    }
  }

  .blur {
    position: absolute;
    z-index: 1;
    width: 922px;
    height: 116px;
    left: 79px;
    top: 35px;

    background: #ffcd1e;
    opacity: 0.3;
    filter: blur(62px);
    border-radius: 24px;
  }
}
</style>

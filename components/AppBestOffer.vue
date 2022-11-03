<template>
  <section class="layout best-offer">
    <div class="space"></div>
    <div class="best-offer__panel">
      <div class="best-offer__panel-col info">
        <div class="info__text">
          The best <a href="#" class="link">offer</a> of <a href="#" class="link">MyFlowers</a><br />
          is in your mail
        </div>
      </div>
      <div class="best-offer__panel-col form">
        <input v-model="email" class="form__input" placeholder="Your Email" />
        <button class="form__button">Apply</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AppBestOffer',

  data() {
    return {
      email: '',
    };
  },
};
</script>

<style lang="scss" scoped>
.best-offer {
  @include gt-sm {
    display: none;
  }

  @include lt-md {
    position: relative;
    background-color: #fafafa;

    &__panel {
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding-bottom: 20px;

      .info {
        display: flex;
        flex-direction: column;
        gap: 8px;
        width: 296px;

        &__text {
          font-family: $golos-bold;
          font-size: 16px;
          margin-top: 62px;
          line-height: 20px;
          color: $color-dark-grey;

          .link {
            color: $color-green;
          }
        }
      }

      .form {
        display: flex;
        align-items: center;
        gap: 8px;

        background-color: #ffffff;
        box-sizing: border-box;
        padding: 8px;
        border-radius: 12px;

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

          height: 36px;
          min-width: 50px;
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

          width: 102px;
          height: 36px;
          background: $color-green;
          font-size: 14px;

          &:disabled {
            background: #ccc;
            cursor: none;
          }
        }
      }
    }

    .space {
      position: absolute;
      width: 100%;
      top: 0;
      left: 0;
      height: 38px;
      z-index: 2;
      border-radius: 0 0 24px 24px;
      background-color: #ffffff;
    }
  }
}
</style>

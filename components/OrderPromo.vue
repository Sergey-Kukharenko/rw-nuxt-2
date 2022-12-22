<template>
  <div class="order-promo">
    <div class="order-promo__row">
      <div class="order-promo__column content">
        <div class="content__title">
          Convenient order tracking<br />
          and more bonuses in the app<br />
          MyFlowers
        </div>
        <div class="content__title--mobile">Install the MyFlowers app</div>
        <div class="content__list--mobile list">
          <div class="list__item"><svg-icon name="check-green" class="list__item-icon" /> track your order online</div>
          <div class="list__item">
            <svg-icon name="check-green" class="list__item-icon" /> get discounts and bonuses
          </div>
        </div>
        <div class="content__stores">
          <app-store-button store-type="appstore" is-dark />
          <app-store-button store-type="googleplay" is-dark />
        </div>
        <div class="content__stores--mobile stores">
          <div class="stores__item">
            <svg-icon name="apple-white" class="stores__item-icon apple" />
          </div>
          <div class="stores__item">
            <svg-icon name="googleplay-logo" class="stores__item-icon google" />
          </div>
        </div>
        <div class="content__button">
          <app-button theme="rounded" stretch="full">Install</app-button>
        </div>
      </div>
      <div class="order-promo__column qr">
        <img src="/images/order/qr-download-app.png" class="qr__image" alt="qr" />
        <div class="qr__text">Point your camera at the QR code to download</div>
      </div>
    </div>
    <div class="round--mobile"></div>
  </div>
</template>

<script>
import AppButton from '~/components/shared/AppButton';
import AppStoreButton from '~/components/shared/AppStoreButton';

export default {
  name: 'OrderPromo',

  components: {
    AppButton,
    AppStoreButton
  }
};
</script>

<style lang="scss" scoped>
.order-promo {
  background: #ebfaf0 url('/images/order/bg.png') no-repeat 80%;
  border-radius: 24px;
  padding: 24px 24px 32px 24px;

  @include lt-md {
    background: #ffffff;
    position: relative;
    overflow: hidden;
  }

  &__row {
    display: flex;
    justify-content: space-between;

    @include lt-md {
      position: relative;
      z-index: 2;
    }
  }

  .content {
    &__title {
      @include lt-md {
        display: none;
      }

      font-family: $golos-medium;
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 28px;
      letter-spacing: 0.01em;
      color: $color-dark-grey;
      width: 492px;

      &--mobile {
        @include gt-sm {
          display: none;
        }

        font-family: $golos-medium;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        color: $color-dark-grey;

        margin-bottom: 8px;
      }
    }

    .list {
      @include gt-sm {
        display: none;
      }

      display: flex;
      flex-direction: column;
      gap: 8px;

      &__item {
        display: flex;
        align-items: center;
        gap: 4px;

        &-icon {
          width: 16px;
          height: 16px;
        }

        font-family: $golos-regular;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: -0.01em;
        color: $color-dark-grey;
      }
    }

    &__stores {
      @include lt-md {
        display: none;
      }

      display: flex;
      gap: 8px;
      margin-top: 24px;
    }

    .stores {
      @include gt-sm {
        display: none;
      }

      display: flex;
      gap: 8px;
      margin-top: 16px;

      &__item {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30px;
        height: 30px;
        background: #1f2226;
        border-radius: 6px;
        user-select: none;

        &-icon {
          &.apple {
            width: 16px;
            height: 19px;
          }

          &.google {
            width: 16px;
            height: 18px;
          }
        }
      }
    }

    &__button {
      @include gt-sm {
        display: none;
      }

      margin-top: 8px;
      max-width: 144px;
    }
  }

  .qr {
    @include lt-md {
      display: none;
    }

    max-width: 94px;
    font-family: $golos-regular;
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 16px;
    letter-spacing: -0.01em;
    color: $color-dark-grey;
  }

  .round--mobile {
    @include gt-sm {
      display: none;
    }

    background: #ebfaf0 url('/images/order/bg.png') no-repeat 40%;
    border-radius: 50%;
    width: 315px;
    height: 315px;
    top: -25px;
    position: absolute;
    right: -30%;
  }
}
</style>

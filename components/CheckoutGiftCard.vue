<template>
  <checkout-pane>
    <template #title>
      <div>Included gift card</div>
      <div class="gift__title-tag">Free</div>
    </template>
    <template #default>
      <div class="gift">
        <div class="gift__cover">
          <svg-icon class="gift__post-desktop" name="post-card-green" />
          <div>Choose cover</div>
        </div>
        <div class="gift__cover-mobile">
          <div class="gift__cover-mobile-row">
            <svg-icon class="gift__post-mobile" name="post-card-green" />
            <div>Choose cover</div>
          </div>
          <svg-icon class="gift__icon-chevron-right" name="chevron-right" />
        </div>
        <div style="flex-grow: 1">
          <div class="gift__from-to">
            <div style="flex-grow: 1">
              <app-input size="x-large" value="" placeholder="Card to:" />
            </div>
            <div style="flex-grow: 1">
              <app-input size="x-large" value="" placeholder="From:" />
            </div>
          </div>
          <div class="gift__comment">
            <textarea class="gift__dashed" placeholder="Commentary for courier" />
          </div>
        </div>
      </div>
    </template>
  </checkout-pane>
</template>

<script>
import AppInput from '~/components/shared/AppInput';

export default {
  name: 'CheckoutGiftCard',
  components: { AppInput },
};
</script>

<style lang="scss" scoped>
.gift {
  display: flex;
  flex-direction: row;
  gap: 12px;

  @include gt-md {
    margin-top: 24px;
  }

  @include lt-lg {
    flex-direction: column;
    margin-top: 12px;
  }

  &__title-tag {
    font-family: $golos-regular;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.01em;
    color: #ffffff;
    padding: 4px 8px;
    background-color: #26ad4f;
    border-radius: 8px;
    margin-left: 7px;
  }

  &__cover {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 9px;
    background-color: $bg-green;
    border-radius: 12px;
    width: 160px;

    font-family: $golos-medium;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    letter-spacing: -0.01em;
    color: #009959;

    @include lt-lg {
      display: none;
    }
  }

  &__cover-mobile {
    display: none;

    @include lt-lg {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      background: #eafbeb;
      border-radius: 10px;
      height: 48px;
      padding: 0 16px;

      font-family: $golos-regular;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.01em;
      color: #009959;
    }
  }

  &__cover-mobile-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
  }

  &__from-to {
    display: flex;
    flex-direction: column;
    gap: 8px;

    @include lt-lg {
      flex-direction: row;
      align-items: center;
      gap: 12px;
    }
  }

  &__comment {
    display: flex;
  }

  &__dashed {
    border-radius: 12px;
    margin-top: 8px;
    flex: 1;
    font-family: $golos-regular;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.01em;
    color: #7c7c7c;
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='12' ry='12' stroke='%23EAEAEA' stroke-width='4' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
    border: none;
    outline: none;
    resize: none;

    @include gt-md {
      height: 124px;
      padding: 16px 14px;
    }

    @include lt-lg {
      height: 72px;
      padding: 14px 16px;
      margin-top: 12px;
    }
  }

  &__post-desktop {
    width: 76px;
    height: 73px;
  }

  &__post-mobile {
    width: 24px;
    height: 23px;
  }

  &__icon-chevron-right {
    width: 16px;
    height: 16px;
  }
}
</style>

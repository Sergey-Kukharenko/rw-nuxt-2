<template>
  <div class="order-footer">
    <div class="order-footer__container layout">
      <div class="order-footer__stores">
        <app-store-button store-type="appstore" />
        <app-store-button store-type="googleplay" />
      </div>
      <div class="order-footer__copyright">© 2022 MyFlowers.ru - delivery of flowers and gifts in London</div>
    </div>
  </div>
</template>

<script>
import AppStoreButton from '~/components/shared/AppStoreButton';

export default {
  name: 'OrderFooter',

  components: {
    AppStoreButton
  }
};
</script>

<style lang="scss" scoped>
.order-footer {
  @include lt-md {
    display: none;
  }

  display: flex;
  align-items: center;
  height: 72px;
  border-top: 1px solid #eaeaea;

  &__container {
    display: flex;
    align-items: center;
    gap: 123px;
    padding-top: 0;
    padding-bottom: 0;
  }

  &__stores {
    display: flex;
    align-items: center;
    gap: 8px;
    max-width: 228px;
  }

  &__copyright {
    font-family: $golos-regular;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.01em;
    color: #7c7c7c;
  }
}
</style>

<template>
  <div class="order">
    <div class="order-list">
      <div class="order-list__item" style="background: linear-gradient(to right, #12c2e9, #c471ed, #f64f59)" />
      <div class="order-list__item" style="background: linear-gradient(to right, #c6ffdd, #fbd786, #f7797d)" />
    </div>
    <div class="order-content">
      <div class="order-content__title">Your order</div>
      <div class="order-content__details">Total £86 • Free delivery</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHeaderCheckoutOrder'
};
</script>

<style scoped lang="scss">
.order {
  display: flex;
}

.order-list {
  flex-shrink: 0;
  display: flex;

  &__item {
    width: 44px;
    height: 44px;
    position: relative;
    z-index: 2;
    background: #ccc;
    border-radius: 50%;

    &:not(:first-child) {
      margin-left: -22px;
      z-index: 1;
    }
  }
}

.order-content {
  color: #1f2226;
  margin-left: 16px;

  &__title {
    font-family: $golos-bold;
    font-size: 16px;
    line-height: 20px;
  }

  &__details {
    font-family: $golos-regular;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.01em;
  }
}
</style>

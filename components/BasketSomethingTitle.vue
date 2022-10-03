<template>
  <div class="title">Add a little something to your order</div>
</template>

<script>
export default {
  name: "BasketSomethingTitle"
};
</script>

<style lang="scss" scoped>
.title {
  font-family: $golos-bold;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.03px;
  color: #1F2226;

  @include lt-lg {
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0;
  }
}
</style>

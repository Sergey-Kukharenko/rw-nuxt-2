<template>
  <div class="title">Why people choose us</div>
</template>

<script>
export default {
  name: 'BasketPeopleTitle'
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
  color: #1f2226;

  @include lt-lg {
    display: none;
  }
}
</style>

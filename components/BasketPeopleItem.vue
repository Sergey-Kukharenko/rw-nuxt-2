<template>
  <div class="item">
    <svg-icon class="item__icon" :name="img" />
    <div>{{ text }}</div>
  </div>
</template>

<script>
export default {
  name: 'BasketPeopleItem',
  props: {
    img: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;

  background: #fff6e1;
  border-radius: 24px;
  height: 80px;
  padding: 0 24px;

  font-family: $golos-medium;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.01em;
  color: #1f2226;

  &__icon {
    width: 56px;
    height: 56px;
  }
}
</style>

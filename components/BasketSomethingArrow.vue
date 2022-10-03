<template>
  <div class="arrow" v-on="$listeners">
    <svg-icon
      class="arrow__icon"
      name="arrow-right"
    />
  </div>
</template>

<script>
export default {
  name: "BasketSomethingArrow"
};
</script>

<style lang="scss" scoped>
.arrow {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: #FFFFFF;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &__icon {
    width: 20px;
    height: 20px;
  }
}
</style>

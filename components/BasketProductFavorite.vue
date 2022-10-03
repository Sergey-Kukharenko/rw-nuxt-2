<template>
  <div class="favorite">
    <basket-button
      theme="grey"
      size="small"
      :icon-only="true"
    >
      <svg-icon
        class="favorite__icon-like"
        name="like"
      />
    </basket-button>
    <div>Add to favorite</div>
  </div>
</template>

<script>
export default {
  name: "BasketProductFavorite"
};
</script>

<style lang="scss" scoped>
.favorite {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  margin-top: 16px;

  font-family: $golos-regular;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #1F2226;

  &__icon-like {
    width: 20px;
    height: 20px;
  }
}
</style>

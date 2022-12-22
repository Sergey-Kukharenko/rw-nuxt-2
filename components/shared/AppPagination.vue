<template>
  <div class="pagination">
    <div class="pagination__items">
      <div class="pagination__items-item active">1</div>
      <div class="pagination__items-item">2</div>
      <div class="pagination__items-item">3</div>
      <div class="pagination__items-item">...</div>
      <div class="pagination__items-item">6</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppPagination'
};
</script>

<style lang="scss" scoped>
.pagination {
  @include lt-md {
    display: none;
  }

  @include gt-sm {
    display: flex;
    justify-content: center;

    &__items {
      display: flex;
      gap: 8px;

      &-item {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        border: 1px solid #eaeaea;
        border-radius: 10px;
        font-family: $golos-regular;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        color: $color-dark-grey;
        cursor: pointer;

        &.active {
          border: 1px solid $color-dark-green;
        }
      }
    }
  }
}
</style>

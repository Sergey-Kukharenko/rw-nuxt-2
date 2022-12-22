<template>
  <div class="people">
    <basket-people-title />
    <div class="people__list">
      <basket-people-item img="path" text="Free delivery right to your apartment on nominated day" />
      <basket-people-item img="coins" text="Cashback 10% with each order. Without any secret 'but'" />
      <basket-people-item img="photo" text="Bouquet photo before delivery. Showing the quality" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BasketPeople'
};
</script>

<style lang="scss" scoped>
.people {
  margin-top: 48px;
  margin-bottom: 52px;

  &__list {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    margin-top: 24px;

    @include lt-lg {
      flex-direction: column;
    }
  }
}
</style>

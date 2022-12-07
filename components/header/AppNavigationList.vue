<template>
  <div class="navigation-list">
    <a
      v-for="item in list"
      :key="item.title"
      :href="item.href"
      target="_blank"
      class="navigation-list__item"
    >
      <div class="content">
        <div class="content__text">{{ item.title }}</div>
        <div v-if="item.count" class="content__count">{{ item.count }}</div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'AppNavigationList',

  props: {
    list: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.navigation-list {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 -12px;

  &__item {
    display: block;
    font-family: $golos-regular;
    font-size: 14px;
    line-height: 24px;
    color: $color-dark-grey;
    padding: 10px 12px;
    margin: 0;

    &:hover {
      color: $color-white-grey;
    }
  }
}

.content {
  display: flex;
  align-items: center;
  justify-content: flex-start;

  &__count {
    display: flex;
    align-items: center;
    justify-content: center;
    color: $color-white-grey;

    &::before {
      content: '';
      display: block;
      width: 4px;
      height: 4px;
      background: currentColor;
      border-radius: 50%;
      margin: 0 4px;
    }
  }
}
</style>


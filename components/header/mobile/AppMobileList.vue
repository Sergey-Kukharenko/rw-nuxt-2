<template>
  <div class="list">
    <div v-for="(item, idx) in list" :key="idx" class="list__item">
      <div class="figure">
        <svg-icon :name="item.icon" class="figure__icon" :class="item.icon" />
      </div>
      <div class="figcaption">{{ item.text }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppMobileList',

  props: {
    list: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="scss" scoped>
.list {
  margin: 6px 0;
  transition: opacity 0.3s ease 0s, transform 0.3s ease 0s;

  &__item {
    display: flex;
    align-items: center;
    padding: 6px 0 5px;
  }
}

.figure {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 24px;
  height: 24px;

  &__icon {
    width: 20px;
    height: 20px;

    &.relatives {
      width: 22px;
      height: 22px;
    }
  }
}

.figcaption {
  font-family: $golos-regular;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.01em;
  margin-left: 4px;
}
</style>

<template>
  <div class="count">
    <basket-button
      theme="grey"
      size="small"
      :icon-only="true"
      @click="onClickMinus"
    >
      <svg-icon
        class="count__icon-minus"
        name="minus"
      />
    </basket-button>
    <basket-input
      v-model="count"
      align="center"
      :width="88"
    />
    <basket-button
      theme="grey"
      size="small"
      :icon-only="true"
      @click="onClickPlus"
    >
      <svg-icon
        class="count__icon-plus"
        name="plus"
      />
    </basket-button>
  </div>
</template>

<script>
export default {
  name: "BasketProductCount",
  data () {
    return {
      count: 1
    };
  },
  methods: {
    onClickMinus () {
      this.count--;
      if (this.count < 1) this.count = 1;
    },
    onClickPlus () {
      this.count++;
    }
  }
};
</script>

<style lang="scss" scoped>
.count {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;

  &__icon-minus {
    width: 12px;
    height: 2px;
  }

  &__icon-plus {
    width: 12px;
    height: 12px;
  }
}
</style>

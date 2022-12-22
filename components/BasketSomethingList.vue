<template>
  <div class="list">
    <div class="list__container" :style="containerStyles">
      <basket-something-item
        v-for="(item, index) in list"
        :key="index"
        :img="item.img"
        :title="item.title"
        :price="item.price"
      />
    </div>
    <basket-something-arrow class="list__arrow" @click="onClickArrowRight" />
  </div>
</template>

<script>
export default {
  name: 'BasketSomethingList',
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      translateX: 0
    };
  },
  computed: {
    containerStyles() {
      return {
        transform: `translateX(${this.translateX}px)`
      };
    }
  },
  methods: {
    onClickArrowRight() {
      this.translateX -= 712;
      console.log(this.translateX);
    }
  }
};
</script>

<style lang="scss" scoped>
.list {
  position: relative;
  width: 100%;
  overflow: hidden;

  @include lt-lg {
    overflow: scroll;
    scrollbar-width: none;
    width: calc(100% + 32px);
    margin-left: -16px;

    & > :first-child {
      margin-left: 16px;
    }

    &::-webkit-scrollbar {
      display: none;
    }
  }

  &__container {
    display: flex;
    flex-direction: row;
    gap: 18px;
    transition: all 250ms ease-in-out;
    width: fit-content;

    @include lt-lg {
      gap: 8px;

      & > :last-child {
        margin-right: 16px;
      }
    }
  }

  &__arrow {
    position: absolute;
    z-index: 1;
    right: 7px;
    top: 30%;

    @include lt-lg {
      display: none;
    }
  }
}
</style>

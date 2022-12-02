<template>
  <div class="info-button">
    <div class="info-button__content">
      {{ text }}
      <div class="info-button__content-button" @click="goToPath(text)">
        <svg-icon name="arrow-green" class="info-button__content-icon" />
      </div>
    </div>
    <div class="info-button__images">
      <img
        v-for="image in images"
        :key="image"
        :src="image"
        :style="computedMargin"
        class="info-button__image"
        :alt="image"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPageLink',

  props: {
    text: {
      type: String,
      default: '',
    },

    images: {
      type: Array,
      default: () => [],
    },
  },

  computed: {
    computedMargin() {
      return this.images.length < 2 ? { marginRight: '21px' } : null;
    },
  },

  methods: {
    goToPath(path) {
      this.$router.push({ path });
    },
  },
};
</script>

<style lang="scss" scoped>
.info-button {
  @include lt-md {
    display: none;
  }

  display: flex;
  align-items: center;
  width: 344px;
  height: 80px;
  padding-left: 24px;
  box-sizing: border-box;
  background: #f7f7f7;
  border-radius: 24px;

  &__content {
    display: flex;
    align-items: center;
    flex: 1;
    gap: 12px;

    font-family: $Literata;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -0.01em;
    color: $color-dark-grey;
    text-transform: capitalize;

    &-button {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 40px;
      height: 40px;
      background: #ffffff;
      border-radius: 50%;
    }

    &-icon {
      width: 25.6px;
      height: 25.6px;
      transform: rotate(180deg);
      cursor: pointer;
      user-select: none;
    }
  }

  &__images {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    flex: 1;
    height: 100%;
  }

  &__image {
    pointer-events: none;
    user-select: none;
    
  }
}
</style>

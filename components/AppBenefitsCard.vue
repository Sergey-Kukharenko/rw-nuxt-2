<template>
  <div class="benefit">
    <div class="benefit__col">
      <div class="benefit__info">
        <div class="benefit__title">{{ currBenefit.title }}</div>
        <div class="benefit__text">{{ currBenefit.text }}</div>
      </div>
      <div class="benefit__nav">
        <div class="benefit__nav-item like">
          <div class="like__button">
            <svg-icon class="like__button-icon" name="like-green" />
            {{ currBenefit.likes }}
          </div>
        </div>
        <div class="benefit__nav-item arrows">
          <div class="arrows__btn left" :class="{ active: hasPrev }" @click="switchTab('prev')">
            <svg-icon class="arrows__btn-icon" name="arrow-right" />
          </div>
          <div class="arrows__btn right" :class="{ active: hasNext }" @click="switchTab('next')">
            <svg-icon class="arrows__btn-icon" name="arrow-right" />
          </div>
        </div>
      </div>
    </div>
    <div class="benefit__col">
      <img :src="currBenefit.img" :alt="currBenefit.img" class="benefit__img" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppBenefitsCard',

  props: {
    tabs: {
      type: Array,
      default: () => []
    },

    activeTab: {
      type: Number,
      default: 0
    }
  },

  computed: {
    currBenefit() {
      return this.tabs[this.activeTab];
    },

    hasPrev() {
      return this.activeTab > 0;
    },

    hasNext() {
      return this.activeTab < this.tabs?.length - 1;
    }
  },

  methods: {
    switchTab(action) {
      switch (action) {
        case this.hasPrev && 'prev':
          this.$emit('prev');

          break;

        case this.hasNext && 'next':
          this.$emit('next');
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.benefit {
  @include lt-md {
    display: none;
  }

  @include gt-sm {
    display: flex;
    &__col {
      flex: 1;
      position: relative;
    }

    &__title {
      font-family: $Literata;
      font-style: normal;
      font-weight: 600;
      font-size: 32px;
      line-height: 40px;
      letter-spacing: -0.01em;
      color: $color-dark-grey;
    }

    &__text {
      font-family: $golos-regular;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.01em;
      color: $color-dark-grey;
    }

    &__info {
      display: flex;
      flex-direction: column;
      gap: 12px;
      max-width: 366px;
    }

    &__nav {
      display: flex;
      justify-content: space-between;
      position: absolute;
      width: 100%;
      bottom: 0;
      width: 100%;
      max-width: 366px;

      .like__button {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 8.67px;
        background: #ffffff;
        border-radius: 12px;
        box-sizing: border-box;
        padding: 8px 16px;

        font-family: $golos-regular;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: -0.01em;
        color: $color-dark-grey;
        user-select: none;
        cursor: pointer;

        &-icon {
          width: 14.67px;
          height: 13.23px;
        }
      }

      .arrows {
        display: flex;
        align-items: center;
        user-select: none;
        gap: 8px;

        &__btn {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 40px;
          width: 40px;
          border-radius: 50%;
          opacity: 0.5;

          &:first-child {
            transform: rotate(180deg);
          }
          &.active {
            background: #ffffff;
            opacity: 1;
            cursor: pointer;
            user-select: none;
          }

          &-icon {
            width: 13.33px;
            height: 12.96px;
          }
        }
      }
    }

    &__img {
      height: 250px;
      border-radius: 32px;
    }
  }
}
</style>

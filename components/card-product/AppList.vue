<template>
  <div class="list">
    <div
      v-for="(item, idx) in list"
      :key="idx"
      class="list__item"
      @click="onChange(item, idx)"
    >
      <div class="card" :class="{ active: idx === selectedItem }">
        <div v-if="item.sale" class="badge">
          <img
            v-if="item.sale.icon_path"
            :src="item.sale.icon_path"
            :alt="item.sale.icon_path"
            class="badge__icon"
          />
        </div>
        <div class="card__figure figure">
          <img :src="item.img" class="figure__img"  :alt="item.img"/>
          <div class="figure__border" />
        </div>
        <div v-if="item.description" class="card__figcaption figcaption">
          <div class="figcaption__title">{{ item.name }}</div>
          <div class="figcaption__price">£{{ item.price }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppList',
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      selectedItem: 0
    }
  },
  methods: {
    onChange(item, idx) {
      this.selectedItem = idx
      this.$emit('setItem', item)
    }
  }
};
</script>

<style scoped lang="scss">
.list {
  display: flex;
  user-select: none;

  @include gt-sm {
    margin: 4px -8px;
  }

  @include lt-sm {
    padding: 3px 0 0 0;
    overflow: hidden;
    overflow-x: auto;
    overflow: -moz-scrollbars-none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  &__item {
    @include gt-sm {
      margin: 8px;
    }

    @include lt-md {
      margin: 5px;

      &:first-child {
        margin-left: 14px;
      }

      &:last-child {
        margin-right: 14px;
      }
    }
  }
}

.card {
  cursor: pointer;
  position: relative;

  &__figure {
    position: relative;
    z-index: 1;
    border-radius: 12px;

    @include gt-sm {
      width: 60px;
      height: 60px;
    }

    @include lt-md {
      width: 56px;
      height: 56px;
    }
  }

  &__figcaption {
    margin-top: 11px;
  }

  &:hover,
  &.active {
    .card__figcaption {
      color: $color-dark-grey;
    }

    .figure__img {
      transform: scale(0.98);
    }

    .figure__border {
      opacity: 1;
      transform: scale(1);
    }
  }

  &:active {
    .figure__img {
      transform: scale(0.86);
    }
  }
}

.figure {
  &__img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
    overflow: hidden;
    position: relative;
    z-index: 1;
    transition: transform 0.3s ease-out 0s;
  }

  &__border {
    position: absolute;

    z-index: 2;
    border: 2px solid $color-green;
    border-radius: 12px;
    opacity: 0;
    transform: scale(1.1);
    transition: 0.3s ease-out 0s;

    @include gt-sm {
      top: -4px;
      left: -4px;
      right: -4px;
      bottom: -4px;
    }

    @include lt-md {
      top: -3px;
      left: -3px;
      right: -3px;
      bottom: -3px;
    }
  }
}

.figcaption {
  font-size: 11px;
  line-height: 16px;
  letter-spacing: -0.01em;
  color: $color-white-grey;
  text-align: center;

  &__title {
    margin: 0;
  }

  &__price {
    margin-top: 1px;
  }
}

.badge {
  width: 24px;
  height: 24px;
  position: absolute;
  top: -8px;
  right: -8px;
  z-index: 3;
  background: #ffeec6;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  &__icon {
    display: block;
    width: 14px;
  }
}
</style>

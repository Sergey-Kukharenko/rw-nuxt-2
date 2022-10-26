<template>
  <div class="offers">
    <div v-for="(item, idx) in offers" :key="item.id" class="offers__item item" @click="onChange(item, idx)">
      <div class="button" :class="{ active: idx === selectedOffer }">
        <div class="figure">
          <div class="radio">
            <div class="radio__shape"></div>
          </div>
          <div class="figcaption">
            {{ item.title }}
          </div>
          <app-badge v-if="item.sale" :theme="item.sale.color" size="md-dt" class="badge">
            <img :src="item.sale.icon_path" class="badge__icon" alt="item.sale.icon_path"/>
            <span class="badge__text">{{ item.sale.text }}</span>
          </app-badge>
        </div>
        <div class="price">
          £{{ item.price.amount }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppBadge from '@/components/shared/AppBadge';

export default {
  name: 'AppOffers',

  components: {AppBadge},

  props: {
    offers: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      selectedOffer: 0
    };
  },

  methods: {
    onChange(item, idx) {
      this.selectedOffer = idx;
      this.$emit('setOffer', item);
    }
  }
};
</script>

<style lang="scss" scoped>
.offers {
  @include gt-sm {
    margin: 12px 0 24px;
  }

  @include lt-md {
    margin: 9px 0 24px;
  }

  &__item {
    width: 100%;
    margin: 6px 0;
  }
}

.button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  box-sizing: border-box;
  transition: border 0.2s ease-out 0s;
  cursor: pointer;
  user-select: none;

  @include gt-sm {
    padding: 9px 18px;
  }

  @include lt-md {
    padding: 11px 16px;
  }

  &.active,
  &:hover {
    border: 1px solid $color-green;

    .radio {
      border: 1px solid $color-green;

      &__shape {
        opacity: 1;
      }
    }
  }
}

.figure {
  flex-shrink: 0;
  display: flex;
  align-items: center;
}

.figcaption {
  flex: 1;
  font-family: $golos-regular;
  font-size: 16px;
  line-height: 24px;
  margin: 0 12px 0 14px;
}

.radio {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #eaeaea;
  box-sizing: border-box;
  transition: border 0.2s ease-out 0s;

  &__shape {
    width: 10px;
    height: 10px;
    background: $color-green;
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.2s ease-out 0s;
  }
}

.price {
  font-size: 16px;
  line-height: 24px;
  color: $color-dark-grey;

  @include gt-sm {
    font-family: $golos-medium;
    margin-right: 38px;
  }

  @include lt-md {
    font-family: $golos-regular;
  }
}

.badge {
  &__icon {
    display: block;

    @include gt-sm {
      width: 15px;
      margin-right: 4px;
    }

    @include lt-md {
      width: 13px;
      margin: 2px 0;
    }
  }

  &__text {
    @include lt-md {
      display: none;
    }
  }
}
</style>

<template>
  <div class="list nested-group">
    <a v-for="(item, idx) in navigation" :key="idx" class="list__item">
      {{ item.title }}
      <span v-if="item.count" class="count">
        {{ item.count }}
      </span>
    </a>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'AppHeaderMobileNav',

  computed: {
    ...mapGetters({ navigation: 'layout/getNavigation' })
  }
};
</script>

<style lang="scss" scoped>
.list {
  margin-top: 20px;

  &__item {
    display: flex;
    font-family: $golos-regular;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: -0.02em;
    color: $color-dark-grey;
    padding: 6px 0;
  }
}

.count {
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
</style>

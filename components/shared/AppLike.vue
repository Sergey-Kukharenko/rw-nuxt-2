<template>
  <div class="like" @click="toggle(passedLike)">
    <svg-icon name="like" :class="['like__icon', { active: passedLike.by_user }]" />
    {{ like.count }}
  </div>
</template>

<script>
export default {
  name: 'AppLike',

  props: {
    like: {
      type: Object,
      default: () => {}
    }
  },

  computed: {
    passedLike() {
      return this.like;
    }
  },

  methods: {
    toggleLike(like) {
      like.by_user = !like.by_user;
    },

    toggleCount(like) {
      like.by_user ? like.count-- : like.count++;
    },

    toggle(like) {
      this.toggleCount(like);
      this.toggleLike(like);
    }
  }
};
</script>

<style lang="scss" scoped>
.like {
  display: flex;
  align-items: center;
  color: #000;
  user-select: none;
  cursor: pointer;

  &__icon {
    width: 14.67px;
    height: 13.23px;
    fill: #c9cbcd;
    margin-right: 8.67px;
  }

  &__icon.active {
    fill: $color-green;
  }
}
</style>

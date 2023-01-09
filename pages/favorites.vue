<template>
  <div class="favorites">
    <!--    <app-section v-if="isFavorites" :section="favorites" name="favorites" />-->
    <!--    <app-favorites-empty v-else />-->

    <app-like-icon />

    <app-like-icon theme="grey"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

// import AppSection from '~/components/shared/AppSection';
import { useArrayNotEmpty } from '~/helpers';
import AppLikeIcon from '~/components/shared/AppLikeIcon';

export default {
  name: 'FavoritesPage',

  components: {
    AppLikeIcon
    // AppSection
  },

  layout: 'empty',

  computed: {
    ...mapGetters({
      favorites: 'favorites/getFavorites'
    }),

    isFavorites() {
      return useArrayNotEmpty(this.favorites?.list);
    }
  }
};
</script>

<style scoped lang="scss">
.favorites {
  order: 3;

  @include gt-sm {
    margin-bottom: 24px;
  }
}
</style>

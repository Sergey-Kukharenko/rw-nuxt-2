<template>
  <div>
    <app-section v-if="isFavorites" :section="favorites" name="favorites" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import AppSection from '~/components/shared/AppSection';
import { useArrayNotEmpty } from '~/helpers';

export default {
  name: 'FavoritesPage',

  components: {
    AppSection
  },

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

<style scoped lang="scss"></style>

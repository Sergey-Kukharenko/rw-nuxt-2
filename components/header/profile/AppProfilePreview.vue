<template>
  <div class="profile-preview">
    <app-profile-header :user="user" />
    <app-profile-list :user="user" />
  </div>
</template>

<script>
import AppProfileHeader from '~/components/header/profile/AppProfileHeader';
import AppProfileList from '~/components/header/profile/AppProfileList';

export default {
  name: 'AppProfilePreview',

  components: { AppProfileList, AppProfileHeader },

  props: {
    user: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>

<style lang="scss" scoped>
.profile-preview {
  @include gt-sm {
    width: 320px;
  }

  @include lt-md {
    width: 290px;
    padding: 18px 0;
    box-sizing: border-box;
  }
}
</style>

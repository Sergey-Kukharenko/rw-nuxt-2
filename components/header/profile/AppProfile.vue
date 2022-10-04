<template>
  <div class="profile">
    <app-dropdown :options="getOptions">
      <template #button>
        <app-profile-button :user="user" />
      </template>
      <template #dropdown>
        <app-profile-preview v-if="user.authorized" :user="user" />
        <app-profile-form v-else :user="user"/>
      </template>
    </app-dropdown>
  </div>
</template>

<script>
import AppDropdown from '~/components/shared/AppDropdown.vue'
import AppProfileButton from '~/components/header/profile/AppProfileButton';
import AppProfilePreview from '~/components/header/profile/AppProfilePreview';
import AppProfileForm from '~/components/header/profile/AppProfileForm';

export default {
  name: 'AppProfile',

  components: {
    AppProfileForm,
    AppProfilePreview,
    AppProfileButton,
    AppDropdown
  },

  data() {
    return {
      options: {
        top: '-20px',
        right: 0
      }
    };
  },

  computed: {
    user() {
      return this.$store.getters['user/state']
    },

    getOptions() {
      return this.$device.isDesktop ? this.options : null
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  cursor: pointer;

  @include lt-md {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__figure {
    display: flex;
    align-items: center;
    justify-content: center;

    @include gt-sm {
      width: 28px;
      height: 28px;
      margin: 0 auto;
    }

    @include lt-md {
      width: 32px;
      height: 32px;
      background: #f7f7f7;
      border-radius: 50%;
    }
  }

  &__icon {
    fill: $color-light-grey;

    @include gt-sm {
      width: 26.45px;
      height: 24px;
    }

    @include lt-md {
      width: 12px;
      height: 12px;
    }
  }

  &__figcaption {
    text-align: center;
    color: $color-white-grey;

    @include gt-sm {
      font-family: $golos-medium;
      font-size: 14px;
      line-height: 16px;
      text-align: center;
      margin-top: 7px;
    }

    @include lt-md {
      font-family: $golos-regular;
      font-size: 12px;
      line-height: 16px;
      margin-left: 8px;
    }
  }

  &:hover {
    opacity: 0.75;
  }
}
</style>
<template>
  <div class="profile">
    <app-dropdown v-if="isAuth" :options="getOptions">
      <template #button>
        <app-profile-button :user="user" />
      </template>
      <template #dropdown>
        <app-profile-preview :user="user" />
      </template>
    </app-dropdown>

    <template v-else>
      <app-profile-button :user="user" @click="open" />

      <app-modal :visible="isVisible" theme="blured modal--centered" @close="close">
        <component :is="currStep" @close="close" />
      </app-modal>
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import AppDropdown from '~/components/shared/AppDropdown.vue';
import AppProfileButton from '~/components/header/profile/AppProfileButton';
import AppProfilePreview from '~/components/header/profile/AppProfilePreview';
import AppModal from '~/components/shared/AppModal';
import AppAuth from '~/components/header/auth/AppAuth';
import AppCode from '~/components/header/auth/code/AppCode';
import AppNotReceived from '~/components/header/auth/code/AppNotReceived';
import AppReg from '~/components/header/auth/registration/AppReg';
import AppCompleted from '~/components/header/auth/registration/AppCompleted';

import { disableScroll, enableScroll } from '~/helpers/scrollLock';

export default {
  name: 'AppProfile',

  components: {
    AppAuth,
    AppCode,
    AppReg,
    AppCompleted,
    AppNotReceived,
    AppModal,
    AppProfilePreview,
    AppProfileButton,
    AppDropdown
  },

  data() {
    return {
      isVisible: false,
      options: {
        top: '-20px',
        right: 0
      }
    };
  },

  computed: {
    ...mapGetters({
      user: 'user/state',
      isAuth: 'auth/isAuthorized',
      currStep: 'auth/currStep'
    }),

    getOptions() {
      return this.$device.isDesktop ? this.options : null;
    }
  },

  methods: {
    open() {
      this.isVisible = true;
      disableScroll();
    },

    close() {
      this.isVisible = false;
      this.$store.commit('auth/setCurrStep', '');
      this.$store.commit('auth/setCodeType', '');
      enableScroll();
    }
  }
};
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

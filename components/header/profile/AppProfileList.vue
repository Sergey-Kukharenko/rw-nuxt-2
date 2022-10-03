<template>
  <div class="list">
    <div v-for="(item, idx) in settings" :key="idx" class="list__item">
      <svg-icon :name="item.icon" :class="item.name" class="icon"/>
      <div class="text">{{ item.text }}</div>
      <app-badge
        v-if="item.name === 'bonuses'"
        theme="yellow"
        size="sm"
        icon="cashback"
        class="badge"
      >
        {{ user.bonuses }}
      </app-badge>

      <div v-if="item.hasBtn" class="absolute-grow" @click="logOut"/>
    </div>
  </div>
</template>

<script>
import AppBadge from '~/components/shared/AppBadge';

export default {
  name: 'AppProfileList',
  components: {AppBadge},
  props: {
    user: {
      type: Object,
      default: () => ({})
    }
  },

  data() {
    return {
      settings: [
        {
          icon: 'bonuses-black',
          text: 'Your bonuses',
          to: '',
          name: 'bonuses'
        },
        {
          icon: 'bag-md',
          to: '',
          text: 'Your orders',
          name: 'orders'
        },
        {
          icon: 'user',
          to: '',
          text: 'Personal data',
          name: 'data'
        },
        {
          icon: 'filter',
          to: '',
          text: 'Notification settings',
          name: 'settings'
        },
        {
          icon: 'logout',
          hasBtn: true,
          text: 'Log out',
          name: 'logout'
        }
      ],
    };
  },

  methods: {
    logOut() {
      this.$store.dispatch('user/logout');
    }
  }
};
</script>

<style lang="scss" scoped>
.list {
  padding: 8px 20px 16px;

  &__item {
    display: flex;
    position: relative;
    padding: 6px 20px;
    border-radius: 10px;
    box-shadow: 0 0 0 #00000000;
    cursor: pointer;

    @include gt-sm {
      padding: 6px 20px;
    }

    @include lt-md {
      padding: 6px 0;
    }

    &:last-child {
      color: #db1838;
    }

    &:hover {
      background-color: #ffffff6b;
      box-shadow: 0 1px 4px #00000029;
    }
  }
}

.icon {
  flex-shrink: 0;
  width: 24px;
  height: 24px;
}

.text {
  font-family: $golos-regular;
  font-size: 16px;
  line-height: 24px;
  padding: 0 12px;
}

.badge {
  border-radius: 24px;
}
</style>

<template>
  <AppModalAbstraction v-if="visible" :theme="theme" @close="close">
    <slot />
  </AppModalAbstraction>
</template>

<script>
import AppModalAbstraction from '@/components/shared/AppModalAbstraction.vue'

export default {
  name: 'AppModal',

  components: {
    AppModalAbstraction
  },

  props: {
    visible: {
      type: Boolean,
      required: true
    },

    theme: {
      type: String,
      default: ''
    }
  },

  methods: {
    close() {
      this.$emit('close')
    }
  }
}
</script>


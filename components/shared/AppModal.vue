<template>
  <AppModalAbstraction v-if="visible" @close="close">
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
    }
  },

  methods: {
    close() {
      this.$emit('close')
    }
  }
}
</script>


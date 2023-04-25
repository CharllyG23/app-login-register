<template>
  <div class="appCard" :class="classes">
      <slot />
  </div>
</template>

<script>
import { watch, ref, computed } from 'vue'

export default {
  name: 'app-card',

  props: {
      outline: {
          type: Boolean,
          default: false
      },

      color: {
          type: String,
          default: 'white'
      },
      padding: {
          type: String,
          default: 'p-0'
      }
  },

  setup (props) {
      const classList = ref([])

      const classes = computed(() => classList.value.join(' '))

      function setupStyle ({ color, outline, padding }) {
          classList.value = [
              `bg-${color}`,
              `${padding}`,
              outline ? `border border-solid border-slate-200` : ''
          ]
      }

      setupStyle(props)
      watch(props, (newProps) => setupStyle(newProps))

      return {
          classes
      }
  }
}
</script>
<style lang="scss" scoped>
@import './AppCard-style.scss';
</style>
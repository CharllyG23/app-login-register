<template>
  <button
    :class="classList" 
    :style="style"
    :type="type"
    class="app-btn"
    @click="onClick"
    :disabled="disabled"
  >
    <slot> 
      <span class="label">{{ label }}</span>
    </slot>
  </button>
</template>
<script setup>
import { computed, watch, ref } from 'vue'

const emit = defineEmits(['on-click'])

const props = defineProps({
  width: {
		type: Number,
		default: 245,
	},
	height: {
		type: Number,
		default: 60,
	},
  	fullWidth: {
		type: Boolean,
		default: false,
	},

	fontSize: {
		type: [String, Number],
		default: 'text-base',
	},

	theme: {
		type: String,
		default: 'black',
	},


	label: {
		type: String,
		default: '',
	},
  	disabled: { type: Boolean, default: false },

	type: {
		type: String,
		default: 'button',
		validator: (value) => ['button', 'submit', 'reset'].includes(value.toLowerCase()),
	},
})

const setStyles = () => {
	return {
		width: props.fullWidth ? '100%' : `${props.width}px`,
		height: `${props.height}px`,
		fontSize: typeof props.fontSize === 'number' ? `${props.fontSize}px` : null,
	}
}

const setClasses = () => [
	typeof props.fontSize === 'string' ? props.fontSize : '',
	`hover:text-${props.textColor}`,
	`buttom-${props.theme}`
]

const classes = ref(setClasses())
const style = ref(setStyles())

watch(props, () => {
	classes.value = setClasses()
	style.value = setStyles()
})

const classList = computed(() => classes.value.join(' '))
</script>
<style lang="scss" scoped>
@import './AppButton-style.scss';
</style>
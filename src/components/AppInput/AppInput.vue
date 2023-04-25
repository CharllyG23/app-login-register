<template>
	<div class="appInput">
	  <div class="appInput-content">
		<div v-if="label" class="header">
		  <label :for="name" class="title">{{ label }}</label>
		</div>
		<div class="relative">
		  <input
			:name="name"
			:style="style"
			@input="update"
			@keyup.enter="$emit('on-keyup-enter')"
			class="custom-input"
			:placeholder="placeholder"
			:type="type"
			:value="formattedModelValue"
			:readonly="readonly"
		  />
		</div>
	  </div>
	</div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  
  const emits = defineEmits(['update:modelValue', 'on-keyup-enter']);
  
  const props = defineProps({
	name: { type: String },
	modelValue: { type: [String, Number] },
	height: { type: Number, default: 60 },
	label: { required: false },
	placeholder: { type: String, default: '' },
	type: { type: String, default: 'text' },
	readonly: { type: Boolean, default: false },
  });

const formattedModelValue = computed(() => {
	const phoneNumber = props.modelValue || '';
	let formattedNumber = '';
	if (props.type === 'tel') {
		// Remove all non-numeric characters from the input
		const numericInput = phoneNumber.replace(/\D+/g, '');
		const limitedInput = numericInput.slice(0, 11);
		formattedNumber = limitedInput.replace(/^(\d{2})(\d{5})(\d{0,4})$/, '($1) $2-$3');
	} else {
		formattedNumber = phoneNumber;
	}
	return formattedNumber;
});

const update = (el) => {
	emits('update:modelValue', el.target.value);
};

const style = {
	height: `${props.height}px`,
};
</script>
  
<style lang="scss" scoped>
@import './AppInput-style.scss';
</style>

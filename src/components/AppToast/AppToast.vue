<template>
    <teleport to="body">
        <transition name="bounce">
            <div v-if="modelValue" class="toast">
				<h1>Conta criada com sucesso</h1>
            </div>
        </transition>
    </teleport>
</template>
<script setup>
defineProps({
	modelValue: {
		type: Boolean,
		default: false,
	},
})

</script>
<style lang="scss" scoped>
@import './AppToast-style.scss';
</style>
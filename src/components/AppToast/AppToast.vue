<template>
    <teleport to="body">
        <transition name="bounce">
           <div class="toast ">
                <div v-if="modelValue" :class="['toast_content', cor] ">
                    <label for="">{{ label }}</label>
                </div>
           </div>
        </transition>
    </teleport>
</template>
<script setup>
defineProps({
	modelValue: { type: Boolean, default: false},
    label:{ required: true },
    cor: { type: String, default: 'blue'},
})

</script>
<style lang="scss" scoped>
@import './AppToast-style.scss';
</style>
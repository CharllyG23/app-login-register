<template>
  <div class="paymentPlans">
    <div class="paymentPlans_image">
      <img :src="logo" alt="logo">
    </div>
    <div class="paymentPlans_header">
      <h1>Você está muito próximo de mudar a forma de</h1>
      <p class="link">hospedar seu site</p>
      <span class="text-base font-normal">Escolha o seu plano</span>
    </div>
    <div class="paymentPlans_container">
      <div v-for="card in 3" :key="card" class="paymentPlans_content">
        <div class="w-full max-w-sm">
          <app-card outline>
            dvsdvsdvsd
          </app-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import logo from '../../assets/img/logo.svg'
import AppCard from '../../components/AppCard/AppCard.vue';
</script>
<style lang="scss" scoped>
@import './PaymentPlans-style.scss';
</style>
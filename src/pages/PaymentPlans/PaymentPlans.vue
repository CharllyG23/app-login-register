<template>
  <div class="paymentPlans">
    <div class="paymentPlans_image">
      <img :src="logo" alt="logo">
    </div>
    <div class="paymentPlans_header">
      <h1>Você está muito próximo de mudar a forma de</h1>
      <p class="subTitle">hospedar seu site</p>
      <span class="text-base font-normal">Escolha o seu plano</span>
    </div>
    <div class="paymentPlans_container">
      <div class="paymentPlans_container_content" v-for="price in plans" :key="price.id">
        <price-plans :data="price" />
      </div>
    </div>
  </div>
</template>
<script setup>
import PricePlans from '../../components/PricePlans/PricePlans.vue';
import plans from '../../support/plans/plans.json'
import logo from '../../assets/img/logo.svg'

</script>
<style lang="scss" scoped>
@import './PaymentPlans-style.scss';
</style>
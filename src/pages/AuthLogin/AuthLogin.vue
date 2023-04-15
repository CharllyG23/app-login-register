<template>
  <div class="login">
    <div class="login_image">
      <img :src="logo" alt="logo">
    </div>
    <div class="login_content">
      <app-card outline>
        <div class="login_content_wrap">
          <div class="login_header">
            <h1>Entre na sua conta</h1>
            <span>Para acessar sua conta informe seu e-mail e senha</span>
          </div>
          <div class="login_input">
            <app-input 
              :placeholder="'Seu e-mail'"
              :label="'E-mail'"
              name="email"
            />
          </div>
          <div>
            <app-input 
              :placeholder="'Sua senha'"
              :label="'Senha'"
              name="password"
            />
          </div>
          <div class="forget">
            <span>Esqueci minha senha</span>
          </div>
          <div class="pt-6">
            <app-button
              class="btn"
              fullWidth
              color="buttom-color-1"
              font-size="text-lg"
            ><span class="text-white">FAZER LOGIN</span></app-button>
          </div>
        </div>
      </app-card>  
      <div class="login_register">
        <p>Ainda não tem conta? <router-link to="/plans" class="link">Cadastre-se</router-link></p>
      </div>
    </div>
  </div>
</template>
<script setup>
import AppCard from '../../components/AppCard/AppCard.vue';
import AppInput from '../../components/AppInput/AppInput.vue';
import AppButton from '../../components/AppButton/AppButton.vue';
import logo from '../../assets/img/logo.svg'

</script>
<style lang="scss" scoped>
@import './AuthLogin-style.scss';
</style>
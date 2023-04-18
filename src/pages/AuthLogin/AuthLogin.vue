<template>
  <div class="login">
    <div class="login_image">
      <img :src="logo" alt="logo">
    </div>
    <app-toast v-model="isLogin" :cor="toastCord" :label="mesagemm" ></app-toast>
    <div class="login_content">
      <app-card outline>
        <div class="login_content_wrap">
          <div class="login_header">
            <h1>Entre na sua conta</h1>
            <span>Para acessar sua conta informe seu e-mail e senha</span>
          </div>
          <div class="login_input">
            <app-input 
              v-model="username"
              :placeholder="'Seu e-mail'"
              :label="'E-mail'"
              name="email"
            />
          </div>
          <div>
            <app-input 
              v-model="password"
              :placeholder="'Sua senha'"
              :label="'Senha'"
              type="password"
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
              theme="primary" 
              font-size="text-lg"
              :label="'Login'"
              @click="loginUser"
            >
            </app-button>
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
import { ref } from 'vue'
import AppCard from '../../components/AppCard/AppCard.vue';
import AppInput from '../../components/AppInput/AppInput.vue';
import AppButton from '../../components/AppButton/AppButton.vue';
import AppToast from '../../components/AppToast/AppToast.vue';
import logo from '../../assets/img/logo.svg'

const username = ref('')
const password = ref('')
const isLogin = ref(false)
const mesagemm = ref('')
const toastCord = ref('')
const loginUser = async () => {
  try{
    const response = await fetch("https://fakestoreapi.com/auth/login", {
    method: "POST",
    body: JSON.stringify({
      username: username.value,
      password: password.value,
    }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    isLogin.value = true;
    console.log('response', response)

    if(response.status === 200){
      toastCord.value = 'green'
      mesagemm.value = 'Usuário logado com sucesso'
    }else{
      toastCord.value = 'red'
      mesagemm.value = 'Usuário incorreto'
    }

    setTimeout(()=>{
      isLogin.value = false;
      window.location.replace('/')
    }, 1500)
  } catch (err) {
    console.error(err);
  }
}
</script>
<style lang="scss" scoped>
@import './AuthLogin-style.scss';
</style>
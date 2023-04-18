<template>
  <div class="authRegister">
      <div class="authRegister_image">
        <img :src="logo" alt="logo">
      </div>
      <div class="authRegister_header">
        <h1>Você está muito próximo de mudar a forma de</h1>
        <p class="subTitle">hospedar seu site</p>
      </div>
      <app-toast v-model="isAccountCreated" />
      <div class="authRegister_content">
        <div class="card">
          <app-card outline>
            <div class="authRegister_content_wrap">
              <div class="authRegister_info">
                <h1>Dados pessoais</h1>
                <span>Informe seus dados pessoais para acesso à sua conta</span>
              </div>
              <div class="authRegister_input">
                <app-input 
                  v-model="userData.name"
                  :label="'Nome completo'"
                  :placeholder="'Informe seu nome completo'"
                  name="name"
                />
              </div>
              <div class="authRegister_input">
                <app-input 
                  v-model="userData.phone"
                  :label="'Celular'"
                  :placeholder="'(99) 99999-0000'"
                  type="number"
                  name="tel"
                />
              </div>
              <div class="authRegister_input">
                <app-input 
                  v-model="userData.email"
                  :label="'E-mail'"
                  type="email"
                  :placeholder="'Informe seu e-mail'"
                  name="email"
                />
              </div>
              <div class="authRegister_input">
                <app-input 
                  v-model="userData.password"
                  :label="'Senha'"
                  type="password"
                  name="password"
                />
                <span v-if="!passwordLength && passwordWithCharacters" class="min"> No minimo 8 caracter </span>
              </div>
              <div class="authRegister_input">
                <app-input 
                  v-model="userData.confirmPassword"
                  :label="'Confirme sua senha'"
                  type="password"
                  name="confirmPassword"
                />
                <span v-if="!passwordConfirm && passwordWithCharacters" class="min"> A senha não corresponde confirme sua senha </span>
              </div>
              <div class="py-2">
                <AppLine />
              </div>
              <div class="authRegister_footer">
                <h1 class="pt-2">Dados do seu site</h1>
                <div class="authRegister_input">
                  <app-input 
                    v-model="userData.site"
                    :label="'Confirme sua senha'"
                    :placeholder="'Meu site'"
                    name="site"
                  />
                  <span class="min">Exatamente igual o título do seu site</span>
                </div>
              </div>
              <AppLine />
              <div class="checkbox pt-6">
                <div class="checkbox path">
                  <input type="checkbox" v-model="userData.acceptTerms" id="acceptTerms" required>
                  <svg viewBox="0 0 21 21">
                      <path d="M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186">
                      </path>
                  </svg>
                </div>
                <p class="pl-3 text-sm">Ao concluir com seu cadastro você concorda com nossos <p class="underline decoration ">termos de uso e politicas de privacidade.</p></p>
              </div>
              <div class="pt-10">
                <app-button
                  class="btn"
                  fullWidth
                  theme="primary"
                  font-size="text-lg"
                  :label="'CRIAR CONTA'"
                  @click="registerUser"
                  :disabled="!isRegisterButtonDisabled"
                >
                </app-button>
              </div>
            </div>
          </app-card> 
        </div>
        <div class="pricePlans">
          <div class="chosenPlane">
            <div class="chosenPlane_content">
              <p>PLANO ESCOLHIDO</p>
            </div>
          </div>
          <div class="pricePlans_overflow">
            <price-plans :data="plan"/>
          </div>
        </div>
      </div>
  </div>
</template>
<script setup>
import { ref, computed, onBeforeUnmount } from 'vue';
import AppCard from '../../components/AppCard/AppCard.vue';
import AppInput from '../../components/AppInput/AppInput.vue';
import AppButton from '../../components/AppButton/AppButton.vue';
import logo from '../../assets/img/logo.svg'
import AppLine from '../../components/AppLine/AppLine.vue';
import PricePlans from '../../components/PricePlans/PricePlans.vue';
import plans from '../../support/plans/plans.json';
import AppToast from  '../../components/AppToast/AppToast.vue'
import { useRouter, useRoute } from 'vue-router'; 

const router = useRouter();
const route = useRoute();
const planId = Number(route.params.id)
const plan = plans.find(data => data.id === planId);
plan.chosenPlane = true

const isAccountCreated = ref(false);

const userData = ref({
  name: '',
  phone: '',
  email: '',
  password: '',
  confirmPassword: '',
  site: '',
  acceptTerms: false,
})

const isRegisterButtonDisabled = computed(() => {
  return (
    userData.value.name.length > 3 &&
    userData.value.phone.length === 11 &&
    userData.value.email &&
    validPassword &&
    userData.value.site &&
    userData.value.acceptTerms
  );
});

const passwordWithCharacters = computed(()=> {
  return userData.value.password.length >= 3
})

const passwordLength = computed(()=> {
  return userData.value.password.length >= 8
})

const passwordConfirm = computed(()=> {
  return userData.value.password === userData.value.confirmPassword
})

const validPassword = computed(()=> {
  return passwordLength.value && passwordConfirm.value
})

const registerUser = async () => {
  const { name, phone, email, password, confirmPassword, site } = userData.value

  if(!validPassword) {
    return
  }

  try {
    const response = await fetch('https://fakestoreapi.com/users/', 
    {
      method: 'POST',
      body: JSON.stringify
      ({
        name: name.trim(),
        phone,
        email,
        password,
        confirmPassword,
        site,
      })
    });
    isAccountCreated.value = true;
    console.log('response', response)
    setTimeout(()=>{
      isAccountCreated.value = false;
      router.push('/');
    }, 1000)
  } catch (error) {
    console.error(error);
  }
};

onBeforeUnmount(() => {
  plan.chosenPlane = false
});
</script>
<style lang="scss" scoped>
@import './AuthRegister-style.scss';
</style>
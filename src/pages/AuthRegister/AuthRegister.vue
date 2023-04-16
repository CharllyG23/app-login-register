<template>
  <div class="authRegister">
      <div class="authRegister_image">
        <img :src="logo" alt="logo">
      </div>
      <div class="authRegister_header">
        <h1>Você está muito próximo de mudar a forma de</h1>
        <p class="subTitle">hospedar seu site</p>
      </div>
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
                  :label="'Nome completo'"
                  :placeholder="'Informe seu nome completo'"
                  name="name"
                />
              </div>
              <div class="authRegister_input">
                <app-input 
                  :label="'Celular'"
                  :placeholder="'(99) 99999-0000'"
                  name="tel"
                />
              </div>
              <div class="authRegister_input">
                <app-input 
                  :label="'E-mail'"
                  :placeholder="'Informe seu e-mail'"
                  name="email"
                />
              </div>
              <div class="authRegister_input">
                <app-input 
                  :label="'Senha'"
                  name="password"
                />
                <span class="min">No mínimo 8 caracteres</span>
              </div>
              <div class="authRegister_input">
                <app-input 
                  :label="'Nome do seu site'"
                  name="confirmPassword"
                />
              </div>

              <div class="py-2">
                <AppLine />
              </div>
              <div class="authRegister_footer">
                <h1 class="pt-2">Dados do seu site</h1>
                <div class="authRegister_input">
                  <app-input 
                    :label="'Confirme sua senha'"
                    :placeholder="'Meu site'"
                    name="site"
                  />
                  <span class="min">Exatamente igual o título do seu site</span>
                </div>
              </div>
              <AppLine />
              <div class="pt-4 flex ">
                <div class="checkbox path">
                  <input type="checkbox" id="c1">
                  <svg viewBox="0 0 21 21">
                      <path d="M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186"></path>
                  </svg>
                </div>
                <p class="pl-3 text-base">Ao concluir com seu cadastro você concorda com nossos <p class="underline decoration ">termos de uso e politicas de privacidade</p>.</p>
              </div>
              <div class="pt-6">
                <app-button
                  class="btn"
                  fullWidth
                  color="buttom-color-1"
                  font-size="text-lg"
                >
                  <span class="text-white">CRIAR CONTA</span>
                </app-button>
              </div>
            </div>
          </app-card>  
        </div>
        <div class="pricePlans">
          <price-plans :data="plan"/>
        </div>
      </div>
  </div>
</template>
<script setup>
import AppCard from '../../components/AppCard/AppCard.vue';
import AppInput from '../../components/AppInput/AppInput.vue';
import AppButton from '../../components/AppButton/AppButton.vue';
import logo from '../../assets/img/logo.svg'
import AppLine from '../../components/AppLine/AppLine.vue';
import PricePlans from '../../components/PricePlans/PricePlans.vue';
import plans from '../../support/plans/plans.json'
import { useRoute } from 'vue-router'
import { onBeforeUnmount } from 'vue';

const route = useRoute()
const planId = Number(route.params.id)
const plan = plans.find(data => data.id === planId);
plan.chosenPlane = true

onBeforeUnmount(() => {
  plan.chosenPlane = false
});

</script>
<style lang="scss" scoped>
@import './AuthRegister-style.scss';

.checkbox {
    --background: #fff;
    --border: #d1d6ee;
    --border-hover: #d8daea;
    --border-active: #F30168;
    --tick: #fff;
    position: relative;
    input,
    svg {
        width: 18px;
        height: 18px;
        display: block;
    }
    input {
        -webkit-appearance: none;
        -moz-appearance: none;
        position: relative;
        outline: none;
        background: var(--background);
        border: none;
        margin: 0;
        padding: 0;
        cursor: pointer;
        border-radius: 4px;
        transition: box-shadow 0.3s;
        box-shadow: inset 0 0 0 var(--s, 1px) var(--b, var(--border));
        &:hover {
            --s: 2px;
            --b: var(--border-hover);
        }
        &:checked {
            --b: var(--border-active);
        }
    }
    svg {
        pointer-events: none;
        fill: none;
        stroke-width: 2px;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke: var(--stroke, var(--border-active));
        position: absolute;
        top: 0;
        left: 0;
        width: 18px;
        height: 18px;
        transform: scale(var(--scale, 1)) translateZ(0);
    }
    &.path {
        input {
            &:checked {
                --s: 2px;
                transition-delay: 0.4s;
                & + svg {
                    --a: 16.1 86.12;
                    --o: 102.22;
                }
            }
        }
        svg {
            stroke-dasharray: var(--a, 86.12);
            stroke-dashoffset: var(--o, 86.12);
            transition: stroke-dasharray 0.6s, stroke-dashoffset 0.6s;
        }
    }
    &.bounce {
        --stroke: var(--tick);
        input {
            &:checked {
                --s: 11px;
                & + svg {
                    animation: bounce 0.4s linear forwards 0.2s;
                }
            }
        }
        svg {
            --scale: 0;
        }
    }
}

@keyframes bounce {
    50% {
        transform: scale(1.2);
    }
    75% {
        transform: scale(0.9);
    }
    100% {
        transform: scale(1);
    }
}

</style>
<template>
  <div class="pricePlans"> 
    <app-card >
      <div class="tag">
        <div v-if="data.butUsed && !data.chosenPlane" class="tag_content">
          <span>MAIS USADO</span>
        </div>
      </div>
     <div class="pricePlans_container">
      <div class="pricePlans_content">
        <div class="pricePlans_content_header">
          <h1 class="title">{{ data.name }}</h1>
          <div class="price">
              <p v-if="data.price > 0">
                <span class="text-xl font-normal">R$<strong class="text-4xl">{{ data.price }}</strong>/mês</span>
              </p>
            <span v-else>
              <p>Grátis</p>
            </span>
          </div>
          <div class="taxa">
            <span class="pb-2">{{ data.taxa }} </span>
            <span>{{ data.uso }}</span>
          </div>
          <app-line />
            <p class="description">{{ data.description }}</p>
          <app-line />
        </div>
        <div v-if="!data.chosenPlane" class="button pt-5">
          <app-button
            theme="primary"
            font-size="text-lg"
            :label="'ESCOLHER ESSE PLANO'"
            @click="nextPage"
          >
          </app-button>
        </div>
        <div class="info">
          <div>
            <p class="serve"> {{ data.servers }} <span class="underline decoration">{{ data.state }}</span></p>
            <div class="list">
                <div class="flex">
                  <img :src="tickSquare" alt="square" class="pb-5 inline-flex">
                  <p>{{ data.data }}</p>
                </div>
                <div class="flex items-center">
                  <img :src="tickSquare" alt="square" >
                  <p>{{ data.asp }}</p>
                </div>
                <div class="flex items-center">
                  <img :src="tickSquare" alt="square" >
                  <p>{{ data.ftp }}</p>
                </div>
                <div class="flex items-center">
                  <img :src="tickSquare" alt="square" >
                  <p>{{ data.accountsEmail }}</p>
                </div>
                <div class="flex items-center">
                  <img :src="tickSquare" alt="square">
                  <p>{{ data.subdomain }} <span>{{ data.free  }}</span></p>
                </div>
            </div>
          </div>

          <div class="list">
            <p class="day"> {{ data.support }}</p>
            <p class="you"> {{ data.applications }}</p>
            <div class="list">
              <div class="flex items-center">
                <img :src="tickSquare" alt="square">
                <p>{{ data.wordpress }}</p>
              </div>
              <div class="flex items-center">
                <img :src="tickSquare" alt="square">
                <p>{{ data.drupal }}</p>
              </div>
              <div class="flex items-center">
                <img :src="tickSquare" alt="square">
                <p>{{ data.others }}</p>
              </div>
            </div>
          </div>
          <div v-if="data.freeMigration" class="list">
            <p class="serve"> {{ data.freeMigration }}</p>
            <div class="list">
              <div class="flex ">
                <img :src="tickSquare" alt="square" class="pb-5">
                <p>{{ data.sites }}</p>
              </div>
            </div>
          </div>

            <div class="list">
              <p class="you"> {{ data.you }}</p>
                <div class="list">
                  <div class="flex items-center">
                    <img :src="tickSquare" alt="square" class="pb-1">
                    <p>{{ data.webmail }}</p>
                  </div>
                  <div class="flex items-center">
                    <img :src="tickSquare" alt="square" class="pb-1">
                    <p>{{ data.antiSpam }}</p>
                  </div>
                  <div class="flex items-center">
                    <img :src="tickSquare" alt="square" class="pb-1">
                    <p>{{ data.panelDNS }}</p>
                  </div>
                  <div class="flex items-center">
                    <img :src="tickSquare" alt="square" >
                    <p>{{ data.controlPanel }}</p>
                  </div>
                  <div class="flex items-center">
                    <img :src="tickSquare" alt="square" class="pb-5">
                    <p>{{ data.phpSettings }}</p>
                  </div>
                  <div class="flex items-center">
                    <img :src="tickSquare" alt="square">
                    <p>{{ data.sslCertificate }}</p>
                  </div>
                  <div class="flex items-center">
                    <img :src="tickSquare" alt="square">
                    <p>{{ data.transfer }}</p>
                  </div>
                </div>
            </div>
        </div>
        <div v-if="data.chosenPlane" class="top-[75%] absolute z-20">
            <app-button
              theme="outline-black"
              font-size="text-lg"
              :label="'Trocar plano'"
              @click="goBack"
              >
            </app-button>
          </div>
      </div>
     </div>
    </app-card>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'; 
import AppCard from '../AppCard/AppCard.vue';
import AppButton from '../AppButton/AppButton.vue';
import tickSquare from '../../assets/img/tick-square.svg';
import AppLine from '../AppLine/AppLine.vue';

const props = defineProps({
  data:{
    type: Object,
    required: true
  }
})
  const router = useRouter()

  const nextPage = () => {
    router.push({ path: `/register/${props.data.id}` })
  };

  const goBack = () => {
    router.push({ path: '/plans' })
  }
</script>
<style lang="scss" scoped>
@import './PricePlans-style.scss';
</style>
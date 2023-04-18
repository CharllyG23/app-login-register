<template>
  <div class="info">
    <div>
      <p class="serve"> {{ item.servers }} <span class="underline decoration">{{ item.state }}</span></p>
      <div class="list">
          <div class="flex">
            <img :src="tickSquare" alt="square" class="pb-5 inline-flex">
            <p>{{ item.item }}</p>
          </div>
          <div class="flex items-center">
            <img :src="tickSquare" alt="square" >
            <p>{{ item.asp }}</p>
          </div>
          <div class="flex items-center">
            <img :src="tickSquare" alt="square" >
            <p>{{ item.ftp }}</p>
          </div>
          <div class="flex items-center">
            <img :src="tickSquare" alt="square" >
            <p>{{ item.accountsEmail }}</p>
          </div>
          <div class="flex items-center">
            <img :src="tickSquare" alt="square">
            <p>{{ item.subdomain }} <span>{{ item.free  }}</span></p>
          </div>
      </div>
    </div>

    <div class="list">
      <p class="day"> {{ item.support }}</p>
      <p class="you"> {{ item.applications }}</p>
      <div class="list">
        <div class="flex items-center">
          <img :src="tickSquare" alt="square">
          <p>{{ item.wordpress }}</p>
        </div>
        <div class="flex items-center">
          <img :src="tickSquare" alt="square">
          <p>{{ item.drupal }}</p>
        </div>
        <div class="flex items-center">
          <img :src="tickSquare" alt="square">
          <p>{{ item.others }}</p>
        </div>
      </div>
    </div>
    <div v-if="item.freeMigration" class="list">
      <p class="serve"> {{ item.freeMigration }}</p>
      <div class="list">
        <div class="flex ">
          <img :src="tickSquare" alt="square" class="pb-5">
          <p>{{ item.sites }}</p>
        </div>
      </div>
    </div>

      <div class="list">
        <p class="you"> {{ item.you }}</p>
          <div class="list">
            <div class="flex items-center">
              <img :src="tickSquare" alt="square" class="pb-1">
              <p>{{ item.webmail }}</p>
            </div>
            <div class="flex items-center">
              <img :src="tickSquare" alt="square" class="pb-1">
              <p>{{ item.antiSpam }}</p>
            </div>
            <div class="flex items-center">
              <img :src="tickSquare" alt="square" class="pb-1">
              <p>{{ item.panelDNS }}</p>
            </div>
            <div class="flex items-center">
              <img :src="tickSquare" alt="square" >
              <p>{{ item.controlPanel }}</p>
            </div>
            <div class="flex items-center">
              <img :src="tickSquare" alt="square" class="pb-5">
              <p>{{ item.phpSettings }}</p>
            </div>
            <div class="flex items-center">
              <img :src="tickSquare" alt="square">
              <p>{{ item.sslCertificate }}</p>
            </div>
            <div class="flex items-center">
              <img :src="tickSquare" alt="square">
              <p>{{ item.transfer }}</p>
            </div>
          </div>
      </div>
  </div>
</template>
<script setup>
import tickSquare from '../../assets/img/tick-square.svg';

defineProps({
  item: {
    type: Object,
    default: () => ({})
  }
})

</script>
<style lang="scss" scoped>
@import './PricePlansItems-style.scss';
</style>
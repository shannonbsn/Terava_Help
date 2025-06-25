<script setup>
import { onMounted } from 'vue'
import Swiper from 'swiper';

const cardsArray = [
  { name: 'Layla', image: new URL('../../assets/profil-layla.jpg', import.meta.url).href },
  { name: 'Jorge', image: new URL('../../assets/profil-jorge.jpg', import.meta.url).href },
  { name: 'Katerina', image: new URL('../../assets/profil-katerina.jpg', import.meta.url).href },
  { name: 'Katerina', image: new URL('../../assets/profil-katerina.jpg', import.meta.url).href },
  { name: 'Katerina', image: new URL('../../assets/profil-katerina.jpg', import.meta.url).href },
  { name: 'Katerina', image: new URL('../../assets/profil-katerina.jpg', import.meta.url).href },
]

const props = defineProps({
  headline: {
    type: String
  },
  larger:{
    type: Boolean,
    default: false
  },
  cards: {
    type: Array
  }
})

onMounted(() => {
  new Swiper('.swiper', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    setWrapperSize: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  })
})

const emits = defineEmits(['showTripView'])


</script>
<template>
  <div class="cross wrapper">
    <div class="subtitle flex">
      <h2>{{props.headline}}</h2>
      <a href="#" class="see-all">Voir plus</a>
    </div>
    <div class="swiper">
      <div class="swiper-wrapper">
        <div v-for="(card, i) in props.cards" :key="i" :class="['swiper-slide', 'card', { larger: props.larger }]"
          :style="{ backgroundImage: `url(${card.image})` }" @click="$emit('showTripView')">
          <span class="name">{{ card.name }}</span>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
h2{
  font-weight: 600;
}
.cross {
  width: 100%;
  max-width: 100%;
    overflow-x: auto;
}

.swiper {
  width: 100%;
  max-width: 100%;
  height: 150px;
  overflow: hidden;
}

.card {
  width: 150px;
  position: relative;
  background-position: center;
  background-size: cover;
  border-radius: 10px;
  box-shadow: 0px 4px 10px 0px #00000040;
}

.card.larger {
  width: 200px!important;
}

.card .name {
  position: absolute;
  left: 10px;
  bottom: 10px;
  color: white;
  font-weight: 700;
}

</style>

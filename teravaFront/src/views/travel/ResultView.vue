<script setup>
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
import MagicGrid from "magic-grid"
import { RouterLink } from 'vue-router';
import { onMounted, onUnmounted, reactive, ref } from 'vue'

const bodyClass = 'result-view'
let gridItems = [
  {
    country: 'Grèce',
    titre: 'Titre',
    image: new URL('../../assets/grid/item-01.jpg', import.meta.url).href,
    height: 250
  },
  {
    country: 'Pays',
    titre: 'Titre',
    image: new URL('../../assets/grid/item-02.jpg', import.meta.url).href,
    height: 350
  },
  {
    country: 'Pays',
    titre: 'Titre',
    image: new URL('../../assets/grid/item-03.jpg', import.meta.url).href,
    height: 200
  },
  {
    country: 'Pays',
    titre: 'Titre',
    image: new URL('../../assets/grid/item-04.jpg', import.meta.url).href,
    height: 300
  },
  {
    country: 'Pays',
    titre: 'Titre',
    image: new URL('../../assets/grid/item-05.jpg', import.meta.url).href,
    height: 150
  },
  {
    country: 'Pays',
    titre: 'Titre',
    image: new URL('../../assets/grid/item-06.jpg', import.meta.url).href,
    height: 200
  },
]

onMounted(() => {
  document.body.classList.add(bodyClass)

  let magicGrid = new MagicGrid({
    container: "#container",
    static: true,
    items: gridItems.length,
    gutter: 10,
    maxColumns: 2,
    useMin: true,
    useTransform: true,
    animate: true,
    center: true,
  });

  magicGrid.listen();
})

onUnmounted(() => {
  document.body.classList.remove(bodyClass)

})

</script>

<template>
  <TheHeader />
  <main>
    <div class="content">
      <a class="back" @click="$router.back()">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          class="lucide lucide-arrow-left-icon lucide-arrow-left">
          <path d="m12 19-7-7 7-7" />
          <path d="M19 12H5" />
        </svg>
      </a>
      <div class="breadcrumb">
        <span>Voyages</span>
      </div>
      <div id="container" class="grid-wrapper">
        <div v-for="item in gridItems" class="grid-item" :style="{
          backgroundImage: `url(${item.image})`,
          height: item.height + 'px'
        }">
          <div class="title-wrapper">
            <p>{{ item.country }}</p>
            <p class="title">{{ item.titre }}</p>
          </div>
        </div>
      </div>
    </div>

  </main>
  <TheFooter />
</template>

<style scoped>
.breadcrumb {
  height: 50px;
  display: flex;
  justify-content: center;
  font-weight: 600;
}

.breadcrumb span {
  position: relative;
}

.breadcrumb span::after {
  content: '';
  display: block;
  width: 150%;
  height: 2px;
  position: absolute;
  left: -25%;
  right: 10px;
  background: #000;
  border-radius: 3px;
}

.grid-wrapper {
  display: flex;
  flex-wrap: wrap;
}

.grid-item {
  width: 45%;
  flex-grow: 2;
  border-radius: 10px;
  height: 300px;
  position: relative;
  background-size: cover;
  background-position: center;
}

.grid-item .title-wrapper {
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: #fff;
}

.grid-item .title-wrapper p {
  margin: 0;
  font-size: 10px;
}

.grid-item .title-wrapper .title {
  font-weight: 600;
  font-size: 16px;
  margin: 0;
}
</style>

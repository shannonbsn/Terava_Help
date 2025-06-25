<script setup>
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
import { RouterLink } from 'vue-router';
import { onMounted, onUnmounted, reactive, ref, computed } from 'vue'

const percent = ref(0)
const target = 80
const radius = 52
const circumference = 2 * Math.PI * radius

let interval

onMounted(() => {
  interval = setInterval(() => {
    if (percent.value < target) {
      percent.value += 1
    } else {
      percent.value = target
      clearInterval(interval)
    }
  }, 15) // vitesse de l'animation (plus petit = plus rapide)
})

onUnmounted(() => {
  clearInterval(interval)
})

const offset = computed(() => circumference * (1 - percent.value / 100))
</script>

<template>
  <TheHeader />
  <main>
    <div class="content flex column">
      <div class="wrapper">
        <div id="current" class="img-wrapper">
          <img src="../assets/profil-layla.jpg">
        </div>
        <div id="match" class="img-wrapper">
          <img src="../assets/profil-joyce.jpg">
        </div>
      </div>
      <div class="circular-loader">
        <svg width="120" height="120">
          <circle class="bg" cx="60" cy="60" r="52" stroke-width="8" fill="none" />
          <circle class="progress" cx="60" cy="60" r="52" stroke-width="8" fill="none" :stroke-dasharray="circumference"
            :stroke-dashoffset="offset" />
        </svg>
        <span class="percent">{{ percent }}%</span>
      </div>
      <h1>C'est un match!</h1>
      <button class="btn outline">Discuter avec Flora</button>
      <button class="btn orange flex">Voir profil <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
          viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
          stroke-linejoin="round" class="lucide lucide-arrow-right-icon lucide-arrow-right">
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg></button>
    </div>

  </main>
  <TheFooter />
</template>

<style scoped>
.content {
  /* display: flex; */
  align-items: center;
  gap: 20px;
  justify-content: center;
}

.wrapper {
  margin: 0 auto;
  display: flex;
  margin-top: -20%;
  justify-content: center;
}

.img-wrapper {
  display: inline-block;
  width: 150px;
  height: 200px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 3px 0px 5px rgba(0, 0, 0, 0.3);
  outline: 10px solid transparent;
}

#current {
  transform: rotate(-15deg);
  z-index: 10;
}

#match {
  transform: rotate(15deg);
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.circular-loader {
  position: relative;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.circular-loader svg {
  transform: rotate(-90deg);
}

.circular-loader .bg {
  stroke: #eee;
}

.circular-loader .progress {
  stroke: var(--orange);
  transition: stroke-dashoffset 0.5s;
}

.circular-loader .percent {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: bold;
  color: var(--orange);
}

.btn {
  padding: 10px 40px;
}

.btn.flex {
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}
</style>

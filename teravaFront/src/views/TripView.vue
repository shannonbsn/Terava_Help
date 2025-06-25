<script setup>
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
import SingleTrip from '@/components/trip/SingleTrip.vue';
import { onMounted, onUnmounted } from 'vue'

const bodyClass = 'trip-view'

onMounted(() => {
  document.body.classList.add(bodyClass)
})

onUnmounted(() => {
  document.body.classList.remove(bodyClass)
})
</script>

<template>
  <TheHeader />
  <main class="flex column">
    <SingleTrip />
  </main>
  <TheFooter />
</template>

<style scoped>

</style>


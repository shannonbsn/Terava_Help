<script setup>
import Login from '@/components/login/Login.vue'
import { onMounted, onUnmounted } from 'vue'

const bodyClass = 'signin-view'

onMounted(() => {
  document.body.classList.add(bodyClass)
})

onUnmounted(() => {
  document.body.classList.remove(bodyClass)
})
</script>

<template>
  <main>
    <Login />
  </main>
</template>

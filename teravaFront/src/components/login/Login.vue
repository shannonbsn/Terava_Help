<script setup>
import { ref } from 'vue'
import OAuth from '@/components/login/OAuth.vue'

const showOAuth = ref(false)
</script>
<template>
  <OAuth v-if="showOAuth" />
  <div v-else class="content flex column">
    <div class="brand">
      <div class="logo">
        <img src="../../assets/logo.svg" alt="Logo Terava" />
      </div>
      <h1 class="slogan">Votre compagnon de voyage fiable !</h1>
    </div>
    <div class="buttons-wrapper flex column">
      <router-link to="/signup">
        <button class="btn blue">Créer un compte</button>
      </router-link>
      <button @click="showOAuth = true">Se connecter</button>
    </div>
  </div>
</template>

<style scoped>

.logo {
  width: 218px;
  display: flex;
  justify-content: center;
}

.logo img {
  width: 100%;
}

.slogan {
  margin: 20px 0;
  font-size: 1.5em;
}

.buttons-wrapper{
  gap:10px;
}

button{
  width:270px;
}
</style>

<script setup>
import router from '@/router';
import { h, ref } from 'vue'
import { useRoute } from 'vue-router'
</script>
<template>
  <header>
    <div class="header-wrapper">
      <router-link to="/board" class="logo">
        <img src="../assets/logo-mini.svg" alt="Logo Terava" />
      </router-link>
      <div class="account-menu">
        <img src="../assets/profil.jpg" alt="Photo profil" />
      </div>
    </div>
    <!-- <div class="search-bar">
      <input type="text" placeholder="Rechercher" />
    </div> -->
  </header>
</template>

<style scoped>
header {
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px 20px 0 20px;
  margin-bottom:30px;
}

.header-wrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.search-bar {
  width: 100%;
  margin: 0 auto;
  position: relative;
}

input[type="text"] {
  width: 100%;
  padding: 16px;
  padding-left: 46px;
  border: none;
  border-radius: 5px;
  background-color: var(--grey-light);
  font-size: 1em;
  line-height: 1.2em;
  font-family: 'Inter UI', sans-serif;
}

.search-bar::after {
  content: '';
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  background-image: url('../assets/search-icon.svg');
  background-size: cover;
}

.account-menu{
  width: 47px;
  height: 47px;
  border-radius: 50%;
  overflow: hidden;
}

.account-menu img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

<script setup>
import router from '@/router';
import { h, ref } from 'vue'
import { useRoute } from 'vue-router'
</script>
<template>
  <div id="oneTrip" class="wrapper">
    <div class="banner" style="background-image: url('../../assets/thumbnail-acores.jpg');">
      <a class="back" @click="$emit('close')">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          class="lucide lucide-arrow-left-icon lucide-arrow-left">
          <path d="m12 19-7-7 7-7" />
          <path d="M19 12H5" />
        </svg>
      </a>
      <img src="../../assets/thumbnail-acores.jpg" alt="Photo Arcores" />
      <h1>Trip Details</h1>
    </div>
    <div class="content">
      <div class="trip-details flex column block">
        <span class="flex"><img src="../../assets/plane-icon.svg" alt="Photo profil" />Portugal</span>
        <span class="flex"><img src="../../assets/calendar-icon.svg" alt="Photo profil" />20 mai - 4 juin</span>
        <div class="participants flex">
          <div class="thumbnail"><img src="../../assets/profil-bertrand.jpg" alt="Photo profil" /></div>
          <div class="thumbnail"><img src="../../assets/profil-katerina.jpg" alt="Photo profil" /></div>
          <div class="thumbnail"><img src="../../assets/profil-joyce.jpg" alt="Photo profil" /></div>
          <div class="thumbnail"><img src="../../assets/profil-jorge.jpg" alt="Photo profil" /></div>
          <div class="thumbnail"><img src="../../assets/profil-layla.jpg" alt="Photo profil" /></div>
        </div>
      </div>
      <button class="btn blue large">Rejoindre le voyage</button>
      <div class="block">
        <h2>à propos</h2>
        <p>À la recherche d’une escapade pour explorer la beauté naturelle des Açores — entre lacs volcaniques, sources
          chaudes, randonnées côtières et observation des baleines. L’idée est de profiter d’un voyage détendu mais
          dynamique, avec un équilibre entre aventure et moments de détente.</p>
      </div>
      <div class="block">
        <h2>Interests</h2>
        <div class="flex interests--list">
          <span class="btn outline interest icon"><img src="../../assets/detente-icon.png">Détente</span>
          <span class="btn outline interest icon"><img src="../../assets/nature-icon.png">Culture</span>
          <span class="btn outline interest icon"><img src="../../assets/urban-icon.png">Vie Urbaine</span>
        </div>
      </div>
      <div class="block">
        <h2>Destinations proches</h2>
        <div class="suggested-trip flex">
          <div class="thumbnail-trip"><img src="../../assets/thumbnail-poca.jpg" alt="Photo profil" /></div>
          <div class="thumbnail-trip"><img src="../../assets/thumbnail-caldeira.jpg" alt="Photo profil" /></div>
          <div class="thumbnail-trip"><img src="../../assets/thumbnail-lagoa.jpg" alt="Photo profil" /></div>
          <div class="thumbnail-trip"><img src="../../assets/thumbnail-ponta.jpg" alt="Photo profil" /></div>
        </div>
      </div>
      <div class="block">
        <h2>Organisé par</h2>
        <div class="organisator--wrapper flex">
          <div class="thumbnail"><img src="../../assets/profil-layla.jpg" alt="Photo profil" /></div>
          <div class="organisator--info">
            <h3>Layla</h3>
            <span>France</span>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>

.wrapper{
  max-width: var(--size-sm);
}

h2{
  margin-top:20px;
}
.back {
  position: absolute;
  transform: rotate(-90deg);
  width: 40px;
  height: 40px;
  top: 10px;
  color:white;
  left: 10px;
  z-index: 10;
}

.back svg {
  width: 100%;
  height: 100%;
}
.banner {
  width: 100%;
  height: 390px;
  position: relative;
  aspect-ratio: 1 / 1;
}

.banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

.banner h1 {
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
  font-size: 2em;
}

.content {
  margin-top: -20px;
  position: relative;
  z-index: 5;
  background-color: white;
  border-radius: 20px;
  padding: 20px;
}

.trip-details {
  gap: 10px;
}

.trip-details span{
  gap: 15px;
}

.trip-details img{
  width: 20px;
}

.participants {
  gap: 0;
}

.thumbnail {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: -15px;
}

.thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.block{
  margin-bottom: 30px;
}

.block h2{
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 10px;
}

.interests--list{
  gap: 10px;
  flex-wrap: wrap;
}

.interest{
  padding: 5px 20px;
  white-space: nowrap;
  font-size: 14px;
  color:var(--blue);
  border-radius: 30px;
  border-width: 3px;
  gap:10px;
}

.suggested-trip{
  flex-wrap: wrap;
  gap:10px
}

.thumbnail-trip{
  flex-grow: 2;
  width: 167px;
  height: 100px;
  border-radius: 10px;
  overflow: hidden;
}

.thumbnail-trip img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.organisator--wrapper{
  gap: 30px;
  align-items: center;

}

.organisator--wrapper .thumbnail{
  width: 60px;
  height: 60px;
}

.organisator--info span{
  text-transform: uppercase;
  color:var(--grey-medium);
}
</style>

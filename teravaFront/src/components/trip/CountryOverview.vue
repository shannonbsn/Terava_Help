<script setup>
import { ref } from 'vue';

const activeTab = ref('tab1');
</script>
<template>

  <div class="banner" style="background-image: url('../../assets/thumbnail-acores.jpg');">
    <a class="back" @click="$router.back()">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        class="lucide lucide-arrow-left-icon lucide-arrow-left">
        <path d="m12 19-7-7 7-7" />
        <path d="M19 12H5" />
      </svg>
    </a>
    <img src="../../assets/thumbnail-grece.jpg" alt="Photo Arcores" />
    <h1>Grèce</h1>
  </div>
  <div class="content">
    <div role="tablist" class="trip-details flex">
      <button role="tab" :aria-selected="activeTab === 'tab1'" aria-controls="tabpanel-tab1" id="tab1"
        @click="activeTab = 'tab1'">Information</button>
      <button role="tab" :aria-selected="activeTab === 'tab2'" aria-controls="tabpanel-tab2" id="tab2"
        @click="activeTab = 'tab2'">Voyages</button>
      <button role="tab" :aria-selected="activeTab === 'tab3'" aria-controls="tabpanel-tab3" id="tab3"
        @click="activeTab = 'tab3'">Bons plans</button>
    </div>
    <div class="wrapper">
      <div class="block" v-show="activeTab === 'tab1'" role="tabpanel" id="tabpanel-tab1" aria-labelledby="tab1">
        <h2>à propos</h2>
        <p>À la recherche d’une escapade pour explorer la beauté naturelle des Açores — entre lacs volcaniques, sources
          chaudes, randonnées côtières et observation des baleines. L’idée est de profiter d’un voyage détendu mais
          dynamique, avec un équilibre entre aventure et moments de détente.</p>
        <div class="block">
          <h2>Destinations</h2>
          <div class="suggested-trip flex">
            <div class="thumbnail-trip"><img src="../../assets/thumbnail-poca.jpg" alt="Photo profil" /></div>
            <div class="thumbnail-trip"><img src="../../assets/thumbnail-caldeira.jpg" alt="Photo profil" /></div>
            <div class="thumbnail-trip"><img src="../../assets/thumbnail-lagoa.jpg" alt="Photo profil" /></div>
            <div class="thumbnail-trip"><img src="../../assets/thumbnail-ponta.jpg" alt="Photo profil" /></div>
          </div>
        </div>
      </div>

      <div class="block" v-show="activeTab === 'tab2'" role="tabpanel" id="tabpanel-tab2" aria-labelledby="tab2">
        <div class="cards--list flex">
          <div class="thumbnail-trip">
            <img src="../../assets/thumbnail-poca.jpg" alt="Photo profil" />
            <div class="title-wrapper">
              <p>Grèce</p>
              <p><strong>Découvrir la Grèce</strong></p>
            </div>
          </div>
          <div class="thumbnail-trip">
            <img src="../../assets/thumbnail-poca.jpg" alt="Photo profil" />
            <div class="title-wrapper">
              <p>Grèce</p>
              <p><strong>Découvrir la Grèce</strong></p>
            </div>
          </div>
          <div class="thumbnail-trip">
            <img src="../../assets/thumbnail-caldeira.jpg" alt="Photo profil" />
            <div class="title-wrapper">
              <p>Grèce</p>
              <p><strong>Découvrir la Grèce</strong></p>
            </div>
          </div>
          <div class="thumbnail-trip">
            <img src="../../assets/thumbnail-lagoa.jpg" alt="Photo profil" />
            <div class="title-wrapper">
              <p>Grèce</p>
              <p><strong>Découvrir la Grèce</strong></p>
            </div>
          </div>
          <div class="thumbnail-trip">
            <img src="../../assets/thumbnail-ponta.jpg" alt="Photo profil" />
            <div class="title-wrapper">
              <p>Grèce</p>
              <p><strong>Découvrir la Grèce</strong></p>
            </div>
          </div>
        </div>
      </div>
      <div class="block" v-show="activeTab === 'tab3'" role="tabpanel" id="tabpanel-tab3" aria-labelledby="tab3">
        <div class="good-deals flex column">
          <div class="card">
            <div class="thumbnail-aside">
              <img src="../../assets/thumbnail-poca.jpg" alt="Photo profil" />
            </div>
            <div class="card-content">
              <h3>La semaine parfaite en Grèce</h3>
              <p>Balades en scooter à Paros, apéros face à la mer à Milos, couchers de soleil à Oia et criques secr...
              </p>
            </div>
          </div>
          <div class="card">
            <div class="thumbnail-aside">
              <img src="../../assets/thumbnail-gooddeals-01.jpg" alt="Photo profil" />
            </div>
            <div class="card-content">
              <h3>La semaine parfaite en Grèce</h3>
              <p>Balades en scooter à Paros, apéros face à la mer à Milos, couchers de soleil à Oia et criques secr...
              </p>
            </div>
          </div>
          <div class="card">
            <div class="thumbnail-aside">
              <img src="../../assets/thumbnail-gooddeals-02.jpg" alt="Photo profil" />
            </div>
            <div class="card-content">
              <h3>La semaine parfaite en Grèce</h3>
              <p>Balades en scooter à Paros, apéros face à la mer à Milos, couchers de soleil à Oia et criques secr...
              </p>
            </div>
          </div>
          <div class="card">
            <div class="thumbnail-aside">
              <img src="../../assets/thumbnail-gooddeals-03.jpg" alt="Photo profil" />
            </div>
            <div class="card-content">
              <h3>La semaine parfaite en Grèce</h3>
              <p>Balades en scooter à Paros, apéros face à la mer à Milos, couchers de soleil à Oia et criques secr...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
.back {
  position: absolute;
  width: 40px;
  height: 40px;
  top: 10px;
  color: white;
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
}

.banner h1 {
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
  font-size: 2em;
}

button[role="tab"] {
  text-align: left;
  padding: 10px 10px 5px 10px;
  position: relative;
  flex-grow: 2;
  width: fit-content;
}

button[role="tab"]:nth-child(2)[aria-selected="true"]::after {
  right: 0;
  left: inherit;
  width: 100%;
}

button[role="tab"]:last-child {
  text-align: right;
  position: relative;
}

button[role="tab"]:last-child[aria-selected="true"]::after {
  right: inherit;
  left: 0;
  display: block;
  width: 120%;
}

button[role="tab"][aria-selected="true"] {
  font-size: 16px;
  font-weight: 700;
}

button[role="tab"][aria-selected="true"]::after {
  content: '';
  position: absolute;
  right: 0;
  display: block;
  width: 130%;
  height: 3px;
  background-color: #000;
  margin-top: 5px;
  ;
  border-radius: 20px;
}

.content {
  position: relative;
  margin-top: -20px;
  z-index: 5;
  background-color: white;
  border-radius: 20px;
  padding: 0px 20px 20px 20px;
}

.trip-details {
  justify-content: flex-start !important;
  gap: 10px;
  margin-bottom: 20px;
}

.trip-details span {
  gap: 15px;
}

.trip-details img {
  width: 20px;
}

.block {
  margin-bottom: 30px;
}

.block h2 {
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 10px;
}

.suggested-trip {
  flex-wrap: wrap;
  gap: 10px
}

.thumbnail-trip {
  flex-grow: 2;
  width: 167px;
  height: 100px;
  border-radius: 10px;
  overflow: hidden;
}

.thumbnail-trip img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.cards--list {
  gap: 10px;
  flex-wrap: wrap;
}
.cards--list > div {
  width: 160px;
  height: 160px;
  aspect-ratio: 1 / 1;
  flex-grow: 2;
  position: relative;
}

.cards--list > div .title-wrapper {
  position: absolute;
  z-index: 2;
  left: 10px;
  bottom: 20px;
  color:#fff;
}

.cards--list>div .title-wrapper p{
  margin: 0;
}

.good-deals {
  gap: 20px;
}

.good-deals .card {
  width: 100%;
  display: flex;
  position: relative;
  gap: 20px;
  border-radius: 10px;
  overflow: hidden;
  background-color: var(--grey-lighter);
}

.good-deals .card .thumbnail-aside {
  width: 80%;
  height: auto;
  border-radius: 10px 0 0 10px;
  overflow: hidden;
}

.good-deals .card .thumbnail-aside img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.good-deals .card .card-content {
  width: 100%;
  height: 100%;
  padding: 10px 10px 15px 0;
  font-size: 14px;
  line-height: 1.3em;
}

.good-deals .card .card-content p{
  margin: 0;
  font-size: 12px;
  color: var(--grey-dark);
}

.good-deals .card:not(:first-child)::after {
  content:'';
  display: block;
  width: 100%;
  height: 120%;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(8px);
}
</style>

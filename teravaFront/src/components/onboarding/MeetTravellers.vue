<script setup>

</script>
<template>
  <h2>Rencontrer des voyageurs</h2>
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
    class="lucide lucide-waypoints-icon lucide-waypoints">
    <circle cx="12" cy="4.5" r="2.5" />
    <path d="m10.2 6.3-3.9 3.9" />
    <circle cx="4.5" cy="12" r="2.5" />
    <path d="M7 12h10" />
    <circle cx="19.5" cy="12" r="2.5" />
    <path d="m13.8 17.7 3.9-3.9" />
    <circle cx="12" cy="19.5" r="2.5" />
  </svg>
  <div class="users--wrapper flex">
    <div class="thumbnail"><img src="../../assets/profil-bertrand.jpg" alt="Photo profil" /></div>
    <div class="thumbnail"><img src="../../assets/profil-katerina.jpg" alt="Photo profil" /></div>
    <div class="thumbnail"><img src="../../assets/profil-joyce.jpg" alt="Photo profil" /></div>
    <div class="thumbnail"><img src="../../assets/profil-jorge.jpg" alt="Photo profil" /></div>
    <div class="thumbnail"><img src="../../assets/profil-layla.jpg" alt="Photo profil" /></div>
  </div>
</template>

<style scoped>
h2 {
  margin: 0;
  align-self: flex-start;
  font-size: 18px;
}

.users--wrapper .thumbnail {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  margin-left: -10px;
}

.users--wrapper .thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}


</style>

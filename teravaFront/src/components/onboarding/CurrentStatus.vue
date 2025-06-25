<script setup>
import router from '@/router';
import { h, ref, reactive } from 'vue'
import { useRoute } from 'vue-router'

</script>
<template>
  <div class="info-traveller flex">
    <div class="flex column">
      <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          class="lucide lucide-map-pin-icon lucide-map-pin">
          <path
            d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
          <circle cx="12" cy="10" r="3" />
        </svg> <strong>Madagascar</strong></span>
      <span class="looking">Des filles seulement</span>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil-icon lucide-pencil">
      <path
        d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
      <path d="m15 5 4 4" />
    </svg>
  </div>
</template>

<style scoped>
.info-traveller {
  padding: 15px;
  justify-content: space-between;
  border-radius: 10px;
  background: var(--orange);
  color: #fff;
}

.info-traveller span {
  display: flex;
  align-items: center;
  gap: 10px;
}

.info-traveller .flex {
  justify-content: center;
}

.info-traveller .looking {
  margin-left: 32px;
}
</style>

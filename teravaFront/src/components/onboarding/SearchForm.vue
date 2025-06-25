<script setup>
import router from '@/router';
import { h, ref, reactive } from 'vue'
import { useRoute } from 'vue-router'

const formData = reactive({
  keyword: '',
  country: '',
  city: ''
})
const form = ref(null)
const disabled = ref(false)
const readonly = ref(false)
</script>
<template>
  <h2>Chercher un voyage</h2>
  <var-form ref="form" :disabled="disabled" :readonly="readonly" scroll-to-error="start">
    <var-space direction="column" :size="[14, 0]">
      <var-input placeholder="Mots-clefs" v-model="formData.keyword" />
      <var-select placeholder="Choisir un pays" v-model="formData.country">
        <var-option label="France" />
        <var-option label="Pologne" />
        <var-option label="Brésil" />
      </var-select>
      <var-input placeholder="Chercher une ville" v-model="formData.city" />
    </var-space>
    <RouterLink to="/results">
      <button class="btn orange large">Chercher</button>
    </RouterLink>
  </var-form>
</template>

<style scoped>
form button {
  padding: 15px 20px;
  border-radius: 25px !important;
  margin-top: 20px;
}
</style>

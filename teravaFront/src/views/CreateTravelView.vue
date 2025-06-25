<script setup>
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
import { onMounted, onUnmounted } from 'vue'
import { reactive, ref } from 'vue'
import { z } from 'zod'
const bodyClass = 'create-travel-view'

onMounted(() => {
  document.body.classList.add(bodyClass)
})

onUnmounted(() => {
  document.body.classList.remove(bodyClass)
})


const formData = reactive({
  username: '',
  password: '',
  department: '',
  gender: undefined,
  license: false,
  range: 10,
  count: 0,
  group: [],
  score: 0,
  like: [],
  files: []
})
const form = ref(null)
const disabled = ref(false)
const readonly = ref(false)

const value = ref()
const value2 = ref()
const value3 = ref()
const value4 = ref()
const value5 = ref()
const value6 = ref()
const value7 = ref()
const value8 = ref()
const value9 = ref([])
const value10 = ref([])
const value11 = ref()
const value12 = ref([])
const value13 = ref()
const value14 = ref()
const value15 = ref([])
const value16 = ref()
const value17 = ref()
const value18 = ref([])

const options = ref([
  {
    label: 'Eat',
    value: 1,
  },
  {
    label: 'Sleep',
    value: 2,
  },
  {
    label: 'Play game',
    value: 3,
    disabled: true,
  },
])

const keyOptions = ref([
  {
    name: 'Eat',
    id: 1,
  },
  {
    name: 'Sleep',
    id: 2,
  },
  {
    name: 'Play game',
    id: 3,
    disabled: true,
  },
])

const files = ref([])

function handleAfterRead(file) {
  console.log(file)
}

let interests = [
  {
    id: 1,
    name: 'Nature',
    icon: 'nature',
  },
  {
    id: 2,
    name: 'Détente',
    icon: 'detente',
  },
  {
    id: 3,
    name: 'Vie urbaine',
    icon: 'urban',
  },
]

</script>

<template>
  <TheHeader />
  <main class="flex column">
    <a class="back" @click="$router.back()">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        class="lucide lucide-arrow-left-icon lucide-arrow-left">
        <path d="m12 19-7-7 7-7" />
        <path d="M19 12H5" />
      </svg>
      Retour
    </a>
    <h1>Créer un voyage</h1>
    <var-uploader class="upload-image" v-model="files" @after-read="handleAfterRead" />
    <var-select placeholder="Sélectionner un pays" v-model="value">
      <var-option label="Eat" />
      <var-option label="Sleep" />
    </var-select>
    <var-input placeholder="Titre" v-model="value" />
    <p>A propos du voyage</p>
    <var-input placeholder="Textarea" textarea v-model="value10" />
    <var-radio-group v-model="value">
      <var-radio :checked-value="0">Tout le monde</var-radio>
      <var-radio :checked-value="1">Filles uniquement</var-radio>
      <var-radio :checked-value="1">Garçons uniquement</var-radio>
    </var-radio-group>
    <p>Intérêts</p>
    <div class="interests--list">
      <button v-for="interest in interests" :key="interest.id" class="btn interest" @click="
          value12.includes(interest)
        ? value12.splice(value12.indexOf(interest), 1)
        : value12.push(interest)
        " :class="value12.includes(interest) ? 'active' : ''">
        <img :src="'../assets/' + interest.icon + '-icon.png'" />
        {{ interest.name }}
      </button>
    </div>
    <button class="btn blue large" @click="$router.push('/trip')">Créer voyage</button>
  </main>
  <TheFooter />
</template>

<style scoped>
/* .upload-image,
.upload-image .var-uploader__input {
  width: 100%;
} */
  .interests--list{
    margin-bottom: 20px;
  }
 .btn.interest {
  background: #f0f0f0;
  border:2px solid var(--blue);
  border-radius: 20px;
  padding: 5px 30px;
  width: fit-content;
  margin: 5px;
 }

 .btn.interest.active {
  background: var(--blue);
  color: white;
 }
</style>


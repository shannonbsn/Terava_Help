<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/userStore'
import { useProfileStore } from '@/stores/profileStore'
import axios from 'axios'
import authApi from '@/services/authApi'

const router = useRouter()
const userStore = useUserStore()
const profileStore = useProfileStore()

const step = ref(1)
const active = ref(0)

const formData = reactive({
  phone: '',
  firstname: '',
  lastname: '',
  gender: null,
  birthdate: '',
  files: [],
  research: '',
  username: '',
  email: '',
  password: '',
  password_confirmation: '',
  accept_policy: false
})

const files = ref([
  {
    url: 'https://varletjs.org/cat.jpg',
    cover: 'https://varletjs.org/cat.jpg'
  }
])

function nextStep() {
  if (step.value === 5) {
    submitForm()
  } else {
    active.value = (active.value + 1) % 5
    step.value++
  }
}

async function submitForm() {

  await authApi.get('/sanctum/csrf-cookie')
  
  if (!formData.password || formData.password !== formData.password_confirmation) {
    alert("Mot de passe manquant ou confirmation incorrecte.");
    return;
  }

  const userPayload = {
    username: formData.username,
    email: formData.email,
    password: formData.password,
    password_confirmation: formData.password_confirmation,
    accept_policy: formData.accept_policy
  }

  const profilePayload = {
    firstname: formData.firstname || null,
    lastname: formData.lastname || null,
    gender: formData.gender,
    birthdate: formData.birthdate,
    bio: formData.research || null,
    profile_picture: files.value[0]?.url || null,
    interests: null,
    user_id: userStore.user?.id || null
  }

  const response = await authApi.post('/register', userPayload)
  // const userSuccess = await userStore.register(userPayload)

  if (userSuccess && userStore.user?.id) {
    profilePayload.user_id = userStore.user.id
    const profileSuccess = await profileStore.create(profilePayload)

    if (profileSuccess) {
      router.push('/board')
    } else {
      alert(profileStore.error)
    }
  } else {
    alert(userStore.error)
  }
}
</script>

<template>
  <div class="content flex column">
    <var-steps :active="active">
      <var-step>Step1</var-step>
      <var-step>Step2</var-step>
      <var-step>Step3</var-step>
      <var-step>Step4</var-step>
      <var-step>Step5</var-step>
      <var-step>Step6</var-step>
    </var-steps>

    <transition name="slide-fade" mode="out-in">
      <div class="form-wrapper" :key="step">
        <template v-if="step === 1">
          <h2 class="heading">Création du compte</h2>
          <var-input placeholder="Nom d'utilisateur" :rules="v => !!v || 'Le nom utilisateur est requis'" v-model="formData.username" />
            <var-input placeholder="Adresse email" type="email" :rules="v => !!v || 'email requis' "v-model="formData.email" />
            <var-input type="password" placeholder="Mot de passe" :rules="v => !!v || 'mot de passe requis' "v-model="formData.password"/>
            <var-input type="password" placeholder="Confirmer le mot de passe" :rules="v => !!v || 'confirmation de mot de passe requis' " v-model="formData.password_confirmation"/>
            <var-checkbox v-model="formData.accept_policy">
              J'accepte la <a href="/privacy" target="_blank">politique de confidentialité</a>
            </var-checkbox>
          <button class="btn blue simple-icon" @click="nextStep">
            <img src="../../assets/arrow-right.svg" />
          </button>
        </template>

        <template v-else-if="step === 2">
          <h2 class="heading">Completez votre profil</h2>
          <var-space direction="column" :size="[14, 0]">
            <var-input placeholder="Prénom" :rules="v => !!v || 'Le prénom est requis'" v-model="formData.firstname" />
            <var-input placeholder="Nom" :rules="v => !!v || 'Le nom est requis'" v-model="formData.lastname" />
            <var-input type="date" :rules="v => !!v || 'La date de naissance est requise'" v-model="formData.birthdate" />
            <select v-model="formData.gender">
              <option value="homme">Homme</option>
              <option value="femme">Femme</option>
            </select>
          </var-space>
          <button class="btn blue simple-icon" @click="nextStep">
            <img src="../../assets/arrow-right.svg" />
          </button>
        </template>

        <template v-else-if="step === 3">
          <h2 class="heading">Quel est ton numéro de téléphone ?</h2>
          <var-input placeholder="Téléphone" :rules="v => !!v || 'Le téléphone est requis'" v-model="formData.phone" />
          <button class="btn blue simple-icon" @click="nextStep">
            <img src="../../assets/arrow-right.svg" />
          </button>
        </template>

        <template v-else-if="step === 4">
          <h2 class="heading">Ajoute une photo de profil</h2>
          <var-uploader v-model="files" />
          <button class="btn blue simple-icon" @click="nextStep">
            <img src="../../assets/arrow-right.svg" />
          </button>
        </template>

        <template v-else-if="step === 5">
          <h2 class="heading">Que recherches-tu ?</h2>
          <textarea placeholder="Je recherche..." v-model="formData.research" />
          <button class="btn blue simple-icon" @click="nextStep">
            <img src="../../assets/arrow-right.svg" />
          </button>
          <button class="btn blue simple-icon" @click="nextStep">
            <img src="../../assets/arrow-right.svg" />
          </button>
        </template>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(.55, 0, .1, 1);
}
.slide-fade-enter-from {
  transform: translateX(100%);
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
textarea {
  width: 100%;
  height: 50vh;
  padding: 20px;
  border: none;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.4);
  resize: none;
  font-size: 1.2em;
  line-height: 1.3em;
  font-family: 'Inter UI', sans-serif;
  color: #5a5a5a;
}
.content {
  position: relative;
  margin-top: 100px;
}
.form-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 2;
}
.simple-icon {
  position: absolute;
  bottom: 0;
  align-self: center;
}
</style>
<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/userStore'
import { useRouter } from 'vue-router'
import axios from 'axios'

const router = useRouter()
const showSignUpForm = ref(false)

const formData = ref({
  email: '',
  password: ''
})

const errors = ref({})
const userStore = useUserStore()

function creerCompte() {
  showSignUpForm.value = true
}

function retour() {
  showSignUpForm.value = false
}

async function validateForm() {
  errors.value = {}

  if (!formData.value.email || !/\S+@\S+\.\S+/.test(formData.value.email)) {
    errors.value.email = 'Mot de passe ou email invalide'
  }

  if (!formData.value.password || formData.value.password.length < 6) {
    errors.value.password = 'Mot de passe ou email invalide'
  }

  if (Object.keys(errors.value).length === 0) {
    try {
      // ➤ Étape 1 : appel CSRF-cookie Sanctum
      await axios.get('http://localhost:8000/sanctum/csrf-cookie', {
        withCredentials: true
      })

      // ➤ Étape 2 : tentative de connexion via Pinia
      const success = await userStore.login({
        email: formData.value.email,
        password: formData.value.password
      })

      if (success) {
        router.push('/board')
      } else {
        alert('Erreur lors de la connexion : ' + userStore.error)
      }
    } catch (err) {
      console.error('Erreur de connexion', err)
      alert('Erreur technique lors de la connexion.')
    }
  }
}
</script>

<template>
  <div class="content flex column">
    <!-- Affichage de l'écran principal -->
    <template v-if="!showSignUpForm">
      <div class="brand">
        <div class="logo">
          <img src="../../assets/logo.svg" alt="Logo Terava" />
        </div>
        <h1 class="slogan">Votre compagnon de voyage fiable !</h1>
      </div>
      <div class="buttons-wrapper flex column">
        <button class="btn outline icon" @click="creerCompte">
          <img src="../../assets/apple-icon.svg" alt="Icone apple"> S'inscrire avec Apple
        </button>
        <button class="btn outline icon" @click="creerCompte">
          <img src="../../assets/facebook-icon.svg" alt="Icone facebook"> S'inscrire avec Facebook
        </button>
        <button class="btn outline icon" @click="creerCompte">S'inscrire avec Google</button>
        <button class="btn outline icon" @click="creerCompte">
          <img src="../../assets/mail-icon.svg" alt="Icone Email"> S'inscrire avec Email
        </button>
      </div>
      <a href="" class="back" @click="retour">Retour</a>
    </template>

    <!-- Affichage du formulaire de création de compte -->
    <template v-else>
      <h2>Se connecter</h2>
      <form @submit.prevent="validateForm">

        <var-input type="email" placeholder="Email" v-model="formData.email"/>
        <p v-if="errors.email" class="error">{{ errors.email }}</p>

        <var-input type="password" placeholder="Mot de passe" v-model="formData.password"/>
        <p v-if="errors.password" class="error">{{ errors.password }}</p>

        <button type="submit" class="btn blue">Se connecter</button>
      </form>
      <button class="btn outline" @click="retour">Retour</button>
    </template>
  </div>
</template>

<style scoped>
.brand{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  width: 218px;
  display: flex;
  justify-content: center;
}

.logo img {
  width: 100%;
}

.buttons-wrapper {
  gap: 10px;
}

.btn{
  color:#000;
  width: 270px;
}

.btn.outline {
  border-color: var(--orange);
}

.error {
  color: red;
  font-size: 0.9em;
}
</style>

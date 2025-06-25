<template>
  <div style="padding: 20px; max-width: 800px; margin: 0 auto;">
    <h1>🔧 Debug API Laravel ↔ Vue.js</h1>
    
    <div style="margin: 20px 0;">
      <h3>Étape 1: Test de base</h3>
      <button @click="testBasicConnection" style="padding: 10px 20px; margin: 5px; background: #007bff; color: white; border: none; border-radius: 5px;">
        Test connexion de base
      </button>
      
      <button @click="testGetUsers" style="padding: 10px 20px; margin: 5px; background: #28a745; color: white; border: none; border-radius: 5px;">
        GET /api/users
      </button>
      
      <button @click="testCreateUser" style="padding: 10px 20px; margin: 5px; background: #dc3545; color: white; border: none; border-radius: 5px;">
        POST /api/users
      </button>
    </div>

    <div v-if="loading" style="padding: 15px; background: #fff3cd; border: 1px solid #ffeaa7; border-radius: 5px; margin: 10px 0;">
      ⏳ Test en cours...
    </div>

    <div v-if="results.length > 0" style="margin-top: 20px;">
      <h3>Résultats des tests :</h3>
      <div v-for="(result, index) in results" :key="index" 
           :style="{
             padding: '15px',
             margin: '10px 0',
             borderRadius: '5px',
             border: '1px solid',
             backgroundColor: result.success ? '#d4edda' : '#f8d7da',
             borderColor: result.success ? '#c3e6cb' : '#f5c6cb',
             color: result.success ? '#155724' : '#721c24'
           }">
        <h4>{{ result.title }}</h4>
        <p><strong>Statut:</strong> {{ result.success ? '✅ Succès' : '❌ Échec' }}</p>
        <p><strong>Message:</strong> {{ result.message }}</p>
        <details v-if="result.details">
          <summary>Détails techniques</summary>
          <pre style="background: #f8f9fa; padding: 10px; border-radius: 3px; overflow-x: auto;">{{ result.details }}</pre>
        </details>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import api from '@/services/api'

const loading = ref(false)
const results = ref([])

function addResult(title, success, message, details = null) {
  results.value.unshift({
    title,
    success,
    message,
    details,
    timestamp: new Date().toLocaleTimeString()
  })
}

async function testBasicConnection() {
  loading.value = true
  
  try {
    // Test si on peut joindre le serveur
    const response = await fetch('http://localhost:8000', { 
      method: 'GET',
      mode: 'no-cors' // Pour éviter les erreurs CORS sur ce test
    })
    
    addResult(
      'Test de connexion serveur',
      true,
      'Le serveur Laravel répond sur http://localhost:8000'
    )
  } catch (error) {
    addResult(
      'Test de connexion serveur',
      false,
      'Impossible de joindre http://localhost:8000 - Vérifiez que Laravel tourne',
      error.message
    )
  }
  
  loading.value = false
}

async function testGetUsers() {
  loading.value = true
  
  try {
    const response = await api.get('/users')
    
    addResult(
      'GET /api/users',
      true,
      `Succès ! Code: ${response.status}`,
      JSON.stringify(response.data, null, 2)
    )
  } catch (error) {
    let errorMessage = 'Erreur inconnue'
    let errorDetails = error.message
    
    if (error.response) {
      errorMessage = `Erreur serveur ${error.response.status}`
      errorDetails = JSON.stringify({
        status: error.response.status,
        statusText: error.response.statusText,
        data: error.response.data,
        url: error.config?.url
      }, null, 2)
    } else if (error.request) {
      errorMessage = 'Pas de réponse du serveur (problème réseau/CORS)'
      errorDetails = 'La requête a été envoyée mais aucune réponse reçue. Vérifiez:\n- Que Laravel tourne\n- La configuration CORS\n- L\'URL de l\'API'
    }
    
    addResult('GET /api/users', false, errorMessage, errorDetails)
  }
  
  loading.value = false
}

async function testCreateUser() {
  loading.value = true
  
  const testUser = {
    username: 'test.debug.' + Date.now(),
    email: `test.debug.${Date.now()}@example.com`,
    password: 'password123',
    accept_policy: true
  }
  
  try {
    const response = await api.post('/users', testUser)
    
    addResult(
      'POST /api/users',
      true,
      `Utilisateur créé avec succès ! Code: ${response.status}`,
      JSON.stringify(response.data, null, 2)
    )
  } catch (error) {
    let errorMessage = 'Erreur inconnue'
    let errorDetails = error.message
    
    if (error.response) {
      errorMessage = `Erreur serveur ${error.response.status}`
      
      if (error.response.status === 422) {
        errorMessage += ' - Erreur de validation'
      } else if (error.response.status === 500) {
        errorMessage += ' - Erreur interne du serveur'
      }
      
      errorDetails = JSON.stringify({
        status: error.response.status,
        statusText: error.response.statusText,
        data: error.response.data,
        url: error.config?.url,
        sentData: testUser
      }, null, 2)
    } else if (error.request) {
      errorMessage = 'Pas de réponse du serveur (problème réseau/CORS)'
      errorDetails = 'La requête a été envoyée mais aucune réponse reçue.'
    }
    
    addResult('POST /api/users', false, errorMessage, errorDetails)
  }
  
  loading.value = false
}
</script>
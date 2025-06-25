import { defineStore } from 'pinia'
import api from '@/services/api'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    error: null,
  }),

  actions: {
    async register(userData) {
      try {
        console.log('🔵 REGISTER appelé avec:', userData)
        console.log('🔵 URL appelée:', api.defaults.baseURL + '/users')
        
        const response = await api.post('/users', userData)
        this.user = response.data
        this.error = null
        return true
      } catch (error) {
        console.error('🔴 Erreur dans REGISTER:', error)
        this.handleError(error)
        return false
      }
    },

    async login(credentials) {
      try {
        console.log('🟢 LOGIN appelé avec:', credentials)
        console.log('🟢 URL qui sera appelée:', api.defaults.baseURL + '/login')
        
        const response = await api.post('/login', credentials)
        console.log('🟢 Réponse LOGIN reçue:', response.data)
        
        this.user = response.data.user || null
        this.error = null
        return true
      } catch (error) {
        console.error('🔴 Erreur dans LOGIN:', error)
        console.error('🔴 URL qui a échoué:', error.config?.url)
        console.error('🔴 Data envoyée:', error.config?.data)
        this.handleError(error)
        return false
      }
    },

    handleError(error) {
      console.error('Erreur API', error)
      
      if (error.response) {
        console.error('Status:', error.response.status)
        console.error('Data:', error.response.data)
        this.error = error.response.data.message || JSON.stringify(error.response.data)
      } else if (error.request) {
        this.error = 'Pas de réponse du serveur'
      } else {
        this.error = error.message
      }
      
      if (error.response?.data?.errors) {
        console.table(error.response.data.errors)
      }
    }
  }
})
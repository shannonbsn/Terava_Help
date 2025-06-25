import { defineStore } from 'pinia'
import api from '@/services/api'

export const useProfileStore = defineStore('profile', {
  state: () => ({
    profile: null,
    error: null,
  }),
  actions: {
    async create(profileData) {
      try {
        const response = await api.post('/profiles', profileData)
        this.profile = response.data
        this.error = null
        return true
      } catch (error) {
        console.error('Erreur profile', error)
        this.error = error.response?.data?.message || error.message
        return false
      }
    }
  }
})
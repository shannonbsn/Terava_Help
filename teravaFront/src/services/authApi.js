import axios from 'axios'

const authApi = axios.create({
  baseURL: 'http://127.0.0.1:8000',
  withCredentials: true,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
})

// Intercepteur pour ajouter le token CSRF automatiquement
authApi.interceptors.request.use(config => {
  // Récupérer le token XSRF depuis les cookies
  const token = getCookie('XSRF-TOKEN')
  if (token) {
    config.headers['X-XSRF-TOKEN'] = decodeURIComponent(token)
  }
  
  // Alternative: récupérer le token depuis les meta tags (si configuré)
  const csrfToken = document.querySelector('meta[name="csrf-token"]')
  if (csrfToken) {
    config.headers['X-CSRF-TOKEN'] = csrfToken.getAttribute('content')
  }
  
  return config
}, error => {
  return Promise.reject(error)
})

// Intercepteur pour gérer les erreurs globalement
authApi.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 419) {
      console.warn('🔄 Token CSRF expiré, tentative de récupération...')
      // Optionnel: recharger la page ou récupérer un nouveau token
    }
    return Promise.reject(error)
  }
)

function getCookie(name) {
  const matches = document.cookie.match(new RegExp(
    '(?:^|; )' + name.replace(/([$?*|{}\[\]\\\/+^])/g, '\\$1') + '=([^;]*)'
  ))
  return matches ? matches[1] : undefined
}

export default authApi
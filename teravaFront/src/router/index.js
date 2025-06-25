import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUpView from '@/views/SignUpView.vue'
import OnBoardingView from '@/views/OnBoardingView.vue'
import TripView from '@/views/TripView.vue'
import CountryOverview from '@/components/trip/CountryOverview.vue'
import CreateTravelView from '@/views/CreateTravelView.vue'
import ResultView from '@/views/travel/ResultView.vue'
import MatchingView from '@/views/MatchingView.vue'
import SignUpForm from '@/components/login/SignUpForm.vue'
// import SignUpView from '@/views/SignUpView.vue'
import CurrentStatus from '@/components/onboarding/CurrentStatus.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUpView,
    },
    {
      path: '/board',
      name: 'board',
      component: OnBoardingView,
    },
    {
      path: '/results',
      name: 'results',
      component: ResultView,
    },
    {
      path: '/trip',
      name: 'trip',
      component: TripView,
    },
    {
      path: '/country',
      name: 'country',
      component: CountryOverview,
    },
    {
      path: '/travel/create',
      name: 'create-travel',
      component: CreateTravelView,
    },
    {
      path: '/match',
      name: 'match',
      component: MatchingView,
    },
    {
      path: '/signupmail',
      name: 'signupmail',
      component: SignUpForm
    },
    {
      path: '/debug-api',
      name: 'debug-api',
      component: () => import('@/views/DebugAPI.vue') // ou le bon chemin
    }
  ],
})



export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Auth from '../views/Auth.vue'
import SignUpAttendee from '../views/AttendeeSignUp.vue'
import ApplyAttendee from '../views/attendeeForm.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signup/attendee',
    name: 'Sign Up Attendee',
    component: SignUpAttendee
  },
  {
    path: '/apply/attendee',
    name: 'Apply Attendee',
    component: ApplyAttendee
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

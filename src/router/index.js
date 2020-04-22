import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Apply from '../views/Apply.vue'
import SignUpAttendee from '../views/AttendeeSignUp.vue'
import ApplyAttendee from '../views/attendeeForm.vue'
import Status from '../views/status.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/apply',
    name: 'Apply',
    component: Apply
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
  },
  {
    path: '/status',
    name: 'Status',
    component: Status
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

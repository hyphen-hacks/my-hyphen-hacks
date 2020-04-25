import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.scss'
import firebase from 'firebase/app'
import moment from 'moment'
import swal from "sweetalert"
import * as Sentry from '@sentry/browser';
import 'firebase/analytics'
import 'firebase/performance'
import 'firebase/remote-config'
import 'firebase/auth'
import 'firebase/firestore'
const version = require("../package").version
const firebaseConfig = {
  apiKey: "AIzaSyCvP2O35KnfzOghBF6Ou3bQcD6xCkmeLb0",
  authDomain: "hyphen-hacks-2020.firebaseapp.com",
  databaseURL: "https://hyphen-hacks-2020.firebaseio.com",
  projectId: "hyphen-hacks-2020",
  storageBucket: "hyphen-hacks-2020.appspot.com",
  messagingSenderId: "288103005258",
  appId: "1:288103005258:web:526417a4d80c8a7b4c3ab3",
  measurementId: "G-KMERTZ69XK"
};
firebase.initializeApp(firebaseConfig)
Vue.prototype.$firebase = firebase
Vue.prototype.$moment = moment
Vue.prototype.$swal = swal
Vue.config.productionTip = false
if (window.location.hostname != "localhost") {
  Vue.prototype.$analytics = firebase.analytics()
  Sentry.init({ dsn: 'https://b86c672475de48299fdfb24ff92988e7@o130965.ingest.sentry.io/5211792', release: `My-Hyphen-Hacks@${version}`});
} else {
  Vue.prototype.$analytics = {

  }
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

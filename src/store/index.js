import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: false,
    firebaseLoaded: false,
    loading: true,
    api: "https://2020.hyphen-hacks.com",
    attendeeAppSaved: true,
    attendeeApplicationModel: {
      firstName: "",
      lastName: "",
      email: "",
      zip: "",
      birthday: "",
      gender: "",
      race: {},
      school: "",
      graduation: "",
      whyDoYouWantToAttend: "",
      experienceSoftware: "",
      experienceHardware: "",
      experienceHackathon: "",
      experienceTeamCoding: "",
      descriptionCompScieExp: "",
      laptop: "",
      foodAllergies: {},
      dietaryRestrictions: {},
      accommodations: "",
      shirtSize: "",
      referrers: {},
      comments: "",
      agreeTerms: false,
      agreePrivacy: false

    }
  },
  getters: {
    attendeeAppSaved(state) {
      return state.attendeeAppSaved
    },
    attendeeApplication(state) {
      return state.attendeeApplicationModel
    },
    api(state) {
      if (window.location.hostname === "localhost") {
        return "http://localhost:3005"
      } else {
        return state.api
      }

    },
    loading(state) {
      return state.loading
    },
    user(state) {
      return state.user
    },
    firebaseLoaded(state) {
      return state.firebaseLoaded
    }
  },
  mutations: {
    attendeeAppSaved(state, saved) {
      state.attendeeAppSaved = saved
    },
    attendeeApplication(state, app) {
      state.attendeeApplicationModel = app
    },
    updateApplicationItem(state, data) {
      switch (data.app) {
        case "attendee":
          state.attendeeApplicationModel[data.key] = data.value
      }

    },
    loading(state, load) {
      state.loading = load
    },
    user(state, user) {
      return state.user = user
    },
    firebaseLoaded(state, firebaseLoaded) {
      return state.firebaseLoaded = firebaseLoaded
    }
  },
  actions: {
  },
  modules: {
  }
})

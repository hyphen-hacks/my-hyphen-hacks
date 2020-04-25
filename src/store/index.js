import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: false,
    firebaseLoaded: false,
    loading: true,
    api: "https://2020.hyphen-hacks.com",
    token: "",
    attendeeAppSaved: true,
    attendeeApplicationErrors: {},
    mentorApplicationModel:{
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      company: "",
      companyPosition: "",
      expAttending: "",
      expMentoringJudging: "",
      expWorkingWithStudents: "",
      areasOfExpertise: "",
      foodAllergies: {},
      dietaryRestrictions: {},
      accommodations: "",
      referrers: {},
      shirtSize: "",
      comments: "",
      agreeTerms: false,
      agreePrivacy: false,
      agreeApplication: false
    },
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
      descriptionCompSciExp: "",
      laptop: "",
      foodAllergies: {},
      dietaryRestrictions: {},
      accommodations: "",
      shirtSize: "",
      referrers: {},
      comments: "",
      team: "",
      agreeTerms: false,
      agreePrivacy: false

    },
    showErrors: false
  },
  getters: {
    token(state) {
      return state.token
    },
    showErrors(state) {
      return state.showErrors
    },
    attendeeAppErrors(state) {
      return state.attendeeApplicationErrors
    },
    attendeeAppSaved(state) {
      return state.attendeeAppSaved
    },
    attendeeApplication(state) {
      return state.attendeeApplicationModel
    },
    mentorApplication(state) {
      return state.mentorApplicationModel
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
    setToken(state, token) {
      state.token = token
    },
    showErrors(state) {
      state.showErrors = true
    },

    attendeeAppSaved(state, saved) {
      state.attendeeAppSaved = saved
    },
    attendeeApplication(state, app) {
      state.attendeeApplicationModel = app
    },
    mentorApplication(state, app) {
      state.mentorApplicationModel = app
    },
    updateApplicationItem(state, data) {
      switch (data.app) {
        case "attendee":
          state.attendeeApplicationModel[data.key] = data.value
          break
        case "mentor":
          console.log("update mentor", data.key, data.value)
          state.mentorApplicationModel[data.key] = data.value
      }

    },
    updateValidation(state, data) {

          state.attendeeApplicationErrors[data.key] = data.value

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
  modules: {}
})

<template>
  <div>
    <navBar title="Attendee Application" :saved="saved" :saveStatus="true"></navBar>
    <form @submit.prevent class="form" @keypress="startSave">
      <div class="screen--wide">
        <h1 class="heading--large">Apply For Hyphen-Hacks 2020</h1>
        <p class="desc">Because Hyphen-Hacks is a free event, we must limit the number of people who get accepted into
          Hyphen-Hacks. Please complete our short application process to attend Hyphen-Hacks 2020.</p>
        <p class="desc">We use this information to vet our attendees and to better understand what audiences we are
          reaching.</p>
        <p class="desc">This information is just used internally and is never shared with anyone else.</p>
        <p class="desc">Feel free to come back to this form anytime, your answers are automatically saved.</p>
      </div>
      <div class="screen--wide">
        <h2 class="heading">Who are you?</h2>
        <div class="input__row--2">
          <formInput title="First Name" inputType="text" v-model="applicationModel.firstName"></formInput>
          <formInput title="Last Name" inputType="text" v-model="applicationModel.lastName"></formInput>
        </div>
        <div class="input__row">
          <formInput title="Email" inputType="email"
                     desc="This email will be used for all further communications including the status of your application"
                     v-model="applicationModel.email"></formInput>
        </div>
        <div class="input__row">
          <formInput title="Zipcode" inputType="zipcode"
                     desc="We aggregate this data to figure out how much of the Bay Area we are reaching"
                     v-model="applicationModel.zip"></formInput>
        </div>
        <div class="input__row--2">
          <formInput title="Birthday" inputType="date"
                     desc="We use this information to verify you are eligible for Hyphen-Hacks"
                     v-model="applicationModel.birthday"></formInput>
          <formInput title="Gender" inputType="text"
                     desc="We agregate this data to figure out what genders we are reaching"
                     v-model="applicationModel.gender"></formInput>
        </div>
        <div class="input__row">
          <formInput title="Race/Ethnicity" inputType="text"
                     desc="We aggregate this data to figure out what races/elasticities we are reaching"
                     v-model="applicationModel.race"></formInput>
        </div>
        <div class="input__row--2">
          <formInput title="School" inputType="text"
                     desc="We aggregate this data to learn what schools we are reaching."
                     v-model="applicationModel.school"></formInput>
          <formInput title="Year of Graduation" inputType="text"
                     desc="We use this data to verify your eligibility for Hyphen-Hacks as well as aggregate data to figure out what grades we are reaching."
                     v-model="applicationModel.graduation"></formInput>
        </div>
      </div>
      <div class="screen--wide">
        <h2 class="heading">Why do you want to attend?</h2>
        <div class="input__row">
          <formInput title="Why are you interested in attending Hyphen-Hacks?" inputType="longform"
                     v-model="applicationModel.whyAreYouInterested"></formInput>
        </div>
        <div class="input__row">
          <formInput title="How much experience do you have with software development?" inputType="text"
                     v-model="applicationModel.softwareExperience"></formInput>
        </div>
        <div class="input__row">
          <formInput title="How much experience do you have with hackathons?" inputType="text"
                     v-model="applicationModel.hackathonExperience"></formInput>
        </div>
        <div class="input__row">
          <formInput title="How much experience do you have with coding in teams?" inputType="text"
                     v-model="applicationModel.teamCodingExperience"></formInput>
        </div>
      </div>
      <div class="screen--wide">
        <h2 class="heading">Thats it!</h2>
        <p class="desc">Thank you so much for taking the time to apply to Hyphen-Hacks! We can't wait to see you. Press
          the button below to submit your application.</p>
        <button type="submit" class="btn">SUBMIT!</button>
      </div>
    </form>
  </div>
</template>
<script>
  import formInput from "@/components/formInput.vue"
  import navBar from "@/components/nav.vue"

  let timeout = null
  export default {
    name: "attendeeApplicationForm",
    components: {formInput, navBar},
    data() {
      return {
        saved: true,
        applicationModel: {
          firstName: "",
          lastName: "",
          email: "",
          zip: "",
          birthday: "",
          gender: "",
          race: "",
          school: "",
          graduation: "",
          whyAreYouInterested: "",
          softwareExperience: "",
          hackathonExperience: "",
          teamCodingExperience: ""
        }
      }
    },
    created() {
      this.$store.commit("loading", true)
      if (!this.user) {
        this.$router.push('/signup/attendee')
      } else {
        console.log("attende form", this.user.uid)
        this.$firebase.firestore().collection("attendeeApplicationsIP").doc(this.user.uid).get().then(doc => {
          if (doc.exists) {
            this.applicationModel = doc.data().data
          } else {
            this.applicationModel.email = this.user.email
          }
          this.$store.commit("loading", false)
        })

        this.$firebase.firestore().collection("users").doc(this.user.uid).set({
          name: this.user.displayName ? this.user.displayName : "",
          email: this.user.email,
          emailVerified: this.user.emailVerified,
          uid: this.user.uid,
          photoURL: this.user.photoURL ? this.user.photoURL : "",
          provider: this.user.providerData ? this.user.providerData : [],
          lastSeen: this.$moment().unix(),
          intent: "applyAttendee"
        })
      }
    },
    computed: {
      user() {
        return this.$store.getters.user
      }
    },
    methods: {
      save() {
        timeout = null
        this.$firebase.firestore().collection("attendeeApplicationsIP").doc(this.user.uid).set({
          time: this.$moment().unix(), data: this.applicationModel
        }, {merge: true}).then(() => {
          this.saved = true
        })

      },
      startSave() {
        this.saved = false

        window.clearTimeout(timeout)
        timeout = window.setTimeout(() => this.save(), 1000)
      }
    }
  }
</script>
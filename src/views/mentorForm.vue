<template>
  <div>
    <navBar title="Mentor Application" :saved="saved()" :saveStatus="true"></navBar>
    <form @submit.prevent="submit()" class="form">
      <div class="screen--wide">
        <h1 class="heading--large">Mentor at Hyphen-Hacks 2020</h1>
        <p class="desc">Thank you so much for your interest in mentoring at Hyphen-Hacks! Please fill out this short application to help us figure out if Hyphen-Hacks will be a good fit.</p>
        <p class="desc">This information is just used internally and is never shared with anyone else.</p>
        <p class="desc">Feel free to come back to this form anytime, your answers are automatically saved.</p>
      </div>
      <div class="screen--wide">
        <h2 class="heading">Who are you?</h2>
        <div class="input__row--2">
          <formInput title="First Name" inputType="text" data="firstName" v-on:save="startSave"></formInput>
          <formInput title="Last Name" inputType="text" data="lastName" v-on:save="startSave"></formInput>
        </div>
        <div class="input__row--2">
          <formInput title="Email" inputType="email"
                     desc="This email will be used for all further communications including the status of your application"
                     data="email" v-on:save="startSave"></formInput>
          <formInput title="Phone Number" inputType="phone"
                     desc="This phone number will be used to contact you if we can't reach you during the event."
                     data="phoneNumber" v-on:save="startSave"></formInput>
        </div>

      </div>
      <div class="screen--wide">
        <h2 class="heading">What is your previous experience?</h2>
        <div class="input__row">
          <formInput title="What company/program are you affiliated with?" inputType="text"
                     data="company" v-on:save="startSave"></formInput>
        </div>
        <div class="input__row">
          <formInput title="What is your position there?" inputType="text"
                     data="companyPosition" v-on:save="startSave"></formInput>
        </div>
        <div class="input__row">
          <formInput title="Please provide a brief description of your previous experience ATTENDING hackathons" inputType="longform"
                     data="expAttending" v-on:save="startSave"></formInput>
        </div>
        <div class="input__row">
          <formInput title="Please provide a brief description of your previous experience MENTORING or JUDGING hackathons" inputType="longform"
                     data="expMentoringJudging" v-on:save="startSave"></formInput>
        </div>
        <div class="input__row">
        <formInput title="Please provide a brief description of your previous experience working with high school students in general" inputType="longform"
                   data="expWorkingWithStudents" v-on:save="startSave"></formInput>
      </div>
        <div class="input__row">
          <formInput title="What do you consider to be your areas of expertise (that you could help students with and/or evaluate them for)? E.g. JavaScript, machine learning, front-end development" inputType="text"
                     data="areasOfExpertise" v-on:save="startSave"></formInput>
        </div>
      </div>

      <div class="screen--wide">
        <h2 class="heading">Accommodations</h2>
        <div class="input__row">
          <MultiSelect title="Food allergies"
                       data="foodAllergies" v-on:save="startSave"
                       :options="[{name: 'All Nuts', value: 'allNuts'},{name: 'Peanuts', value: 'peanuts'},{name: 'Tree Nuts', value: 'treeNuts'}, {name: 'Fish', value: 'fish'}, {name: 'Shellfish', value: 'shellfish'}, {name: 'Gluten', value: 'gluten'}, {name: 'Soy', value: 'soy'}, {name: 'Dairy', value: 'dairy'}, {name: 'Other'}]"></MultiSelect>
        </div>
        <div class="input__row">
          <MultiSelect title="Dietary Restrictions"
                       data="dietaryRestrictions" v-on:save="startSave"
                       :options="[{name: 'Vegetarian', value: 'vegetarian'},{name: 'Vegan', value: 'vegan'},{name: 'Kosher', value: 'kosher'}, {name: 'Halal', value: 'halal'}, {name: 'Gluten-free', value: 'glutenFree'}, {name: 'Dairy-free', value: 'dairyFree'}, {name: 'Other'}]"></MultiSelect>
        </div>
        <div class="input__row">
          <formInput title="Special Needs/Accommodations" inputType="longform"
                     data="accommodations" notRequired="true" v-on:save="startSave"></formInput>
        </div>
      </div>
      <div class="screen--wide">
        <h2 class="heading">Final Questions</h2>
        <div class="input__row">
          <formInput title="What is your shirt size?" inputType="select"
                     :options="[{name: 'XS', value: 'xs'}, {name: 'S', value: 's'}, {name: 'M', value: 'm'}, {name: 'L', value: 'l'}, {name: 'XL', value: 'xl'}, {name: 'XXL', value: 'xxl'}]"
                     v-model="application.shirtSize" data="shirtSize" v-on:save="startSave"></formInput>
        </div>
        <div class="input__row">
          <MultiSelect title="How did you find out about Hyphen-Hacks?"
                       data="referrers" v-on:save="startSave"
                       :options="[{name: 'Flyers/Posters', value: 'flyers'}, {name: 'MLH Website', value: 'mlhWebsite'}, {name: 'Friends', value: 'friends'}, {name: 'Parents', value: 'parents'}, {name: 'Lick Website', value: 'lickWebsite'}, {name: 'School Newspaper', value: 'schoolNewsPaper'}, {name: 'Teachers or School Admin', value: 'teachersOrSchoolAdmin'}, {name: 'Student Leaders', value: 'studentLeaders'}, {name: 'Hyphen-Hacks Social', value: 'hhSocial'}, {name: 'MLH Social', value: 'mlhSocial'}, {name: 'Other'}]"></MultiSelect>
        </div>
        <div class="input__row">
          <formInput title="Any final comments?" inputType="longform"
                     data="comments" v-on:save="startSave" notRequired="true"></formInput>
        </div>
        <div class="input__row">
          <formInput title="I understand that this is an application and my involvement in Hyphen-Hacks has not been confirmed." inputType="checkbox"
                     data="agreeApplication" v-on:save="startSave"></formInput>
        </div>
        <div class="input__row">

          <formInput title="I have read and agree to Hyphen-Hacks' Terms and Conditions" inputType="checkbox"
                     data="agreeTerms" v-on:save="startSave"></formInput>
        </div>
        <div class="input__row">
          <formInput title="I have read and agree to Hyphen-Hacks'Privacy Policy" inputType="checkbox"
                     data="agreePrivacy" v-on:save="startSave"></formInput>
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
  import MultiSelect from "@/components/multiSelect.vue"
  import navBar from "@/components/nav.vue"

  let timeout = null
  export default {
    name: "attendeeApplicationForm",
    components: {formInput, navBar, MultiSelect},
    data() {
      return {
        test: "test"
        // saved: this.$store.getters.attendeeAppSaved
      }
    },
    watch: {
      application() {
        // this.startSave()
      }
    },
    created() {
      this.$store.commit("loading", true)
      if (!this.user) {
        this.$router.push('/signup/attendee')
      } else {
        fetch(this.$store.getters.api + "/api/v1/apply/status", {
          method: "get",
          headers: {
            "authorization": this.$store.getters.token
          }
        }).then(async res => {
          let resJson = await res.json()
          console.log(resJson)
          if (resJson.applied) {
         this.$router.push("/status")
          } else {

            console.log("attende form", this.user.uid)
            this.$firebase.firestore().collection("mentorApplicationsIP").doc(this.user.uid).get().then(doc => {
              if (doc.exists) {
                this.$store.commit("mentorApplication", doc.data().data)
                console.log("pulled from record", doc.data().data)
              } else {
                console.log("update email")
                this.$store.commit("updateApplicationItem", {app: "mentor", key: "email", value: this.user.email})

              }
              this.$store.commit("loading", false)
              this.$store.commit("attendeeAppSaved", true)
              this.$listeners
            })
            this.$firebase.firestore().collection("users").doc(this.user.uid).set({
              name: this.user.displayName ? this.user.displayName : "",
              email: this.user.email,
              emailVerified: this.user.emailVerified,
              uid: this.user.uid,
              photoURL: this.user.photoURL ? this.user.photoURL : "",
              provider: this.user.providerData ? this.user.providerData : [],
              lastSeen: this.$moment().unix(),
              intent: "applyMentor"
            })
          }
        })
      }
    },
    computed: {
      applicationType() {
        let route = this.$route.path
        switch (route) {
          case "/apply/mentor":
            return "mentor"
            break
          case  "apply/attendee":
            return "attendee"
            break
          default :
            return "attendee"
        }},

      user() {
        return this.$store.getters.user
      },
      application: {
        get() {
          return this.$store.getters.mentorApplication
        },
        set(value) {
          console.log("change")
        }

      }
    },

    methods: {
      saved() {
        //  console.log( this.$store.getters.attendeeAppSaved)
        return this.$store.getters.attendeeAppSaved
      },
      save() {
        timeout = null
//console.log("saving...", this.application)
        this.$firebase.firestore().collection("mentorApplicationsIP").doc(this.user.uid).set({
          time: this.$moment().unix(), data: this.application
        }, {merge: true}).then(() => {
          this.$store.commit("attendeeAppSaved", true)
        })
      },
      startSave() {
        //console.log("start save")
        this.$store.commit("attendeeAppSaved", false)

        window.clearTimeout(timeout)
        timeout = window.setTimeout(() => this.save(), 1000)
      },
      submit() {
        console.log("submitting")

        let errors = this.$store.getters.attendeeAppErrors
        let areErrors = false
        let errorList = []
        Object.keys(errors).forEach(i => {
          if (errors[i]) {
            areErrors = true
            errorList.push(i)
          }
        })
        if (areErrors) {
          this.$store.commit("showErrors")
          console.log(errorList)
          this.$swal({
            title: "Error",
            text: "Please make sure you fill out all fields correctly",
            icon: "error"
          })
        } else {
          this.$store.commit("loading", true)

          fetch(this.$store.getters.api + '/api/v1/apply/mentor', {
            method: "post",
            headers: {
              "authorization": this.$store.getters.token,
              "content-type": "application/json"
            },
            body: JSON.stringify({time: this.$moment().unix(), app: this.application})
          }).then(async res => {
            let body = await res.json()
            console.log(body, res.status)
            if (body.success) {
              this.$router.push("/status")
            } else {
              this.$store.commit("loading", false)
              this.$swal({
                title: "Error",
                text: "Please make sure you fill out all fields correctly, If this problem persists try reloading your browser",
                icon: "error"
              })
            }
          })
        }
      }
    }
  }
</script>
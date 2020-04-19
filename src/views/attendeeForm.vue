<template>
  <div>
    <navBar title="Attendee Application" :saved="saved()" :saveStatus="true"></navBar>
    <form @submit.prevent class="form">
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
          <formInput title="First Name" inputType="text" data="firstName" v-on:save="startSave"></formInput>
          <formInput title="Last Name" inputType="text" data="lastName" v-on:save="startSave"></formInput>
        </div>
        <div class="input__row">
          <formInput title="Email" inputType="email"
                     desc="This email will be used for all further communications including the status of your application"
                     data="email" v-on:save="startSave"></formInput>
        </div>
        <div class="input__row">
          <formInput title="Zipcode" inputType="zipcode"
                     desc="We aggregate this data to figure out how much of the Bay Area we are reaching"
                    data="zip" v-on:save="startSave"></formInput>
        </div>
        <div class="input__row--2">
          <formInput title="Birthday" inputType="date"
                     desc="We use this information to verify you are eligible for Hyphen-Hacks"
                    data="birthday" v-on:save="startSave"></formInput>
          <formInput title="Gender" inputType="select"
                     desc="We agregate this data to figure out what genders we are reaching"
                     data="gender" v-on:save="startSave"
                     :options="[{name: 'Female', value: 'female'},{name: 'Male', value: 'male'}, {name: 'Non-Gender Binary', value: 'nonBinary'}, {name: 'Prefer Not To Say', value: 'preferNotToSay'}, {name: 'Other', value: 'other'}]"></formInput>
        </div>
        <div class="input__row">
          <MultiSelect title="Race/Ethnicity"
                       desc="We aggregate this data to figure out what races/ethnicities we are reaching"
                       data="race" v-on:save="startSave"
                       :options="[{name: 'American Indian/Alaskan Native', value: 'americanIndianAlaskanNative'},{name: 'Asian or Asian American', value: 'asianAsianAmerican'}, {name: 'Pacific Islander', value: 'pacificIslander'}, {name: 'Black or African-American', value: 'blackAfricanAmerican'}, {name: 'Hispanic', value: 'Hispanic'}, {name: 'White/Caucasian', value: 'white'}, {name: 'Multiracial', value: 'multiracial'}, {'name': 'Prefer not to say', value: 'preferNoAnswer'}, {name: 'Other', value: 'other'}]"></MultiSelect>

        </div>
        <div class="input__row--2">
          <formInput title="High School" inputType="text"
                     desc="We use this information to understand what high schools our attendees come from."
                     data="school" v-on:save="startSave"></formInput>
          <formInput title="Year of Graduation" inputType="text"
                     desc="We use this data to verify your eligibility for Hyphen-Hacks as well as aggregate data to figure out what grades we are reaching."
                     data="graduation" v-on:save="startSave"></formInput>
        </div>
      </div>
      <div class="screen--wide">
        <h2 class="heading">Why Hyphen-Hacks?</h2>
        <div class="input__row">
          <formInput title="Why are you interested in attending?" inputType="longform"
                     data="whyDoYouWantToAttend" v-on:save="startSave"></formInput>
        </div>
        <div class="input__row">
          <formInput title="How much experience do you have with software development?" inputType="select"
                     :options="[{name: 'None', value: 'none'},{name: 'A little', value: 'aLittle'}, {name: 'Some amount', value: 'someAmount'}, {name: 'A Lot', value: 'aLot'}, {name: 'This is my life', value: 'thisIsMyLife'}]"
                     data="experienceSoftware" v-on:save="startSave"></formInput>
        </div>
        <div class="input__row">
          <formInput title="How much experience do you have with hardware development?" inputType="select"
                     :options="[{name: 'None', value: 'none'},{name: 'A little', value: 'aLittle'}, {name: 'Some amount', value: 'someAmount'}, {name: 'A Lot', value: 'aLot'}, {name: 'This is my life', value: 'thisIsMyLife'}]"
                     data="experienceHardware" v-on:save="startSave"></formInput>

        </div>
        <div class="input__row">
          <formInput title="How much experience do you have with hackathons?" inputType="select"
                     :options="[{name: 'None', value: 'none'},{name: 'A little', value: 'aLittle'}, {name: 'Some amount', value: 'someAmount'}, {name: 'A Lot', value: 'aLot'}, {name: 'This is my life', value: 'thisIsMyLife'}]"
                     data="experienceHackathon" v-on:save="startSave"></formInput>

        </div>
        <div class="input__row">
          <formInput title="How much experience do you have with coding in teams?" inputType="select"
                     :options="[{name: 'None', value: 'none'},{name: 'A little', value: 'aLittle'}, {name: 'Some amount', value: 'someAmount'}, {name: 'A Lot', value: 'aLot'}, {name: 'This is my life', value: 'thisIsMyLife'}]"
                     data="experienceTeamCoding" v-on:save="startSave"></formInput>


        </div>
        <div class="input__row">
          <formInput title="Description of computer science experience" inputType="longform"
                     data="descriptionCompSciExp" v-on:save="startSave"></formInput>
        </div>
        <formInput title="Do you have a laptop?" inputType="select"
                   :options="[{name: 'Yes', value: true}, {name: 'No, I would like to borrow one', value: false}]"
                   data="laptop" v-on:save="startSave"></formInput>
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
                       :options="[{name: 'Vegetarian', value: 'vegetarian'},{name: 'Vegan', value: 'vegan'},{name: 'Kosher', value: 'kosher'}, {name: 'Halal', value: 'halal'}, {name: 'Gluten-free', value: 'glutenFree'}, {name: 'Diary-free', value: 'dairyFree'}, {name: 'Other'}]"></MultiSelect>
        </div>
        <div class="input__row">
          <formInput title="Special Needs/Accommodations" inputType="longform"
                     data="accommodations" v-on:save="startSave"></formInput>
        </div>
      </div>
      <div class="screen--wide">
        <h2 class="heading">Final Questions</h2>
        <div class="input__row">
          <formInput title="What is your shirt size?" inputType="select"
                     :options="[{name: 'XS', value: 'xs'}, {name: 'S', value: 's'}, {name: 'M', value: 'm'}, {name: 'L', value: 'l'}, {name: 'XL', value: 'xl'}, {name: 'XXL', value: 'xxl'}]"
                     v-model="application.shirtSize"  data="shirtSize" v-on:save="startSave"></formInput>
        </div>
        <div class="input__row">
          <MultiSelect title="How did you find out about Hyphen-Hacks?"
                       data="referrers" v-on:save="startSave"
                       :options="[{name: 'Flyers/Posters', value: 'flyers'}, {name: 'MLH Website', value: 'mlhWebsite'}, {name: 'Friends', value: 'friends'}, {name: 'Parents', value: 'parents'}, {name: 'Lick Website', value: 'lickWebsite'}, {name: 'School Newspaper', value: 'schoolNewsPaper'}, {name: 'Teachers or School Admin', value: 'teachersOrSchoolAdmin'}, {name: 'Student Leaders', value: 'studentLeaders'}, {name: 'Hyphen-Hacks Social', value: 'hhSocial'}, {name: 'MLH Social', value: 'mlhSocial'}, {name: 'Other'}]"></MultiSelect>
        </div>
        <div class="input__row">
          <formInput title="Any final comments?" inputType="longform"
                       data="comments" v-on:save="startSave"></formInput>
        </div>
        <div class="input__row">
          <div class="checkboxRow">

            <input class="checkbox" id="terms" type="checkbox">
            <label for="terms" data="agreeTerms" v-on:save="startSave" >I have read and Agree to Hyphen-Hacks' Terms and Conditions</label>

          </div>
        </div>
        <div class="input__row">
          <div class="checkboxRow">
            <input class="checkbox" id="privacy" type="checkbox">
            <label for="privacy"  data="conditions" v-on:save="startSave">I have read and Agree to Hyphen-Hacks' Privacy Policy</label>

          </div>
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
        console.log("attende form", this.user.uid)
        this.$firebase.firestore().collection("attendeeApplicationsIP").doc(this.user.uid).get().then(doc => {
          if (doc.exists) {
            this.$store.commit("attendeeApplication", doc.data().data)

          } else {
            this.$store.commit("updateApplicationItem",{app: "attendee", key:"email", value: this.user.email} )

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
          intent: "applyAttendee"
        })
      }
    },
    computed: {

      user() {
        return this.$store.getters.user
      },
      application: {
        get() {
          return this.$store.getters.attendeeApplication
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
        this.$firebase.firestore().collection("attendeeApplicationsIP").doc(this.user.uid).set({
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
      }
    }
  }
</script>
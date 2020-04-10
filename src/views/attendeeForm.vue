<template>
  <div>
    <navBar title="Attendee Application" :saved="true"></navBar>
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
        <formInput title="First Name" inputType="text"></formInput>
        <formInput title="Last Name" inputType="text"></formInput>
      </div>
      <div class="input__row">
        <formInput title="Email" inputType="email"
                   desc="This email will be used for all further communications including the status of your application"></formInput>
      </div>
      <div class="input__row">
        <formInput title="Zipcode" inputType="zipcode"
                   desc="We aggregate this data to figure out how much of the Bay Area we are reaching"></formInput>
      </div>
      <div class="input__row--2">
        <formInput title="Birthday" inputType="text"
                   desc="We use this information to verify you are eligible for Hyphen-Hacks"></formInput>
        <formInput title="Gender" inputType="text"
                   desc="We agregate this data to figure out what genders we are reaching"></formInput>
      </div>
      <div class="input__row">
        <formInput title="Race/Ethnicity" inputType="text"
                   desc="We aggregate this data to figure out what races/elasticities we are reaching"></formInput>
      </div>
      <div class="input__row--2">
        <formInput title="School" inputType="text"
                   desc="We aggregate this data to learn what schools we are reaching."></formInput>
        <formInput title="Year of Graduation" inputType="text"
                   desc="We use this data to verify your eligibility for Hyphen-Hacks as well as aggregate data to figure out what grades we are reaching."></formInput>
      </div>
    </div>
    <div class="screen--wide">
      <h2 class="heading">Why do you want to attend?</h2>
      <div class="input__row">
        <formInput title="Why are you interested in attending Hyphen-Hacks?" inputType="longform"></formInput>
      </div>
      <div class="input__row">
        <formInput title="How much experience do you have with software development?" inputType="text"></formInput>
      </div>
      <div class="input__row">
        <formInput title="How much experience do you have with hackathons?" inputType="text"></formInput>
      </div>
      <div class="input__row">
        <formInput title="How much experience do you have with coding in teams?" inputType="text"></formInput>
      </div>
    </div>
    <div class="screen--wide">
      <h2 class="heading">Thats it!</h2>
      <p class="desc">Thank you so much for taking the time to apply to Hyphen-Hacks! We can't wait to see you. Press the button below to submit your application.</p>
      <button class="btn">SUBMIT!</button>
    </div>
  </form>
  </div>
</template>
<script>
  import formInput from "@/components/formInput.vue"
  import navBar from "@/components/nav.vue"

  export default {
    name: "attendeeApplicationForm",
    components: {formInput, navBar},
    data() {
      return {
        emailSignUp: false,
        email: "",
        pass: ""
      }
    },
    methods: {}
  }
</script>
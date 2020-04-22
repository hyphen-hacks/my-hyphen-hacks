<template>
  <div class="input__container " @focusout="inputted = true">

    <label :for="formId" v-if="inputMode != 'checkbox'">{{title}} <span
        v-if="inputType == 'date'">(mm/dd/yyyy)</span> <span v-if="showRequired" class="text-warning float-right">Required</span>
      <span v-if="!valid" class="text-warning float-right">{{error}}</span></label>
    <input :required="required" v-if="inputMode == 'text'" :type="inputType" :id="formId" class="input"
           :class="{'required': showRequired || !valid}" type="text"
           :placeholder="title" v-model="internalValue">
    <textarea :class="{'required': showRequired || !valid}" :required="required" class="input--textarea" :id="formId"
              :placeholder="title"
              v-if="inputMode == 'textarea'"
              v-model="internalValue"></textarea>
    <div class="checkboxRow" v-if="inputMode == 'checkbox'">
      <input class="checkbox" :id="formId" v-model="internalValue" type="checkbox">
      <label :for="formId">{{title}}</label>

    </div>

    <select @click="inputted = true" :required="required" :name="formId" :id="formId" v-if="inputMode == 'select'"
            :class="{'required': showRequired}" class="input"
            v-model="internalValue">
      <option value="" disabled>Choose One</option>
      <option v-for="option in options" :value="option.value">{{option.name}}</option>
    </select>

    <p class="font-light">{{desc}}</p>
  </div>
</template>

<script>
  function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  export default {
    name: 'FormInput',
    props: [
      "title",
      "notRequired",
      "value",
      "boolValue",
      "inputType",
      "desc",
      "options",
      "data"
    ],
    data() {
      return {
        inputted: false,
        error: ""
        //internalValue: this.$store.getters.attendeeApplication[this.data]
      }
    },
    mounted() {

    },
    computed: {
      valid() {
        let result = true
        switch (this.inputType) {
          case "text":
            this.error = "Response not long enough"
             result = this.internalValue.length > 1
            break
          case "email":
            this.error = "Invalid Email"
             result = validateEmail(this.internalValue)
            break
          case "date":
            this.error = "Invalid Date"
            console.log(this.internalValue)
             result = this.$moment(this.internalValue, "MM/DD/YYYY").isValid() || this.$moment(this.internalValue, "YYYY-MM-DD").isValid()
            break
          case "year":
            this.error = "Invalid Year"
            console.log(this.internalValue)
             result = this.internalValue > 2019 && this.internalValue < 2040
            break
          case "zipcode":
            this.error = "Invalid Zipcode"
             result = /^\d{5}(?:-\d{4})?$/.test(this.internalValue)
            break
          case "longform" :
            this.error = "Response not long enough"
             result = this.internalValue.length >= 2
            break
          case "checkbox" :
             result = true
            break
          case "select" :
             result = true
            break
        }
        if (this.required) {
          this.$store.commit("updateValidation", {key: this.data, value: !result, app: "attendee"})
          if (this.internalValue.length >= 1 || this.$store.getters.showErrors) {
            console.log("invalid", result)
            return result
          } else {
            return true
          }
        } else {
          return true
        }

      },
      showRequired() {
        // console.log(this.required && this.inputted && this.internalValue.length < 1)
        if (this.required && this.inputted && this.internalValue.length < 1) {
          return true
        } else {
          return false
        }
      },
      internalValue: {
        get() {
          return this.$store.getters.attendeeApplication[this.data] ?? ""
        },
        set(val) {
          this.inputted = true
          // console.log("set val", val, this.data)
          this.$store.commit("updateApplicationItem", {app: "attendee", key: this.data, value: val})
          this.$emit('save')
        }
      },
      required() {

        return !Boolean(this.notRequired)
      },
      inputMode() {
        // console.log(this.inputType)
        switch (this.inputType) {
          case "text":
          case "year":
          case "email":
          case "date":
          case "zipcode":
            return "text"
          case "longform" :
            return "textarea"
          case "checkbox" :
            return "checkbox"
          case "select" :
            return "select"
          case "multiselect" :
            return "multi"

        }
      },
      formId() {
        return this.title.replace(/\s/g, '').replace(/\?/g, '').toLowerCase()
      }
    }
  }
</script>


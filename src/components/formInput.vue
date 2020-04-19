<template>
  <div class="input__container ">

    <label :for="formId">{{title}} <span v-if="inputType == 'date'">(mm/dd/yyyy)</span></label>
    <input :required="required" v-if="inputMode == 'text'" :type="inputType" :id="formId" class="input" type="text"
           :placeholder="title" v-model="internalValue">
    <textarea :required="required" class="input--textarea" :id="formId" :placeholder="title"
              v-if="inputMode == 'textarea'"
              v-model="internalValue"></textarea>
    <input class="checkbox" :required="required" :if="formId" type="checkbox" v-if="inputMode == 'checkbox'" v-model="internalValue">
    <select :required="required" :name="formId" :id="formId" v-if="inputMode == 'select'" class="input" v-model="internalValue">
      <option value=""  disabled>Choose One</option>
      <option v-for="option in options" :value="option.value">{{option.name}}</option>
    </select>

    <p class="font-light">{{desc}}</p>
  </div>
</template>

<script>
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
        //internalValue: this.$store.getters.attendeeApplication[this.data]
      }
    },
    mounted() {

    },
    computed: {
      internalValue: {
        get() {
          return this.$store.getters.attendeeApplication[this.data] ?? ""
        },
        set(val) {
          console.log("set val", val, this.data)
          this.$store.commit("updateApplicationItem", {app: "attendee", key:this.data, value: val})
          this.$emit('save')
        }
      },
      required() {
        return !this.shouldBeRequired
      },
      inputMode() {
        // console.log(this.inputType)
        switch (this.inputType) {
          case "text":
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


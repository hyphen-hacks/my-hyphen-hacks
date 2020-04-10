<template>
  <div class="input__container">

    <label :for="formId">{{title}}</label>
    <input :required="required" v-if="inputMode == 'text'" :type="inputType" :id="formId" class="input" type="text"
           :placeholder="title" v-bind:value="value" v-on:input="$emit('input', $event.target.value)">
    <textarea :required="required" class="input--textarea" :id="formId" :placeholder="title"
              v-if="inputMode == 'textarea'" v-bind:value="value"
              v-on:input="$emit('input', $event.target.value)"></textarea>
    <p class="font-light">{{desc}}</p>
  </div>
</template>

<script>
  export default {
    name: 'FormInput',
    props: {
      title: String,
      notRequired: Boolean,
      value: String,
      inputType: String,
      desc: String
    },
    computed: {
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

        }
      },
      formId() {
        return this.title.replace(/\s/g, '').toLowerCase()
      }
    }
  }
</script>


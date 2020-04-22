<template>
  <div class="input__container multi" >

    <p class="label" :for="formId">{{title}} (Choose all that apply)</p>
    <div>
      <div class="checkboxRow" v-for="option in options">
        <input v-if="option.name != 'Other'" class="checkbox" :id="formId(option.name)" v-model="values[option.name]" type="checkbox" @input="saveItem()">
        <input v-model="values.otherEnabled" v-if="option.name == 'Other'" class="checkbox" :id="formId(option.name)" type="checkbox" @input="saveItem()">
        <label :for="formId(option.name)">{{option.name}}</label>
        <input v-if="option.name == 'Other' && values.otherEnabled" :disabled="!values.otherEnabled" type="text" class="input" placeholder="Please Specify" v-model="values.other" @input="saveItem()">
        <input v-if="option.name == 'Other' && !values.otherEnabled" :disabled="!values.otherEnabled" type="text" class="input" placeholder="Please Specify"  @input="saveItem()">
      </div>
    </div>
    <p class="font-light">{{desc}}</p>
  </div>
</template>

<script>
  export default {
    name: 'MultiSelect',
    props: [
      "title",
      "notRequired",
"value",
      "data",
      "desc",
      "options"
    ],
    data() {
      return {
        other: false,
      //  values: {}

      }
    },
    mounted() {
     // console.log(this.$store.getters.attendeeApplication[this.data], "int")
      //this.values = this.$store.getters.attendeeApplication[this.data] ?? {}
    },
    computed: {
      application() {
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
        }
      },
      values: {
        get() {
          if (this.application == "attendee") {
            return this.$store.getters.attendeeApplication[this.data] ??{}
          } else {
            return this.$store.getters.mentorApplication[this.data] ?? {}
          }
        },
        set(val) {

        }
      },
      required() {
        return !this.shouldBeRequired
      },

    },
    methods: {
      saveItem() {
        console.log("set val", this.values, this.data)
        this.$store.commit("updateApplicationItem", {app: this.application, key:this.data, value: this.values})
        this.$emit('save')
      },
      formId(title) {
        return title.replace(/\s/g, '').toLowerCase()
      }
    }

  }
</script>


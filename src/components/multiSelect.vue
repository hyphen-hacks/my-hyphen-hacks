<template>
  <div class="input__container multi" >

    <p class="label" :for="formId">{{title}} (Choose all that apply)</p>
    <div>
      <div class="checkboxRow" v-for="option in options">
        <input v-if="option.name != 'Other'" class="checkbox" :id="formId(option.name)" v-model="values[option.name]" type="checkbox" @input="saveItem()">
        <input v-model="values.otherEnabled" v-if="option.name == 'Other'" class="checkbox" :id="formId(option.name)" type="checkbox" @input="saveItem()">
        <label :for="formId(option.name)">{{option.name}}</label>
        <input v-if="option.name == 'Other'" :disabled="!values.otherEnabled" type="text" class="input" placeholder="Please Specify" v-model="values.other" @input="saveItem()">
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

      values: {
        get() {
        //  console.log(this.$store.getters.attendeeApplication[this.data]?? {}, "data")
          return this.$store.getters.attendeeApplication[this.data] ?? {}
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
       // console.log("set val", this.values, this.data)
        this.$store.commit("updateApplicationItem", {app: "attendee", key:this.data, value: this.values})
        this.$emit('save')
      },
      formId(title) {
        return title.replace(/\s/g, '').toLowerCase()
      }
    }

  }
</script>


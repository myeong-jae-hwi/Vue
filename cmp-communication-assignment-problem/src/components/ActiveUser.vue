<template>
  <h2>{{userName}} </h2>
  <h3>{{userAge}} </h3>
</template>

<script>
export default{
  props: {
    userName: {
        type: String,
        required: true
      },
      userAge:{
        type: String,
        required: true
      }},
  data(){
    
  },
  methods: {

  }
}
</script>
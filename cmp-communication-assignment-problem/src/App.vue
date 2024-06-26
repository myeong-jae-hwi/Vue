<template>
  <div>
    <active-user :userName="user.name" :userAge="user.age"></active-user>
    <user-data @set-data="setUserData"></user-data>
  </div>
</template>
<script>

export default{
  data(){
    return{
      user: {
        name:'',
        age: '',
      }
    }
  },
  methods: {
    setUserData(name, age){
      this.user = {
        name: name,
        age: age
      }
    }
  }
}
</script>

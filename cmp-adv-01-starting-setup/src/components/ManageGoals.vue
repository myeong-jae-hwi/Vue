<template>
  <div>
    <h2>Manage Goal</h2>
    <input type="text" ref="goal"/>
    <button @click="setGoals()">Set Goal</button>

    <teleport to="body">
    <error-alert v-if="inputIsInvalid">
      <h2>input is invalid!</h2>
      <p>Please enter at least a few characters...</p>
      <button @click="confirmError">Okay</button>
    </error-alert>
    </teleport>
  </div>
</template>

<script>
import ErrorAlert from './ErrorAlert.vue'
export default {
  components: {
   ErrorAlert
  },
  data(){
    return{
      inputIsInvalid: false
    }
  },
  methods:{
    setGoals(){
      const enterVal = this.$refs.goal.value
      if(enterVal === ''){
        this.inputIsInvalid = true;

      }
    },
    confirmError(){
      this.inputIsInvalid = false
    }
  }
}
</script>
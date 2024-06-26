<template>
  <form @submit.prevent="submitData">
    <input type="text" v-model="enteredName">
    <input type="number" v-model="enteredAge">
    <button>set User Data</button>
  </form>
</template>

<script>
export default{
  emits:['set-data'],
  data(){
    return {
      enteredName: '',
      enteredAge:''
    }
  },
  methods: {
    submitData(){
      this.$emit('set-data', this.enteredName, this.enteredAge);

    }
  }
}
</script>

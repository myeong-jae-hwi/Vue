<template>
  <form @submit.prevent="submitData">
    <div>
      <label>이름</label>
      <input type="text" v-model="plusName"/>
    </div>
    
    <div>
      <label>번호</label>
      <input type="tell" v-model="plusPhone"/>
    </div>

    <div>
      <label>이메일</label>
      <input type="e-mail" v-model="plusEmail"/>
    </div>

    <div>
      <button>+</button>
    </div>
  </form>
</template>

<script>
export default {
  emits:['add-contact'],
  data(){
    return {
      plusName:'',
      plusPhone:'',
      plusEmail:''
    }
  },
  methods:{
    submitData(){
        this.$emit('add-contact', 
        this.plusName, 
        this.plusPhone, 
        this.plusEmail)
    }
  }
}
</script>

<style>
  #app input {
  font: inherit;
  padding: 0.15rem;
  }
  #app label {
    font-weight: bold;
    margin-right: 1rem;
    width: 7rem;
    display: inline-block;
  }
  #app form div {
    margin: 1rem 0;
  }
</style>

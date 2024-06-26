<template>
  <li>
    <h2>{{friend.name}}</h2>
    <button @click="toggleDetalis">{{ visible ? 'Hide' : 'Show'}} Detalis</button>
    <ul v-if="visible">
      <li><strong>Name: </strong>{{friend.name}}</li>
      <li><strong>Phone: </strong>{{friend.phone}}</li>
    </ul>
  </li>
</template>

<script>
export default{
  data(){
    return {
      visible: false,
      friend: 
      {
        id: 'abc',
        name: 'abc',
        phone:'01044652378'
        },
      }  
    },
    methods: {
      toggleDetalis(){
        console.log(this.visible)
        this.visible = !this.visible;
      }
    }
  }

</script>

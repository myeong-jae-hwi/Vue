const app = Vue.createApp({
  data(){
    return {
      alart: 'hi',
      misson2: '',
      name:' ',
    };
  },
  methods: {
    showAlert(){
      alert(this.alart);
    },
    aaaa(event){
      this.name = event.target.value;
    },
    confirmInput(){
      this.misson2 = this.name;
    }
  }
});

app.mount('#assignment');

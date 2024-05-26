const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    confirmInput(){
      this.confirmedName = this.name;
    },
    add(n){
      this.counter += n;
    },
    remove(n){
      this.counter -= n;
    },
    setName(event, lastName){
      this.name = event.target.value + ' ' + lastName;
    },
    submitForm(event){
      alert('Submitted!');
    }
  }
});

app.mount('#events');

const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
    };
  },
  methods: {
    add(n){
      this.counter += n;
    },
    remove(n){
      this.counter -= n;
    },
    setName(event, lastName){
      this.name = event.target.value + ' ' + lastName;
    }
  }
});

app.mount('#events');

const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.currentUserInput;
    },
  },
  created(){
    console.log('created')
  },
  beforeCreate() {
    console.log('beforeCreate')
  },
  mounted()
  {
    console.log('mounted')
  },
  beforeMount(){
    console.log('before mounted')
  }
});

app.mount('#app');

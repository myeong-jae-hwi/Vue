const app = Vue.createApp({
  data(){
    return {
      result: 0,
      text: ''
    }
  },
  methods: {
    add(num){
      this.result += num;
    }
  },
  watch:{
    result(val){
      if (val < 37) {
        console.log(this.result);
        this.text = 'Not there yet'
      }
      else if (val > 37){
        console.log(this.result);
        this.text = 'Too much!'
      }
    }
  }
});

app.mount('#assignment');
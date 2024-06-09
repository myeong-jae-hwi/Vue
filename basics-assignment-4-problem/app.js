const app = Vue.createApp({
  data(){
    return{
      inputClass:'',
      first_class: true,
      inlineColor: '',
    }
  },
computed: {
  paraClasses(){
    return{
      user1: this.inputClass === 'user1', 
      user2: this.inputClass === 'user2',
      visible: this.first_class,
      hidden: !this.first_class
    }
  },
  changeColor(){
    color: this.inlineColor
  }
},

  methods: {
    toggle(){
      this.first_class = !this.first_class;
    },
    changeColor(val){
      this.inlineColor = val;
      console.log(this.inlineColor)
    }
  }
})

app.mount('#assignment');
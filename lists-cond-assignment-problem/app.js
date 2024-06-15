const app = Vue.createApp({
  data(){
    return{
      task:[],
      val:'',
      hide: true
    }
  },

  methods:{
    addTask(){
      this.task.push(this.val)
    },
    hideBtn(){
      if (this.hide === true) {
        this.hide = false
      }
      else{
        this.hide = true
      }
      console.log(this.hide)
    }
  }
});

app.mount("#assignment")
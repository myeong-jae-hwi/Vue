const app = Vue.createApp({
  data() {
    return { 
      goals: [],
      val: ''
    };
  },

  methods: {
    addGoal(){
      this.goals.push(this.val);
    },

    remove(idx){
      this.goals.splice(idx, 1);
    }
  }
});

app.mount('#user-goals');

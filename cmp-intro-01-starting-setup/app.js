const app = Vue.createApp({
  data(){
    return {

    }
  },
  methods(){

  }
})

app.component('components-contents',{
  template:`
  <li>
    <h2>Manuel  Lorenz</h2>
    <button>Show Details</button>
    <ul>
      <li><strong>Phone:</strong> 01234 5678 991</li>
      <li><strong>Email:</strong> manuel@localhost.com</li>
    </ul>
  </li>`,
  data(){
    return{
      visible: false
    }
  },
  methods: {
    toggleMsg(){
      this.visible = !this.visible
    }
  }
});

app.mount('#app')
const app = Vue.createApp({
  data(){
    return{
      box_A: false,
      box_B: false,
      box_C: false 
    }
  },
  methods:{
    clickBox(box){
      console.log(box)

      if (box === 'A'){
        this.box_A = !this.box_A;
        this.box_B = false;
        this.box_C = false;
        console.log('A clicked')
      }
      else if (box === 'B'){
        this.box_B = !this.box_B;
        this.box_A = false;
        this.box_C = false;
        console.log('B clicked')
      }
      else{
        this.box_C = !this.box_C;
        this.box_B = false;
        this.box_A = false;
        console.log('C clicked')
      }
    }
  }
});

app.mount('#styling');
const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: '',
      lastName: '',
    };
  },                                                  // 연산 프로퍼티를 사용하는 이유 : 다른 데이터에 의존하는 데이터에 사용
  watch: {                                            // watch를 사용하는 이유 : 데이터 프로퍼티를 업데이트하지만 항상 업데이트 하면 안되는 로직을 실행하려는 경우
    counter(value) {
      if (value > 50){
        this.counter = 0;
      }
    },
    
    name(value){
      if(value ===''){
        this.fullname = '';
      }
      else{
        this.fullname = value + this.lastName;
      }
    },
    lastName(value){
      if(value ===''){
        this.fullname = '';
      }
      else{
        this.fullname = this.name + '' + value;
      }
    }
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
    setName(event){
      this.name = event.target.value ;
    },
    submitForm(event){
      alert('Submitted!');
    },
    reset(){
      this.confirmedName = ''
    }
  }
});

app.mount('#events');

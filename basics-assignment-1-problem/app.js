Vue.createApp({
  data() {
    return {
      name: 'Jaehwi Myeong',
      age: 25,
      num1: 1,
      num2: 0,
      link: 'https://cdn.hankyung.com/photo/201912/99.21230654.1.jpg',
      goals: [],
      enteredValue: ''
    };
  },
  methods: {
    random_num() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.num1;
      } else {
        return this.num2;
      }
    },
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = '';
    }
  }
}).mount('#assignment');
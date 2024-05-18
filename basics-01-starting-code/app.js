const app = Vue.createApp({
  data() {
    return {
      Goal1: 'Learn Vue!' ,
      Goal2: 'Master Vue!',
      vueLink: 'https://vuejs.org/'
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.Goal1;
      } else {
        return this.Goal2;
      }
    }
  }
});

app.mount('#user-goal');



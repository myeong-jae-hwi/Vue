const app = Vue.createApp({
  data() {
    return {
      Goal: 'Learn Vue!' ,
      vueLink: 'https://vuejs.org/'
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return 'Master Vue!';
      } else {
        return 'Learn Vue!';
      }
    }
  }
});

app.mount('#user-goal');
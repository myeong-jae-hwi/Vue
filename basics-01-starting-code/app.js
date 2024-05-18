const app = Vue.createApp({
  data() {
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      return {goal: 'Master Vue!'};
    } else {
      return {goal: 'Learn Vue!'};
    }
  }
});

app.mount('#user-goal');
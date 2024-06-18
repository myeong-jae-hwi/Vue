function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

let turn = 0;

const app =Vue.createApp({
  data(){
    return{ 
      playerHealth: 100,
      monsterHealth: 100,
      turn: 0,
    }
  },
  computed:{
    monsterBarStyle(){
      return {
        width: this.monsterHealth + "%"
      }
    },
    playerBarStyle(){
      return {
        width: this.playerHealth + "%"
      }
    }
  },
  methods: {
    attackMonster(){
      this.turn++;
      console.log(this.turn);
      const damage = getRandomValue(5, 12)
      this.monsterHealth -= damage
      this.attckPlayer();
    },
    attckPlayer(){
      console.log('attckPlayer');
      const damage = getRandomValue(8, 15)
      this.playerHealth -= damage
    },
    spcialAttackMonster(){
      this.turn++;
      const damage = getRandomValue(10, 25)
      const stun = Math.random() 
      this.monsterHealth -= damage
      if (stun < 0.7){
        this.attckPlayer();
      }
    }
  }
});

app.mount('#game')

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
      winner: null,
      logmsg: []
    }
  },
  computed:{
    monsterBarStyle(){
      if (this.monsterHealth > 70) {
        return {
          width: this.monsterHealth + "%"
       }
      }
      else if (this.monsterHealth > 30 && this.monsterHealth <= 70){
        return {
          backgroundColor: "yellow",
          width: this.monsterHealth + "%"
       }
      }
      else if (this.monsterHealth >= 0 && this.monsterHealth <= 30){
        return {
          backgroundColor: "red",
          width: this.monsterHealth + "%"
       }
      }
    },
    playerBarStyle(){
      if (this.playerHealth > 70) {
        return {
          width: this.playerHealth + "%"
       }
      }
      else if (this.playerHealth > 30 && this.playerHealth <= 70){
        return {
          backgroundColor: "yellow",
          width: this.playerHealth + "%"
       }
      }
      else if (this.playerHealth >= 0 && this.playerHealth <= 30){
        return {
          backgroundColor: "red",
          width: this.playerHealth + "%"
       }
      }
    },
    useskill(){
      return this.turn % 3 !==0
      
    }
  },
  watch:{
    playerHealth(val){
      if
      (val <= 0 && this.monsterHealth <= 0){
        //draw
        this.winner = 'draw'
      }
      else if (val <= 0){
        this.winner = 'monster'
      }
    },
    monsterHealth(val){
      if
      (val <= 0 && this.playerHealth <= 0){
        //draw
        this.winner = 'draw'
      }
      else if (val <= 0){
        this.winner = 'player'
      }
    }
  },
  methods: {
    attackMonster(){
      this.turn++;
      const damage = getRandomValue(5, 12)
      if (this.monsterHealth - damage < 0 ){
        this.monsterHealth = 0
        this.logMsg('player', 'attack', damage)
      }
      else{
      this.monsterHealth -= damage
      this.logMsg('player', 'attack', damage)
      }
      this.attckPlayer();
    },
    attckPlayer(){
      const damage = getRandomValue(8, 15)
      if (this.playerHealth - damage < 0 ){
        this.playerHealth = 0
        this.logMsg('monster', 'attack', damage)

      }
      else{
      this.playerHealth -= damage
      this.logMsg('monster', 'attack', damage)
      }
    },
    spcialAttackMonster(){
      this.turn++;
      const damage = getRandomValue(10, 25)
      const stun = Math.random() 
      this.monsterHealth -= damage
      this.logMsg('player', 'skill', damage)

      if (stun < 0.7){
        this.attckPlayer();
      }
    },
    healPlayer() {
      const healVal = getRandomValue(8,20);
      this.turn++;
      if (this.playerHealth + this.playerHealth > 100) 
      {
        this.playerHealth = 100
        this.logMsg('player', 'heal', healVal)
      } 
      else
      {
        this.playerHealth += healVal; 
      }
      this.attckPlayer();
    },
    reStart(){
      this.playerHealth = 100
      this.monsterHealth = 100
      this.winner = null
      this.turn = 0
      this.logmsg = []
    },
    GG(){
      this.winner = "monster"
    },
    logMsg(who, what, val){
      this.logmsg.unshift({
        actionBy: who,
        actionType: what,
        actionVal: val
      });
    }
  }
});

app.mount('#game')

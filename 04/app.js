const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      winner: null,
      logMessages: [],
    };
  },
  watch: {
    playerHealth(val) {
      if (val <= 0 && this.monsterHealth <= 0) {
        this.winner = "Draw";
      } else if (val <= 0) {
        this.winner = "Monster";
      }
    },
    monsterHealth(val) {
      if (val <= 0 && this.playerHealth <= 0) {
        this.winner = "Draw";
      } else if (val <= 0) {
        this.winner = "Player";
      }
    },
  },
  computed: {
    monsterBarStyle() {
      if (this.monsterHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.monsterHealth + "%" };
    },
    playerBarStyle() {
      if (this.playerHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.playerHealth + "%" };
    },
    mayUseSpecialAttack() {
      return this.currentRound % 3 !== 0;
    },
  },
  methods: {
    startGame(){
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.winner = null;
      this.currentRound = 0;
      this.logMessages = [];
    },
    attackMonster() {
      this.currentRound++;
      const attackvalue = getRandomValue(5, 12);
      this.monsterHealth -= attackvalue;
      this.addLogMessage('Player', 'attack', attackvalue);
      this.attackPlayer();
    },
    attackPlayer() {
      const attackvalue = getRandomValue(8, 15);
      this.playerHealth -= attackvalue;
      this.addLogMessage('Monster', 'attack', attackvalue);
    },
    specialAttackMonster() {
      this.currentRound++;
      const attackvalue = getRandomValue(10, 25);
      this.monsterHealth -= attackvalue;      
      this.addLogMessage('Player', 'Special Attack', attackvalue);
      this.attackPlayer();
    },
    healPlayer() {
      this.currentRound++;
      const healValue = getRandomValue(8, 20);
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      }      
      this.addLogMessage('Player', 'heal', healValue);
      this.attackPlayer();
    },
    surrender(){
      this.winner = "Monster";
    },
    addLogMessage(who,what,value){
      this.logMessages.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value
      });
    }
  },
});

function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

app.mount("#game");

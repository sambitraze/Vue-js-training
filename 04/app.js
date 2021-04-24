const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      winner: null,
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
      return { width: this.monsterHealth + "%" };
    },
    playerBarStyle() {
      return { width: this.playerHealth + "%" };
    },
    mayUseSpecialAttack() {
      return this.currentRound % 3 !== 0;
    },
  },
  methods: {
    attackMonster() {
      this.currentRound++;
      const attackvalue = getRandomValue(5, 12);
      this.monsterHealth -= attackvalue;
      this.attackPlayer();
    },
    attackPlayer() {
      const attackvalue = getRandomValue(8, 15);
      this.playerHealth -= attackvalue;
    },
    specialAttackMonster() {
      this.currentRound++;
      const attackvalue = getRandomValue(10, 25);
      this.monsterHealth -= attackvalue;
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
      this.attackPlayer();
    },
  },
});

function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

app.mount("#game");

const app = Vue.createApp({
    data(){
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
        };
    },
    computed: {
        monsterBarStyle(){
            return {width: this.monsterHealth + '%'};
        },
        playerBarStyle(){
            return {width: this.playerHealth + '%'};
        },
        mayUseSpecialAttack(){
            return this.currentRound % 3 !== 0;
        }
    },
    methods:{
        attackMonster(){
            this.currentRound++;
            const attackvalue = getRandomValue(5,12);
            this.monsterHealth-=attackvalue;
            this.attackPlayer();
        },
        attackPlayer(){
            const attackvalue = getRandomValue(8,15);
            this.playerHealth-=attackvalue;
        },
        specialAttackMonster(){
            this.currentRound++;
            const attackvalue = getRandomValue(10,25);
            this.monsterHealth-=attackvalue;
            this.attackPlayer();
        }
    }
});

function getRandomValue(min, max){
    return Math.floor(Math.random() * (max-min)) + min;
}

app.mount('#game');
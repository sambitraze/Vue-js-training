const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      name2: '',
      confirmedName: ''
    };
  },
  methods: {
    confirm(){
      this.confirmedName = this.name;
    },
    setName(event){
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    remove(num) {
      this.counter = this.counter - num;
    },
    reset(){
      this.name = '';
    },
    reset2(){
      this.name2 = '';
    }
  }
});

app.mount('#events');

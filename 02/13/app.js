const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      name2: ''
    };
  },
  methods: {
    setName2(event2, lastName){
      this.name2 = event2.target.value + " " + lastName;
    },
    setName(event){
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    remove(num) {
      this.counter = this.counter - num;
    }
  }
});

app.mount('#events');

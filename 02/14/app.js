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
    submitForm(event){
      event.preventDefault();
      alert("'Submitted!")
    },
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

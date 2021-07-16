const app = Vue.createApp({
    data() {
        return {
            friends: [
                {
                    id: 'Manuel',
                    name: 'Manuel Lorenz',
                    phone: '32133 3211 133',
                    email: 'manuel@localhost.com'
                }, {
                    id: 'Julie',
                    name: 'Julie Jones',
                    phone: '32133 3211 213',
                    email: 'julie@localhost.com'
                }
            ],
        }
    }
});

app.component('friend-card', {
    template: ` <li>
    <h2>{{friend.name}}</h2>
    <button @click="toggleDetails()">Show Details</button>
    <ul v-if="detialsAreVisible">
      <li><strong>Phone:</strong> {{friend.phone}}</li>
      <li><strong>Email:</strong> {{friend.email}}</li>
    </ul>
  </li>`,
    data() {
        return {
            detialsAreVisible: false,
            friend: {
                id: 'Manuel',
                name: 'Manuel Lorenz',
                phone: '32133 3211 133',
                email: 'manuel@localhost.com'
            }
        };
    },
    methods: {
        toggleDetails() {
            this.detialsAreVisible = !this.detialsAreVisible;
        }
    }
})

app.mount('#app');
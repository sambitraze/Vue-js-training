import { createApp } from 'vue'
import App from './App.vue'
import FriendContact from './components/FriendContact.vue';


createApp(App).component('friend-contact', FriendContact).mount('#app')

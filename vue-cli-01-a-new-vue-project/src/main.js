import { createApp } from 'vue';

import App from './App.vue'
import FriendContect from './components/FriendContact.vue'
const app = createApp(App)

app.component('friend-contact',FriendContect);

app.mount('#app')
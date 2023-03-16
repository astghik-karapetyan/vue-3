import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue';
import BaseDialog from './shared/BaseDialog.vue';
import BaseSpinner from './shared/BaseSpinner.vue';
import BaseMessage from './shared/BaseMessage.vue';

import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.component('base-dialog', BaseDialog);
app.component('base-spinner', BaseSpinner);
app.component('base-message', BaseMessage);

app.mount('#app');

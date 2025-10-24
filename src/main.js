import '@/assets/style.scss'

// Bulma list
import 'bulma-list/css/bulma-list.css'

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCopyright, faEnvelope, faFile } from '@fortawesome/free-regular-svg-icons'
import { faLocationDot, faPhone, faGlobe } from '@fortawesome/free-solid-svg-icons'

library.add(faCopyright, faEnvelope, faLocationDot, faFile, faPhone, faGlobe)

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon);

app.use(router)

app.mount('#app')



import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import * as labsComponents from 'vuetify/labs/components'
//icon fonts 
import '@mdi/font/css/materialdesignicons.css'

// Components


const vuetify = createVuetify({
  components: {
    ...components,
    ...labsComponents,
  },
  directives,
   icons: {
    defaultSet: 'mdi', // This is already the default value - only for display purposes
  },
  theme:{
    defaultTheme:'light',
    themes:{
      light:{
        colors:{
          primary:"#A6AD1E",
          secondary:"#CFD0D6"
        }
      }
    }
  },
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)
app.mount('#app')
import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router.ts";
import { loadFonts } from "./plugins/webfontloader";

loadFonts();

const app = createApp(App);
app.use(vuetify);
app.use(router);
app.mount("#app");

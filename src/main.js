import "bootstrap/dist/css/bootstrap.css";
import { createApp } from "vue";
import App from "./App.vue";
import VueCroppie from "vue-croppie";
import "croppie/croppie.css";

// Vue.config.productionTip = false;
// Vue.use(VueCroppie);

// new Vue({
//   el: "#app",
//   components: { App },
//   template: "<App/>",
// });

createApp(App).use(VueCroppie).mount("#app");

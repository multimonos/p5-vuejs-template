import { createApp } from "vue";
import App from "./App.vue";
// import {Vue} from "vue"
import router from "./router"
// import { VueRouter } from "vue-router";
const app = createApp(App);
app
    .use(router)
    .mount("#app");

// const app =  Vue.createApp({})
//     .use(router)
    // .$mount("#app")
// import Vue from "vue"

// const app = new Vue({}).$mount("#app")

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
    import.meta.hot.accept();
    import.meta.hot.dispose(() => {
        app.unmount();
    });
}

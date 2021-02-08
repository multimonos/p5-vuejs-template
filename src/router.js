import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import SketchList from "./views/SketchList.vue";

const routes = [
    {path: "/", name: "home", component: Home},
    {path: "/sketches/:id?", name: "sketchlist", component: SketchList},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
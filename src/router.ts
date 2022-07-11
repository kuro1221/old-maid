// router.ts
import { createRouter,createWebHistory } from 'vue-router';
import TopPage from "./components/pages/TopPage.vue";
import OldMaid from "./components/pages/OldMaid.vue";

const routes = [
    { path: '/', name: 'top', component: TopPage },

    { path: '/oldMaid', name: 'oldMaid', component: OldMaid },
]
 
const router = createRouter({
    history: createWebHistory(), // HTML5 History モード
    routes,
})
 
export default router;
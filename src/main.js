import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'



import Games from "./components/game/Games.vue";
import PlayGame from "./components/game/PlayGame.vue";
import UserRegistration from "./components/user/UserRegistration.vue";
import Statistic from "./components/user/UserStatistic.vue";
import PageNotFound from "./components/PageNotFound.vue";

import GameButton from "./components/UI/GameButton.vue";
import ButtonSet from "./components/UI/ButtonSet.vue";
import ChackItem from "./components/UI/ChackItem.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", redirect: "/games" },
        { path: "/games", component: Games },
        {
            path: "/games/:gameId",
            component: PlayGame,
            props: {
                lavel: {
                    type: Object,
                    required: true,
                },
            }
        },
        { path: "/registration", component: UserRegistration },
        { path: "/statistic", component: Statistic },
        { path: "/:notFound(.*)", component: PageNotFound },
    ],
    linkActiveClass: "active",
});

const app = createApp(App);
app.component("game-button", GameButton);
app.component("button-set", ButtonSet);
app.component("chack-item", ChackItem)
app.use(router);
app.mount('#app')
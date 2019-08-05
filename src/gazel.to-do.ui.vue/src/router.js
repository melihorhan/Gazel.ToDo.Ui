import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import BoardList from "./views/board/board-list.vue";
import Board from "./views/board/board.vue";


Vue.use(Router);

export default new Router({
	mode: "history",
	base: process.env.BASE_URL,
	routes: [
		{
			path: "/",
			name: "home",
			component: Home
		},
		{
			path: "/board",
			name: "board-list",
			component: BoardList
		},
		{
			path: "/board/:id",
			name: "board",
			component: Board
		},
		{
			path: "/about",
			name: "about",
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () =>
				import(/* webpackChunkName: "about" */ "./views/About.vue")
		}
	]
});

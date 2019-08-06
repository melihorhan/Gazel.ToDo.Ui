import Vue from "vue";
import Router from "vue-router";
import BoardList from "./views/board/board-list.vue";
import Board from "./views/board/board.vue";

Vue.use(Router);

export default new Router({
	mode: "history",
	base: process.env.BASE_URL,
	routes: [
		{
			path: "/",
			name: "board-list",
			component: BoardList,
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
		}
	]
});

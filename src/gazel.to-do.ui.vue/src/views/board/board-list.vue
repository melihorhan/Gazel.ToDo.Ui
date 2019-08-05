<template>
<div class="board mt-5">
    <div class="card-columns">
        <div class="card text-center text-white bg-primary mb-3" v-for="(board, index) in boards">
            <board-item @removeBoard="removeBoard" :index="index" :board="board" v-if="board.id > 0" />
        </div>
        <div class="card text-center bg-light mb-3">
            <board-item-new />
        </div>
    </div>
    <board-create @addBoard="addBoard" />
    <div v-for="(board, index) in boards">
        <board-edit :index="index" :board="board" />
    </div>
    <ul class="list-group" v-if="errors && errors.length">
        <li class="list-group-item" v-for="error of errors">
            {{error.message}}
        </li>
    </ul>
</div>
</template>

<script>
import BoardCreate from '../board/board-create.vue';
import BoardEdit from '../board/board-edit.vue';
import BoardItem from '../../components/board/board-item.vue';
import BoardItemNew from '../../components/board/board-item-new.vue';
import axios from 'axios';

export default {
    name: "BoardList",
    data() {
        return {
            boards: [],
            errors: [],
        }
    },
    components: {
        BoardItem,
        BoardItemNew,
        BoardCreate,
        BoardEdit
    },
    mounted() {
        this.getBoards()
    },
    methods: {
        getBoards: function () {
            axios.get('http://localhost:63048/boards')
                .then(response => {
                    this.boards = response.data
                })
                .catch(e => {
                    this.errors.push(e)
                })
        },
        removeBoard: function (index) {
            this.boards.splice(index, 1);
        },
        addBoard: function (board) {
            this.boards.push(board);
        }
    }
}
</script>

<template>
<div class="board">
    <div class="card-deck">
        <div class="card text-center" v-for="(board, index) in boards">
            <board-item :key="index" :board="board" v-if="board.id > 0" />
            <board-item-create @removeBoard="removeBoard" :index="index" :board="board" v-if="board.id == 0" />
        </div>
    </div>
    <button v-on:click="newBoard" type="button" class="mt-2 btn btn-outline-primary">New</button>
    <ul v-if="errors && errors.length">
        <li v-for="error of errors">
            {{error.message}}
        </li>
    </ul>
</div>
</template>

<script>
import BoardItem from '../../components/board/board-item.vue';
import BoardItemCreate from '../../components/board/board-item-create.vue';
import axios from 'axios';

export default {
    data() {
        return {
            boards: [],
            errors: []
        }
    },
    components: {
        BoardItem,
        BoardItemCreate
    },
    mounted() {
        this.fetch()
    },
    methods: {
        fetch: function () {
            axios.get('http://localhost:63048/boards')
                .then(response => {
                    this.boards = response.data
                })
                .catch(e => {
                    this.errors.push(e)
                })
        },

        newBoard: function () {
            let newBoard = {};
            newBoard.id = 0;
            newBoard.name = "";
            this.boards.push(newBoard);
        },

        removeBoard: function(index){
            this.boards.splice(index, 1);
        }
    }
}
</script>

<style>
::-webkit-input-placeholder {
    color: #808080;
    text-align: center;
}

:-moz-placeholder {
    color: #808080;
    text-align: center;

}

input {
    text-align: center;
}
</style>

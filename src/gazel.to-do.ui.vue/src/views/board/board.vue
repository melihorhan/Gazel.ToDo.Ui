<template>
<div class="container-fluid pt-3">
    <h3 class="font-weight-light text-dark">{{board.name}}</h3>
    <div class="card-deck">
        <div class="card" v-for="(column, index) in board.columns">
            <column-item :column="column" />
        </div>
        <div class="card">
            <column-item-new :boardId="board.id" />
            <column-create @addColumn="addColumn" :boardId="board.id" />
        </div>
    </div>
</div>
</template>

<script>
import ColumnItem from '../../components/column/column-item.vue';
import ColumnItemNew from '../../components/column/column-item-new.vue';
import ColumnCreate from '../column/column-create.vue';
import axios from 'axios';
import Vue from 'vue';

export default {
    data() {
        return {
            board: {},
            errors: []
        }
    },
    mounted() {
        this.getBoard();
    },
    methods: {
        getBoard: function () {
            axios.get('http://localhost:63048/boards/' + this.$route.params.id)
                .then(response => {
                    this.board = response.data
                })
                .catch(e => {
                    Vue.$toast.error(error.response.data.result_message);
                })
        },

        addColumn: function (column) {
            this.board.columns.push(column);
        },

    },
    components: {
        ColumnItem,
        ColumnItemNew,
        ColumnCreate
    }
}
</script>

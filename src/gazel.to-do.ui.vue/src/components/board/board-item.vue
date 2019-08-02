<template>
<div>
    <span v-on:click="deleteBoard(board.id)" class="float-right clickable mr-2 close-icon" data-effect="fadeOut"><i class="fa fa-times"></i></span>
    <a class="board-link" v-bind:href="'/board/'+ board.id">
        <div class="card-body">
            <h5 class="card-title">{{board.name}}</h5>
        </div>
    </a>
</div>
</template>

<script>
import axios from 'axios';
import qs from 'qs';

export default {
    name: 'BoardItem',
    props: ['board', 'index'],
    methods: {
        deleteBoard: function (id) {
            if (id > 0) {

                var result = confirm("Are you sure you want to delete this board?");

                if (result) {
                    const data = qs.stringify({
                        id: id
                    });

                    axios.delete('http://localhost:63048/boards/' + id).then(response => {
                            this.$emit('removeBoard', this.index);
                        })
                        .catch(e => {
                            //this.errors.push(e)
                        });
                }
            } else {

            }
        }
    },
};
</script>

<style>
.clickable {
    cursor: pointer;
}
</style>

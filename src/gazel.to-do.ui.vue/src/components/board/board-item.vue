<template>
<div>
    <div class="dropdown">
        <div id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="float-right three-dot clickable"></div>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style="z-index:9999">
            <a class="new-board-link dropdown-item" href="#bannerformmodal" data-toggle="modal" :data-target="'#editModal' + index" >Edit</a>
            <a v-on:click="deleteBoard(board.id)" class="dropdown-item" href="#">Delete</a>
        </div>
    </div>
    <div class="card-body">
        <a class="board-link" v-bind:href="'/board/'+ board.id">
            <h5 class="card-title">{{board.name}}</h5>
        </a>
    </div>
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
    }
};
</script>

<style>
.clickable {
    cursor: pointer;
}

input.form-control {
    font-size: 0.7rem;
}
</style>

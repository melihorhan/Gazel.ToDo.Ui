<template>
<div class="card-body">
    <span v-on:click="removeBoard(index)" class="float-right clickable close-icon" data-effect="fadeOut"><i class="fa fa-times"></i></span>
    <h5 class="card-title"> <input type="text" placeholder="board name" class="form-control" id="name" v-model="board.name"></h5>
    <p class="card-text">Description: {{board.name}}</p>
    <a href="#" @click="create" class="btn btn-primary">Add</a>
</div>
</template>

<script>
import axios from 'axios';
import qs from 'qs';

export default {
    name: 'BoardItemCreate',
    data() {
        return {
            errors: []
        }
    },
    props: ['board','index'],
    methods: {
        create: function () {
            const data = qs.stringify({
                name: this.board.name
            });

            axios.post('http://localhost:63048/boards',
                data, {
                    headers: {
                        'Content-type': 'application/x-www-form-urlencoded',
                    }
                }).then(response => {
                this.board.id = response.data.id;
            });
        },

        removeBoard : function(index){
            this.$emit('removeBoard', index);
        }
    }
};
</script>

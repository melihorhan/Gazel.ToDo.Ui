<template>
<div class="card-body">
    <span v-on:click="deleteBoard(board.id)" class="float-right clickable close-icon" data-effect="fadeOut"><i class="fa fa-times"></i></span>
    <br>
    <h5 class="card-title">{{board.name}}</h5>
    <p class="card-text">Description {{board.name}}</p>
</div>
</template>

<script>
import axios from 'axios';
import qs from 'qs';

export default {
    name: 'BoardItem',
    props: ['board'],
    methods: {
        deleteBoard: function (id) {
            if (id > 0) {
                var result = confirm("Are you sure you want to delte this board?");
                if (result) {
                    const data = qs.stringify({
                        id: id
                    });
                    axios.delete('http://localhost:63048/boards', {
                            params: {
                                id: id
                            }},
                            {
                                headers: {
                                    'Content-type': 'application/x-www-form-urlencoded',
                                    'Access-Control-Allow-Origin': '*'
                                }
                            }).then(response => {
                            //this.board.id = response.data.id;
                        })
                        .catch(e => {
                            //this.errors.push(e)
                        });
                    }
                }
                else{
                    
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

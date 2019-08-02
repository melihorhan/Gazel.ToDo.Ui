<template>
<div ref="createModalBoard" class="modal" id="myModal">
    <div class="modal-dialog">
        <div class="modal-content">

            <!-- Modal Header -->
            <div class="modal-header">
                <h4 class="modal-title">New Board</h4>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>

            <!-- Modal body -->
            <div class="modal-body">
                <form>
                    <div class="form-group">
                        <input ref="name" v-model="name" placeholder="board name" type="text" class="form-control" id="name">
                    </div>
                </form>
            </div>

            <!-- Modal footer -->
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button v-on:click="create" type="button" class="btn btn-primary">Create</button>
            </div>

        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';
import qs from 'qs';

export default {
    name: 'BoardCreate',
    data() {
        return {
            name: ''
        }
    },
    mounted() {
        $(this.$refs.createModalBoard).on('hidden.bs.modal', () => {
            this.name = ''
        })
    },
    methods: {
        create: function () {

            const data = qs.stringify({
                name: this.name
            });

            axios.post('http://localhost:63048/boards', data).then(response => {
                $(this.$refs.createModalBoard).modal('hide');
                this.$emit('addBoard', response.data);
            });
        },
    }
};
</script>

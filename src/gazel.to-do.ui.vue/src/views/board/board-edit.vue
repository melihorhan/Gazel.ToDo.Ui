<template>
<div ref="editModalBoard" class="modal" :id="'editModal' + index">
    <div class="modal-dialog">
        <div class="modal-content">

            <!-- Modal Header -->
            <div class="modal-header">
                <h4 class="modal-title">Edit Board</h4>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>

            <!-- Modal body -->
            <div class="modal-body">
                <form>
                    <div class="form-group">
                        <input ref="name" v-model="cloneBoard.name" placeholder="board name" type="text" class="form-control" id="name">
                    </div>
                </form>
            </div>

            <!-- Modal footer -->
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button v-on:click="edit" type="button" class="btn btn-primary">Edit</button>
            </div>

        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';
import qs from 'qs';

export default {
    name: 'BoardEdit',
    props: ['board', 'index'],
    data() {
        return {
            cloneBoard: Object.assign({}, this.board)
        }
    },
    mounted() {
        $(this.$refs.editModalBoard).on('hidden.bs.modal', () => {
            this.cloneBoard.name = this.board.name;
            console.log(this.cloneBoard.name);
        })
    },
    methods: {
        edit: function () {

            const data = qs.stringify({
                name: this.cloneBoard.name
            });

            axios.patch(`http://localhost:63048/boards/${this.board.id}`, data).then(response => {
                this.board.name = this.cloneBoard.name;
                console.log(this.board.name);
                $(this.$refs.editModalBoard).modal('hide');
            });
        },
    }
};
</script>

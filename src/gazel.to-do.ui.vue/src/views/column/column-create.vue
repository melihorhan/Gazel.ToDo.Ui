<template>
<div ref="createModalColumn" class="modal" id="createModal">
    <div class="modal-dialog">
        <div class="modal-content">

            <!-- Modal Header -->
            <div class="modal-header">
                <h4 class="modal-title">New Column</h4>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>

            <!-- Modal body -->
            <div class="modal-body">
                <form>
                    <div class="form-group">
                        <input ref="name" v-model="name" placeholder="column name" type="text" class="form-control" id="name">
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
import Vue from 'vue';

export default {
    name: 'ColumnCreate',
    data() {
        return {
            name: ''
        }
    },
    props: ["boardId"],
    mounted() {
        $(this.$refs.createModalColumn).on('hidden.bs.modal', () => {
            this.name = ''
        })
    },
    methods: {
        create: function () {

            const data = qs.stringify({
                name: this.name
            });
            console.log(this.boardId);
            axios.post('http://localhost:63048/boards/' + this.boardId + "/columns", data).then(response => {
                    $(this.$refs.createModalColumn).modal('hide');
                    Vue.$toast.success('işlem başarılı');
                    this.$emit('addColumn', response.data);
                }).catch(error => {
                    Vue.$toast.error(error.response.data.result_message);
                })
                .finally(function () {});;
        },
    }
};
</script>

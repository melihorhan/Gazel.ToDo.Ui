<template>
<div ref="createTaskModal" class="modal" :id="'createTaskModal' + columnId">
    <div class="modal-dialog">
        <div class="modal-content">

            <div class="modal-header">
                <h4 class="modal-title">New Task</h4>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>

            <div class="modal-body">
                <form>
                    <div class="form-group">
                        <input autocomplete="off" ref="name" v-model="name" placeholder="Task name" type="text" class="form-control" id="name">
                    </div>
                </form>
            </div>

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
    name: 'TaskCreate',
    data() {
        return {
            name: ''
        }
    },
    props: ["columnId"],
    mounted() {
        $(this.$refs.createTaskModal).on('hidden.bs.modal', () => {
            this.name = ''
        })
    },
    methods: {
        create: function () {

            const data = qs.stringify({
                name: this.name
            });
            
            axios.post('http://localhost:63048/columns/' + this.columnId + "/tasks", data).then(response => {
                $(this.$refs.createTaskModal).modal('hide');
                Vue.$toast.success('işlem başarılı');
                this.$emit('addTask', response.data);
            }).catch(error => {
                Vue.$toast.error(error.response.data.result_message);
            })
        },
    }
};
</script>

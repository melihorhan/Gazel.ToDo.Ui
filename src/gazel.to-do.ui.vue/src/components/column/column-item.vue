<template>
<div class="card-body">
    <h6 class="card-title text-uppercase text-truncate py-2">{{column.name}}</h6>
    <div class="items border border-light">
        <div v-for="(task,index) in column.tasks">
            <task-item :task="task" />
            <div class="dropzone rounded" ondrop="drop(event)" ondragover="allowDrop(event)" ondragleave="clearDrop(event)"> &nbsp; </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';
import qs from 'qs';
import TaskItem from "../task/task-item.vue"

export default {
    name: 'ColumnItem',
    props: ['column'],
    components: {
        TaskItem
    },
    methods: {

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

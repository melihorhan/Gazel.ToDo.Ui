<template>
<div class="card-body">
    <h6 class="card-title text-center text-uppercase text-truncate py-2">{{column.name}}</h6>
    <div class="items border border-light">
        <div v-for="(task,index) in column.tasks">
            <task-item :task="task" />
            <div class="dropzone rounded" @ondrop="drop(event)" @ondragover="allowDrop(event)" @ondragleave="clearDrop(event)"> &nbsp; </div>
        </div>
        <task-item-new :columnId="column.id" />
        <task-create @addTask="addTask" :columnId="column.id" />
    </div>
</div>
</template>

<script>
import axios from 'axios';
import qs from 'qs';
import TaskItem from "../task/task-item.vue"
import TaskItemNew from "../task/task-item-new.vue"
import TaskCreate from "../../views/task/task-create.vue"

export default {
    name: 'ColumnItem',
    props: ['column'],
    components: {
        TaskItem,
        TaskItemNew,
        TaskCreate
    },
    methods: {
        addTask: function (task) {
            this.column.tasks.push(task);
        }
    }
};
</script>

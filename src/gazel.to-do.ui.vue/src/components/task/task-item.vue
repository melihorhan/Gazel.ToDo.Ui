<template>
<div class="card draggable shadow-sm" :id="'task-'+task.id" draggable="true" v-on:dragstart="dragstart">
    <div class="text-center">
        <div class="card-header">
            {{task.completed === true? 'Completed': 'Not completed'}}
        </div>
        <div class="card-body">
            <h5 class="card-title">{{task.id}} - {{task.name}}</h5>
            <a href="#" class="btn btn-primary">View</a>
        </div>
        <div class="card-footer text-muted">
            <span>{{task.due_date | formatDate}}</span>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'TaskItem',
    props: ["task"],
    methods: {
        dragstart: function (event) {
            event.dataTransfer.setData("text/plain", event.target.id);
        }
    }
}
</script>

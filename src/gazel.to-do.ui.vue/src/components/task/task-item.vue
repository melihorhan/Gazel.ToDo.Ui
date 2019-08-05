<template>
<div class="card draggable shadow-sm" id="cd1" draggable="true" ondragstart="drag(event)">
    <div class="card text-center">
        <div class="card-header">
            {{task.completed === true? 'Completed': 'Not completed'}}
        </div>
        <div class="card-body">
            <h5 class="card-title">{{task.name}}</h5>
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
    props: ["task"]
}
</script>

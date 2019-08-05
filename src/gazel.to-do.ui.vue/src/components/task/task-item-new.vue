<template>
<div class="text-center">
    <a class="new-task-link" href="#bannerformmodal" data-toggle="modal" :data-target="'#createTaskModal' + columnId">+NEW TASK</a>
</div>
</template>

<script>
export default {
    name: 'TaskItemNew',
    props:['columnId']
}
</script>

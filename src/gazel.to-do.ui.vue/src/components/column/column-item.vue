<template>
<div class="bg-light">
    <div class="card-body">
        <h6 class="card-title text-center text-uppercase text-truncate py-2">{{column.name}}</h6>
        <div class="items">
            <div v-for="(task,index) in column.tasks">
                <task-item :task="task" />
                <div class="dropzone rounded" v-on:drop="ondrop($event,column.id)" v-on:dragover="allowDrop" v-on:dragleave="clearDrop">&nbsp;</div>
            </div>
            <task-item-new :columnId="column.id" />
            <div class="dropzone rounded" v-on:drop="ondrop($event,column.id)" v-on:dragover="allowDrop" v-on:dragleave="clearDrop">&nbsp;</div>
            <task-create @addTask="addTask" :columnId="column.id" />
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';
import qs from 'qs';
import TaskItem from "../task/task-item.vue"
import TaskItemNew from "../task/task-item-new.vue"
import TaskCreate from "../../views/task/task-create.vue"
import Vue from 'vue';

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
        },
        allowDrop: function (ev) {
            ev.preventDefault();
            if (hasClass(ev.target, "dropzone")) {
                addClass(ev.target, "droppable");
            }
        },
        clearDrop: function (ev) {
            removeClass(ev.target, "droppable");
        },
        ondrop: function (event, columnId) {
            event.preventDefault();
            const sourceElement = event.dataTransfer.getData("text/plain");
            const element = document.querySelector(`#${sourceElement}`);

            var taskId = element.id.split('-')[1];

            const data = qs.stringify({
                column_id: columnId
            });

            axios.post('http://localhost:63048/tasks/' + taskId + "/move", data).then(response => {
                    Vue.$toast.success('işlem başarılı');
                }).catch(error => {
                    Vue.$toast.error(error.response.data.result_message);
                    return;
                })
                .finally(function () {});;

            try {
                event.target.removeChild(event.target.firstChild);
                event.target.appendChild(element);
                unwrap(event.target);
            } catch (error) {
                console.warn("can't move the item to the same place")
            }
            this.updateDropzones();
        },
        updateDropzones: function () {
            var dz = $('<div class="dropzone rounded" v-on:drop="ondrop" v-on:dragover="allowDrop" v-on:dragleave="clearDrop"> &nbsp; </div>');
            $('.dropzone').remove();
            dz.insertAfter('.card.draggable');
            $(".items:not(:has(.card.draggable))").append(dz);
        }
    }
};

// helpers
function hasClass(target, className) {
    return new RegExp('(\\s|^)' + className + '(\\s|$)').test(target.className);
}

function addClass(ele, cls) {
    if (!hasClass(ele, cls)) ele.className += " " + cls;
}

function removeClass(ele, cls) {
    if (hasClass(ele, cls)) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        ele.className = ele.className.replace(reg, ' ');
    }
}

function unwrap(node) {
    node.replaceWith(...node.childNodes);
}
</script>

<style>
.card.draggable {
    margin-bottom: 1rem;
    cursor: grab;
}

.droppable {
    background-color: var(--primary);
    min-height: 120px;
    margin-bottom: 1rem;
}
</style>

<template>
<div class="container-fluid pt-3">
    <h3 class="font-weight-light text-dark">{{board.name}}</h3>
    <div class="small  text-dark">Drag and drop between swim lanes</div>
    <div class="row flex-row board-columns flex-sm-nowrap py-3">
        <div class="col-sm-6 col-md-4 col-xl-3" v-for="(column, index) in board.columns">
            <div class="card bg-light">
                <column-item :column="column" />
            </div>
        </div>
        <div class="col-sm-6 col-md-4 col-xl-3">
            <column-item-new :boardId="board.id" />
            <column-create @addColumn="addColumn" :boardId="board.id" />
        </div>
    </div>
</div>
</template>

<script>
import ColumnItem from '../../components/column/column-item.vue';
import ColumnItemNew from '../../components/column/column-item-new.vue';
import ColumnCreate from '../column/column-create.vue';
import axios from 'axios';
import Vue from 'vue';

export default {
    data() {
        return {
            board: {},
            errors: []
        }
    },
    mounted() {
        this.getBoard();
    },
    methods: {
        getBoard: function () {
            axios.get('http://localhost:63048/boards/' + this.$route.params.id)
                .then(response => {
                    this.board = response.data
                })
                .catch(e => {
                    Vue.$toast.error(error.response.data.result_message);
                })
        },
        addColumn: function (column) {
            this.board.columns.push(column);
        },
        drag: function (event) {
            event.dataTransfer.setData("text/plain", event.target.id);
        },
        allowDrop: (ev) => {
            ev.preventDefault();
            if (hasClass(ev.target, "dropzone")) {
                addClass(ev.target, "droppable");
            }
        },
        clearDrop: (ev) => {
            removeClass(ev.target, "droppable");
        },
        drop: (event) => {
            event.preventDefault();
            const data = event.dataTransfer.getData("text/plain");
            const element = document.querySelector(`#${data}`);
            try {
                // remove the spacer content from dropzone
                event.target.removeChild(event.target.firstChild);
                // add the draggable content
                event.target.appendChild(element);
                // remove the dropzone parent
                unwrap(event.target);
            } catch (error) {
                console.warn("can't move the item to the same place")
            }
            updateDropzones();
        },
        updateDropzones: () => {
            /* after dropping, refresh the drop target areas
              so there is a dropzone after each item
              using jQuery here for simplicity */

            var dz = $('<div class="dropzone rounded" ondrop="drop(event)" ondragover="allowDrop(event)" ondragleave="clearDrop(event)"> &nbsp; </div>');

            // delete old dropzones
            $('.dropzone').remove();

            // insert new dropdzone after each item   
            dz.insertAfter('.card.draggable');

            // insert new dropzone in any empty swimlanes
            $(".items:not(:has(.card.draggable))").append(dz);
        }
    },
    components: {
        ColumnItem,
        ColumnItemNew,
        ColumnCreate
    }
}

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
    background-color: var(--success);
    min-height: 120px;
    margin-bottom: 1rem;
}
</style>

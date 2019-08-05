<template>
<div class="container-fluid pt-3">
    <h3 class="font-weight-light text-dark">{{board.name}}</h3>
    <div class="small  text-dark">Drag and drop between swim lanes</div>
    <div class="row flex-row flex-sm-nowrap py-3">
        <div class="col-sm-6 col-md-4 col-xl-3" v-for="(column, index) in columns">
            <div class="card bg-light">
                <column-item :column="column" />
            </div>
        </div>
    </div>
</div>
</template>

<script>
import ColumnItem from '../../components/column/column-item.vue';

export default {
    data() {
        return {
            board: {
                name: "Gazel"
            },
            columns: [{
                    id: 1,
                    name: "To Do",
                    tasks: [
                        {
                            "id": 1,
                            "name": "deploy to do app",
                            "due_date": "20190811114612",
                            "notes": 'bla abl',
                            "completed": false,
                            "user_id": 0
                        },
                        {
                            "id": 1,
                            "name": "deploy to do app",
                            "due_date": "20190811114612",
                            "notes": 'bla abl',
                            "completed": false,
                            "user_id": 0
                        },
                    ]
                },
                {
                    id: 1,
                    name: "In Progress",
                    tasks: [
                       {
                            "id": 1,
                            "name": "deploy to do app",
                            "due_date": "20190811114612",
                            "notes":'bla abl',
                            "completed": true,
                            "user_id": 0
                        },
                        {
                            "id": 1,
                            "name": "deploy to do app",
                            "due_date": "20190911112612",
                            "notes": 'bla abl',
                            "completed": true,
                            "user_id": 0
                        },
                    ]
                },
                {
                    id: 1,
                    name: "Review",
                    tasks: [
                        {
                            "id": 1,
                            "name": "deploy to do app",
                            "due_date": "20190811114612",
                            "notes": 'bla abl',
                            "completed": false,
                            "user_id": 0
                        },
                        {
                            "id": 1,
                            "name": "deploy to do app",
                            "due_date": "20190811114612",
                            "notes": 'bla abl',
                            "completed": false,
                            "user_id": 0
                        },
                    ]
                },
                {
                    id: 1,
                    name: "Complete",
                    tasks: [
                       {
                            "id": 1,
                            "name": "deploy to do app",
                            "due_date": "20190811114612",
                            "notes": null,
                            "completed": false,
                            "user_id": 0
                        },
                        {
                            "id": 1,
                            "name": "deploy to do app",
                            "due_date": "20190811114612",
                            "notes": null,
                            "completed": false,
                            "user_id": 0
                        },
                    ]
                }
            ],
            errors: []
        }
    },
    components: {
        ColumnItem
    }

}
</script>

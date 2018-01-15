<template>
  <div>
    <div class="card border-dark mb-3" style="max-width: 14rem; margin: auto;">
      <div class="card-header"> <b>{{ task.title }}</b></div>
      <div class="card-body" style="text-align: left; margin: 0%">
        <p> Point : {{ task.point }} </p>
        <p> assigned to : {{ task.assignedto }} </p>
        <button type="button" class="btn btn-success btn-sm" data-toggle="modal" data-target="#myModal" @click="detail">Show more</button>
      </div>
    </div>
    <!-- modal -->
    <div class="modal" id="myModal">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title"> Detail Task {{ titleDetail }}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <ul class="list-group">
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Description : {{ descDetail }}
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Point : {{ pointDetail }}
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Assigned to : {{ assignDetail }}
              </li>
            </ul>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-dismiss="modal" @click="removeTask">Delete</button>
            <button type="button" class="btn btn-info">prev</button>
            <button type="button" class="btn btn-info">next</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {todo, doing, done} from '@/firebase'
// import {db} from '@/firebase'
export default {
  props: ['task', 'db', 'index'],
  data () {
    return {
      titleDetail: '',
      descDetail: '',
      pointDetail: 0,
      assignDetail: ''
    }
  },
  methods: {
    removeTask () {
      console.log(this.task)
      this.task.key = this.task['.key']
      this.task.db = this.db
      this.$emit('remove-task', this.task)
    },
    detail () {
      this.titleDetail = this.task.title
      this.descDetail = this.task.description
      this.pointDetail = this.task.point
      this.assignDetail = this.task.assignedto
      console.log(this.titleDetail)
      console.log(this.task['.key'])
    },
    nextMove (task) {
      switch (this.db) {
        case 'backlog' : {
          todo.push(task)
          break
        }
        case 'todo' : {
          doing.push(task)
          break
        }
        case 'doing' : {
          done.push(task)
          break
        }
        case 'done' : {
          done.push(task)
          break
        }
      }
    }

  }
}
</script>

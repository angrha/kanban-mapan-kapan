<template>
<!-- modal -->
<!-- unUse -->
  <div class="modal" id="myModal">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title"> Detail Task {{ task.title }}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center">
              Description : {{ task.description }}
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              Point : {{ task.point }}
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              Assigned to : {{ task.assignedto }}
            </li>
          </ul>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-dismiss="modal" @click="deleteTask(task)">Delete</button>
          <button type="button" class="btn btn-info">prev</button>
          <button type="button" class="btn btn-info">next</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {backlog, todo, doing, done} from '@/firebase'
export default {
  props: ['task'],
  methods: {
    deleteTask (task) {
      console.log(task)
      switch (task.db) {
        case 'backlog' : {
          backlog.child(task.key).remove()
          break
        }
        case 'todo' : {
          todo.child(task.key).remove()
          break
        }
        case 'doing' : {
          doing.child(task.key).remove()
          break
        }
        case 'done' : {
          done.child(task.key).remove()
          break
        }
      }
    }
  }
}
</script>

<style>

</style>

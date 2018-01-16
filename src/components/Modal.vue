<template>
<!-- modal -->
<!-- unUse -->
  <div class="modal" id="myModal">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title"> Detail Task {{ title }}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center">
              Description : {{ description }}
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              Point : {{ point }}
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              Assigned to : {{ assignedto }}
            </li>
          </ul>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-dismiss="modal" @click="deleteTask(task)">Delete</button>
          <button type="button" class="btn btn-info" data-dismiss="modal" @click="preMove(task)">prev</button>
          <button type="button" class="btn btn-info" data-dismiss="modal" @click="nextMove(task)">next</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {backlog, todo, doing, done} from '@/firebase'
export default {
  props: ['task'],
  data () {
    return {
      title: this.task.title,
      description: this.task.description,
      point: this.task.point,
      assignedto: this.task.assignedto
    }
  },
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
    },
    nextMove (task) {
      let objDetail = {
        assigned: task.assignedto,
        title: task.title,
        point: task.point,
        description: task.description
      }

      switch (task.db) {
        case 'backlog' : {
          todo.push(objDetail)
          break
        }
        case 'todo' : {
          doing.push(objDetail)
          break
        }
        case 'doing' : {
          done.push(objDetail)
          break
        }
        case 'done' : {
          done.push(objDetail)
          break
        }
      }
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
    },
    prevMove (task) {
      let objDetail = {
        assigned: task.assignedto,
        title: task.title,
        point: task.point,
        description: task.description
      }

      switch (task.db) {
        case 'backlog' : {
          backlog.push(objDetail)
          break
        }
        case 'todo' : {
          backlog.push(objDetail)
          break
        }
        case 'doing' : {
          todo.push(objDetail)
          break
        }
        case 'done' : {
          todo.push(objDetail)
          break
        }
      }
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

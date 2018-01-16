<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <a class="navbar-brand" style="margin-left: 2%; font-size:22px; padding: 0%;" href="#">Kanban Board</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation" style="">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div style="margin-left: 75%;">
          <button type="button" @click="modal" class="btn btn-secondary my-2 my-sm-0">New Task</button>
      </div>
    </nav>

     <!-- modal -->
    <div v-if="isModal">
        <legend> New Task</legend>
      <div  class="col-md-6 col-md-offset-4" style="margin: auto;">
        <form class="form-horizontal" role="form">
          <fieldset>
            <!-- Text input-->
            <div class="form-group">
              <div class="col-sm-10">
                <input v-model="taskTitle" type="text" placeholder="Task Title" class="form-control">
              </div>
            </div>

            <!-- Text input-->
            <div class="form-group">
              <div class="col-sm-10">
                <input v-model="taskDesc" type="text" placeholder="Description" class="form-control">
              </div>
            </div>

            <!-- Text input-->
            <div class="form-group">
              <div class="col-sm-10">
                <input v-model="point" type="number" placeholder="Point" class="form-control">
              </div>
            </div>
                  <!-- Text input-->
            <div class="form-group">
              <div class="col-sm-10">
                <input v-model="assignedto" type="text" placeholder="Assigned to" class="form-control">
              </div>
            </div>

            <div class="form-group">
              <div class="col-sm-offset-2 col-sm-10">
                <div class="pull-right" style="float: right;">
                  <button type="submit" class="btn btn-primary" @click="cancel">Cancel</button>
                  <button @click="submitTask" type="submit" class="btn btn-success">Save</button>
                </div>
              </div>
            </div>

          </fieldset>
        </form>
      </div><!-- /.col-lg-12 -->
    </div><!-- /.row -->

    <!-- cards -->
    <div class="row" style="margin: 1.5%;">
      <!-- back-log -->
      <div class="card border-primary mb-3 col-md-3" style="max-width: 18rem; margin: 1%;">
        <div class="card-header text-primary"><h4> Back-Log</h4></div>
        <div class="card-body">
          <TaskCard v-for="(task, index) in backlog" :key="index" :task="task" db="backlog" @detail-task="detail"/>
        </div>
      </div>
      <!-- todo -->
      <div class="card border-warning mb-3 col-md-3" style="max-width: 18rem; margin: 1%;">
        <div class="card-header text-warning"><h4>To-Do</h4></div>
        <div class="card-body">
         <TaskCard v-for="(task, index) in todo" :key="index" :task="task" db="todo" @detail-task="detail"/>
        </div>
      </div>
      <!-- doing -->
      <div class="card border-info mb-3 col-md-3" style="max-width: 18rem; margin: 1%;">
        <div class="card-header text-info"><h4>Doing</h4></div>
        <div class="card-body">
          <TaskCard v-for="(task, index) in doing" :key="index" :task="task" db="doing" @detail-task="detail"/>
        </div>
      </div>
      <!-- done -->
      <div class="card border-success mb-3 col-md-3" style="max-width: 18rem; margin: 1%;">
        <div class="card-header text-success"><h4>Done</h4></div>
        <div class="card-body">
          <TaskCard v-for="(task, index) in done" :key="index" :task="task" db="done" @detail-task="detail"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TaskCard from '@/components/TaskCard'
import {backlog, todo, doing, done} from '@/firebase'
export default {
  firebase: {
    backlog: backlog,
    todo: todo,
    doing: doing,
    done: done
  },
  data () {
    return {
      isModal: false,
      taskTitle: '',
      taskDesc: '',
      point: 0,
      assignedto: ''
    }
  },
  components: {
    TaskCard
  },
  methods: {
    modal () {
      this.isModal = !this.isModal
    },
    cancel () {
      this.isModal = false
    },
    detail (payload) {
      this.$emit('detail', payload)
    },
    submitTask () {
      backlog.push({
        title: this.taskTitle,
        description: this.taskDesc,
        point: this.point,
        assignedto: this.assignedto
      })
      this.taskTitle = ''
      this.taskDesc = ''
      this.point = 0
      this.assignedto = ''
      this.isModal = false
    },
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

<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <a class="navbar-brand" style="margin-left: 5%;" href="#">Kanban Board</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation" style="">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div style="margin-left: 70%;">
          <button type="button" @click="modal" class="btn btn-secondary my-2 my-sm-0" data-toggle="modal" data-target="#myModal">New Task</button>
      </div>
    </nav>

     <!-- modal -->
    <div v-if="isModal" class="row" >
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
                  <button type="submit" class="btn btn-default" @click="cancel">Cancel</button>
                  <button @click="submitTask" type="submit" class="btn btn-primary">Save</button>
                </div>
              </div>
            </div>

          </fieldset>
        </form>
      </div><!-- /.col-lg-12 -->
    </div><!-- /.row -->

    <!-- cards -->
    <TaskCard style="margin: 3%;"/>
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
      this.isModal = true
    },
    cancel () {
      this.isModal = false
    },
    submitTask () {
      backlog.push({
        'title': this.taskTitle,
        'description': this.taskDesc,
        'point': this.point,
        'assignedto': this.assignedto
      })
      this.taskTitle = ''
      this.taskDesc = ''
      this.point = 0
      this.assignedto = ''
      this.isModal = false
    }
  }
}
</script>

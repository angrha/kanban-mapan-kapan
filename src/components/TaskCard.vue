<template>
  <div>
    <div class="card border-dark mb-3" style="max-width: 14rem; margin: auto;">
      <div class="card-header"> <b>{{ task.title }}</b></div>
      <div class="card-body" style="text-align: left; margin: 0%">
        <p> Point : {{ task.point }} </p>
        <p> assigned to : {{ task.assignedto }} </p>
        <!-- <button type="button" class="btn btn-success btn-sm" data-toggle="modal" data-target="#myModal" @click="detail">Show more</button> -->
        <button type="button" class="btn btn-primary" @click="removeTask">Delete</button>
        <button @click="prevMove(task)" type="button" class="btn btn-info">prev</button>
        <button @click="nextMove(task)" type="button" class="btn btn-info">next</button>
      </div>
    </div>
  </div>
</template>

<script>
import {backlog, todo, doing, done} from '@/firebase'
export default {
  props: ['task', 'db', 'index'],
  data () {
    return {
      objDetail: {
        assigned: '',
        title: '',
        point: 0,
        description: ''
      }
    }
  },
  methods: {
    removeTask () {
      this.task.key = this.task['.key']
      this.task.db = this.db
      this.$emit('remove-task', this.task)
    },
    nextMove (task) {
      console.log('task', task.title)
      console.log('ini dbdfdsdjfdsnjf', this.db)
      let objDetail = {
        assigned: task.assignedto,
        title: task.title,
        point: task.point,
        description: task.description
      }
      console.log('ini obj', objDetail)
      switch (this.db) {
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
    },
    prevMove (task) {
      console.log('task', task.title)
      console.log('ini dbdfdsdjfdsnjf', this.db)
      let objDetail = {
        assigned: task.assignedto,
        title: task.title,
        point: task.point,
        description: task.description
      }
      console.log('ini obj', objDetail)
      switch (this.db) {
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
    }

  }
}
</script>

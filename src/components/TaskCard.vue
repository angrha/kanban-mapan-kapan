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
      // this.titleDetail = this.task.title
      // this.descDetail = this.task.description
      // this.pointDetail = this.task.point
      // this.assignDetail = this.task.assignedto
      // console.log(this.titleDetail)
      // console.log(this.task['.key'])
      this.task.key = this.task['.key']
      this.task.db = this.db
      this.$emit('detail-task', this.task)
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

<template>
  <div>
    <div class="card border-dark mb-3" style="max-width: 14rem; margin: auto;">
      <div class="card-header"> <b>{{task.title}}</b></div>
      <div class="card-body" style="text-align: left; margin: 0%">
        <p> Point : {{ task.point }} </p>
        <p> assigned to : {{ task.assigned }} </p>
        <button type="button" class="btn btn-success btn-sm" data-toggle="modal" data-target="#myModal" @click="detail">Show more</button>
      </div>
    </div>
    <!-- modal -->
  </div>
</template>

<script>
export default {
  props: ['task', 'db', 'index'],
  methods: {
    removeTask () {
      console.log(this.task)
      this.task.key = this.task['.key']
      this.task.db = this.db
      this.$emit('remove-task', this.task)
    },
    detail () {
      this.task.key = this.task['.key']
      this.task.db = this.db
      this.$emit('detail-task', this.task)
      console.log('ini dari taskcard', this.task['.key'])
    }
  }
}
</script>

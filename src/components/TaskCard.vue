<template>
  <div>
    <div class="card border-dark mb-3" style="max-width: 14rem; margin: auto;">
      <div class="card-header"> <b>{{ task.title }}</b></div>
      <div class="card-body" style="text-align: left; margin: 0%">
        <p> Point : {{ task.point }} </p>
        <p> assigned to : {{ task.assignedto }} </p>
        <button type="button" class="btn btn-success btn-sm" data-toggle="modal" data-target="#myModal">Show more</button>
      </div>
    </div>
    <!-- modal -->
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
            <button type="button" class="btn btn-primary" data-dismiss="modal" @click="remove">Delete</button>
            <button type="button" class="btn btn-info">Move</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['task', 'db'],
  methods: {
    remove () {
      console.log(this.task)
      this.task.key = this.task['.key']
      this.task.db = this.db
      this.$emit('remove-task', this.task)
    }
  }
}
</script>

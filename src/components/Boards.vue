<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <a class="navbar-brand" style="margin-left: 5%;" href="#">Kanban Board</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation" style="">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div style="margin-left: 70%;">
          <button @click="modal" class="btn btn-secondary my-2 my-sm-0" data-toggle="modal" data-target="#myModal">Add Task</button>
      </div>
    </nav>
     <!-- modal -->
    <div v-if="isModal" class="modal" id="myModal">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>Modal body text goes here.</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary">Save changes</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isModal: false
    }
  },
  methods: {
    modal () {
      this.isModal = true
    }
  }
}
</script>

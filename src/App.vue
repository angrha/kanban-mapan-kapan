<template>
  <div id="app">
    <router-view/>
    <Modal @detail="detailTask" :task="task"/>
  </div>
</template>

<script>
import Tasks from '@/components/Tasks'
import Modal from '@/components/Modal'
export default {
  name: 'App',
  components: {
    Tasks,
    Modal
  },
  data () {
    return {
      task: null
    }
  },
  methods: {
    detailTask (payload) {
      console.log(payload.key)
      this.task = payload
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

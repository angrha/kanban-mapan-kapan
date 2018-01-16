<template>
  <div id="app">
    <Tasks @detail="detailTask"/>
    <Modal :task="task"/>
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
      task: {}
    }
  },
  methods: {
    detailTask (payload) {
      console.log('iniii di app', payload)
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

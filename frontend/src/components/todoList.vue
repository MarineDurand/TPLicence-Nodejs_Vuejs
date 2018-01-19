<template>
  <ul class="list-group">
    <todo v-for="(todo, key) in todoList" :todoList="todoList" :name="todo.name" :index="key" :key="key"></todo>
  </ul>
</template>

<script>
  import todo from '@/components/todo'
  import axios from 'axios'

  export default {
    name: 'todoList',
    components: {
      todo
    },
    data () {
      return {
        todoList: []
      }
    },
    created () {
      axios.get('http://localhost:3000/todolist', {withCredentials: true})
        .then((response) => {
          console.log(response.data)
          this.todoList = response.data.todoList
        })
        .catch(function (error) {
          console.log(error.data)
        })
    }
  }
</script>

<style scoped>

</style>

<template>
  <li class="list-group-item d-flex justify-content-between align-items-center h5"
      style="border-color:#17a2b8; margin-bottom: 2.2px">
    {{name}}
    <div>
      <router-link id="edit" :to="{name: 'editTodo', params:{id:index}}" class="btn btn-link">
        <i class="fa fa-pencil" aria-hidden="true"></i> Modifier
      </router-link>
      <router-link id="details" :to="{name: 'detailsTodo', params:{id:index}}" class="btn btn-link">
        <i class="fa fa-info-circle" aria-hidden="true"></i> Détails
      </router-link>
      <a href="#" id="delete"><i class="fa fa-times" aria-hidden="true"
                                 v-on:click.prevent="deleteTodo(todoList,index)"></i></a>
    </div>
  </li>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'todo',
    props: [
      'name',
      'index',
      'todoList'
    ],
    data () {
      return {}
    },
    methods: {
      deleteTodo (todoList, id) {
        axios.delete('http://localhost:3000/todolist/delete/' + id, {withCredentials: true})
          .then((response) => {
            if (response.data === true) {
              todoList.splice(id, 1)
            }
            console.log(response)
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    }
  }
</script>

<style scoped>
  #edit, #details, #delete {
    color: #17a2b8
  }
</style>

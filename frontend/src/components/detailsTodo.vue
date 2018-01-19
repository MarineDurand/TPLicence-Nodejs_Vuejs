<template>
  <div class="container">
    <div class="card col-7" style="margin: auto">
      <div class="card-block" style="padding: 1.25rem">
        <h3 class="card-title">Todo : <strong>{{todo.name}}</strong></h3>
        <h6 class="card-subtitle mb-2 text-muted">Détails :</h6>
        <p class="card-text">{{todo.details}}</p>
        <router-link to="/" class="card-link btn btn-info">Retour TodoList</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'detailsTodo',
    data () {
      return {
        todo: []
      }
    },
    created () {
      axios.get('http://localhost:3000/todo/' + this.$route.params.id, {withCredentials: true})
        .then((response) => {
          console.log(response.data)
          this.todo = response.data.todo
        })
        .catch(function (error) {
          console.log(error.data)
        })
    }
  }
</script>

<style scoped>

</style>

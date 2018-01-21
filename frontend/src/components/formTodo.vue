<template>
  <div class="container">
    <h1>Formulaire Todo</h1>
    <form>
      <div class="form-group">
        <label for="todo">Nom</label>
        <input type="text" v-model="todo" class="form-control" id="todo" placeholder="Entrez la tâche" >
        <label for="details">Détails</label>
        <input type="text" v-model="details" class="form-control" id="details"
               placeholder="Entrez plus de détails" >
      </div>
      <button v-if="this.$route.name === 'addTodo'" type="submit" class="btn btn-outline-info" v-on:click.prevent="addTodo">Ajouter</button>
      <button v-else type="submit" class="btn btn-outline-info" v-on:click.prevent="editTodo">Modifier</button>
    </form>
    <div class="text-right">
      <router-link to="/" class="card-link btn btn-info">Retour TodoList</router-link>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'formTodo',
    data () {
      return {
        todo: '',
        details: ''
      }
    },
    created () {
      axios.get('http://localhost:3000/todo/' + this.$route.params.id, {withCredentials: true})
        .then((response) => {
          console.log(response.data)
          this.todo = response.data.todo.name
          this.details = response.data.todo.details
        })
        .catch(function (error) {
          console.log(error.data)
        })
    },
    methods: {
      addTodo () {
        axios.post('http://localhost:3000/todo/add', {
          todo: this.todo,
          details: this.details
        }, {withCredentials: true})
          .then((response) => {
            console.log(response)
            this.$router.push('/')
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      editTodo () {
        axios.post('http://localhost:3000/todo/edit/' + this.$route.params.id, {
          todo: this.todo,
          details: this.details
        }, {withCredentials: true})
          .then((response) => {
            console.log(response)
            this.$router.push('/')
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    }
  }
</script>

<style scoped>

</style>

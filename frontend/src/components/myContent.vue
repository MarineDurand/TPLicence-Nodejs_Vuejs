<template>
  <div class="container">
    <div class="row">
      <div class="ml-auto">
        <myRightContent></myRightContent>
      </div>
    </div>
    <div style="margin-top: 2%" class="row">
      <div class="col-12">
        <todoList></todoList>
      </div>
    </div>
  </div>
</template>

<script>
  import todoList from '@/components/todoList'
  import myRightContent from '@/components/myRightContent'

  export default {
    name: 'myContent',
    components: {
      todoList,
      myRightContent
    }
  }
</script>

<style>

</style>

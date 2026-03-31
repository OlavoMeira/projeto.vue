<template>
  <TheHeader v-show="showHeader" />
  
<!--  CONDICIONAIS
  <div>
    Nome: {{ nome }}
  </div>

  <span v-if="acesso === 'admin'"> Usuário Admin </span>
  <span v-else-if="acesso === 'usuario'"> Usuário Normal</span>
  <span v-else>Usuário inexistente</span>
--> 

 <!-- lops de repetição e a diretiva v-bind.

<div>
  <div v-for="(obj,index) in todos" v-bind:key="obj.id">

     <img v-bind:src="obj.img" v-bind:alt="placeholder">
     {{ index }} - {{ obj.title }}
  </div>

</div>

--> 

  <br>

  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TheHeader from './components/TheHeader.vue'
 

export default {
  name: 'App',
  components: {
    HelloWorld,
    TheHeader,
    
  },
  data() {
    return {
      showHeader: false,
     // nome: 'Olavo',
     // acesso: 'aaaaaa',
     placeholder: 'Dinamico',
      todos: [
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false,
    "img": 'https://placehold.co/100x100',
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false,
    "img": 'https://placehold.co/200x200',
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },
  {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  }
]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
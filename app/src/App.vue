<template>
  <TheHeader/>
  <div >
    <button @click="onclick()">
        enviar
    </button>

  </div>

  <div @mouseover="onMouseover" class="box-interativa">

       MOUSEOVER
  </div>

  <div @mouseenter="onMouseenter" class="box">
      VEM QUE TEM
  </div>
  <img 

  alt="Vue logo" 

  src="./assets/logo.png"
  
  >
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TheHeader from './components/TheHeader.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    TheHeader
  },
  data(){
    return {
      
      

    }
  },
  methods: {
    onclick(){
      console.log('click');
    },

    onMouseover(){
      console.log("mouseoverrrr");
    },

    onMouseenter(){
      console.log("MOUSEENTER'-''");
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

.box-interativa {
  padding: 20px;
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  cursor: pointer; /* Ajuda o usuário a entender que é interativo */
}

.box{
    padding: 20px;
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  cursor: pointer; 
}
</style>

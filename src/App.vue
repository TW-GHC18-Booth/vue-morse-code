<template>
  <div id="app">
    <h1> Morse Code Translator </h1>
    <translator />
  </div>
</template>

<script>
import Translator from '@components/translator/translator';

export default {
  name: 'app',
  components: {
    Translator
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
  margin-top: 60px;
}

canvas {
  background-color: #000;
  width: 700px;
  height: 400px;
  margin: 0 auto;
}
</style>

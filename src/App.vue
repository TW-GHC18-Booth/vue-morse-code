
<script>
import Translator from '@components/translator/translator';
import Sidebar from '@components/sidebar/sidebar';

export default {
  name: 'app',
  components: {
    Translator,
    Sidebar
  }
}
</script>

<template>
  <div id="app">
    <div class="main-container">
      <translator />
    </div>
    <div class="sidebar">
      <sidebar />
    </div>
  </div>
</template>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-wrap: nowrap;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
  height:100vh;
}

.main-container {
  flex: 0 1 70%;
}

.sidebar {
  flex: 0 1 30%;
  background-color: #d2ecef;
}

</style>

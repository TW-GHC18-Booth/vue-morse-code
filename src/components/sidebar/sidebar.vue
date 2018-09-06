<script>
import morseAlphabet from '@utils/morseAlphabet';

export default {
  name: 'Sidebar',
  data() {
    return {
      morseAlphabet: ''
    }
  },
  methods: {
  }
};
</script>

<template>
  <div class="sidebar">
   <h3> Morse Code Alphabet </h3>
    <div class="sidebar-container">
      <p v-for="(key, val) in morseAlphabet" :key="val" > <span>{{key}}</span>: {{val}} </p>
    </div>
  </div>
</template>

<style scoped>
 .sidebar {
   text-align: left;
   height: 100vh;
   padding: 20px;
   position: relative;
 }
 .sidebar-container {
   display: flex;
   flex-wrap: wrap;
 }
 .sidebar-container p {
   flex: 0 1 33%;
   font-size: 24px;
 }
 .sidebar-container p span {
   font-weight: bold;
 }
</style>
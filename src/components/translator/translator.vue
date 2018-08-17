<script>
export default {
  name: 'Translator',
  data() {
    return {
      inputString: ''
    }
  },
  methods: {
    translateToEnglish() {
    }
  }
};
</script>

<template>
  <div class="translate-field">
    <input type="text" v-model="inputString" /> 
    <button @click="translateToEnglish"> Translate to English </button>
  </div>
</template>

<style scoped>

.translate-field {
  display: flex;
  margin: 0 auto;
  width: 90%;
  justify-content: center;
}

.translate-field input {
  border-radius: 8px;
  height: 30px;
  width: 60%;
}
.translate-field button {
  background-color: #74a0e8;
  border-radius: 8px;
  font-weight: bold;
  margin-left: 15px;
}
</style>
<script>
export default {
  name: 'InputField'
};
</script>

<template>
  <div class="translate-field">
    <input type="text" /> 
    <button> Translate to English </button>
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
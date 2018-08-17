<script>
import { isValidMorseInput, translateMorseToEnglish } from './utils/translatorUtils';

export default {
  name: 'Translator',
  data() {
    return {
      inputString: '',
      translatedString: '',
      validInput: true
    }
  },
  methods: {
    translateToEnglish() {
      this.validInput = isValidMorseInput(this.inputString);
      if (this.validInput) {
        this.translatedString = translateMorseToEnglish(this.inputString);
      }
    }
  }
};
</script>

<template>
  <div>
    <div class="translate-field">
      <input type="text" v-model="inputString" /> 
      <button @click="translateToEnglish"> Translate to English </button>
    </div>
    <p v-show="!validInput" class="warning"> Invalid Input </p>
    <div class="translated-display">
      <h3> $translated-string:> </h3> 
      <p> {{ translatedString }} </p>
    </div>
  </div>
</template>

<style scoped>

.translated-display {
  background-color: #001b47;
  border-radius: 10px;
  color: #1bba00;
  display: flex;
  font-family: 'Courier New', Courier, monospace;
  height: 100px;
  margin: 50px auto;
  padding: 0 20px;
  align-items: center;
  width: 70%;
}

.translated-display p {
  margin-left: 20px;
}

.translate-field {
  display: flex;
  margin: 0 auto;
  width: 90%;
  justify-content: center;
}

.translate-field input {
  border-radius: 8px;
  font-size: 28px;
  font-weight: bold;
  height: 30px;
  width: 60%;
}

.translate-field button {
  background-color: #74a0e8;
  border-radius: 8px;
  font-weight: bold;
  margin-left: 15px;
}

.warning {
  color: #ff0000;
}
</style>
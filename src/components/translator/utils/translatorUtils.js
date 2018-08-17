export const UNTRANSLATABLE = 'Untranslatable';
import morseAlphabet from './morseAlphabet';

export function isValidMorseInput(input) {
  const morseMatcher = /^[ .-]*/g;
  if (input === '' || 
      input.match(morseMatcher).join() !== input) {   
    return false;
  }
  return true;
};

export function translateMorseToEnglish(input) {
  const morseArr = input.split(' ');
  let englishStr = '';
  let spaceCounter = 0;
  morseArr.forEach(char => {
    if(char === '') {
      spaceCounter ++;
      if (spaceCounter === 2) {
        englishStr += ' ';
        spaceCounter = 0;
      }
    } else {
      if (Object.keys(morseAlphabet.MORSE_TO_ENGLISH).includes(char)) {
        englishStr += morseAlphabet.MORSE_TO_ENGLISH[char];
      } else {
        englishStr += '#';
      }
    }
  });
  if (englishStr.includes('#')) { return UNTRANSLATABLE };

  return englishStr;
}
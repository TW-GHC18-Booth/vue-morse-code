export const UNTRANSLATABLE = 'Untranslatable';
import morseAlphabet from '@utils/morseAlphabet';

export function isValidMorseInput(input) {
  //regular expression to exclude anything except dots and dashes
  const morseMatcher = /^[ .-]*/g;
  
  return true;
}

export function translateMorseToEnglish(input) {

  return input;
}
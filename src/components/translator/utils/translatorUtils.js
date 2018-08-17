
export function isValidMorseInput(input) {
  const morseMatcher = /^[ .-]*/g;
  if (input === '' || 
      input.match(morseMatcher).join() !== input) {   
    return false;
  }
  return true;
};
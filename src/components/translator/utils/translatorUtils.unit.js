import {
  UNTRANSLATABLE, 
  isValidMorseInput,
  translateMorseToEnglish } from './translatorUtils';


describe('translatorUtils', () => {
  
  describe('isValidMorseInput', () => {
    
    it('should return false if empty input', () => {
      const input = '';
      expect(isValidMorseInput(input)).toEqual(false);
    });
    
    it('should return false if input contains anything except dashes and dots', () => {
      const input = '--..abl-.';
      expect(isValidMorseInput(input)).toEqual(false);
    });
   
    it('should return true if valid input', () => {
      const input = '.... ..';
      expect(isValidMorseInput(input)).toEqual(true);
    });
  });

  describe('translateMorseToEnglish', () => {
    
    it('returns the letter A when given morse letter A', () => {
      const translation = translateMorseToEnglish('.-');
      expect(translation).toEqual('A');
    });

    it('returns HELLO when given morse word', () => {
      const translation = translateMorseToEnglish('.... . .-.. .-.. ---');
      expect(translation).toEqual('HELLO');
    });

    it('returns HELLO GHC when given morse sentence', () => {
      const translation = translateMorseToEnglish('.... . .-.. .-.. ---   --. .... -.-.');
      expect(translation).toEqual('HELLO GHC');
    });

    it('returns Untranslatable when morse code does not equal letters', () => {
      const translation = translateMorseToEnglish('.....--- ---...---');
      expect(translation).toEqual(UNTRANSLATABLE);
    });

  });

});
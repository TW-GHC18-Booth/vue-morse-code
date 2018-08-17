import { isValidMorseInput } from './translatorUtils';


describe('translatorUtils', () => {
  describe('isValidMorseInput', () => {
    it('should return false if empty input', () => {
      const input = '';
      expect(isValidMorseInput(input)).toEqual(false);
    })
    it('should return false if input contains anything except dashes and dots', () => {
      const input = '--..abl-.';
      expect(isValidMorseInput(input)).toEqual(false);
    })
    it('should return true if valid input', () => {
      const input = '.... ..';
      expect(isValidMorseInput(input)).toEqual(true);
    })
  })
});
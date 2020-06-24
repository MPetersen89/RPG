import { Character } from './../src/Character.js';

describe('Character', () => {
  
  test('should create a character object for the player', () => {
    let character = new Character();
    expect(character).toBeDefined();
  });
});
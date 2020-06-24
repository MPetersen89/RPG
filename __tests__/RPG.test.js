import { Character } from './../src/Character.js';

describe('Character', () => {
  let character;

  beforeEach(() => {
    character = new Character();
  });

  test('should create a character object for the player', () => {
    expect(character).toBeDefined();
  });

  test('should populate the character with empty attributes', () => {
    expect(character.health).toBeNull();
    expect(character.strength).toBeNull();
    expect(character.intelligence).toBeNull();
    expect(character.dexterity).toBeNull();
  });
});
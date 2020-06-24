import { Character } from './../src/Character.js';
import { Warrior } from './../src/warrior.js';

describe('Character', () => {
  let character;

  beforeEach(() => {
    character = new Character(null, null, null, null);
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

  test('should update character object based on selected class', () => {
    let warrior = new Warrior();
    expect(warrior.class).toBe("warrior");
    expect(warrior.health).toBe(20);
    expect(warrior.strength).toBe(20);
    expect(warrior.intelligence).toBe(20);
    expect(warrior.dexterity).toBe(10);
  })
});
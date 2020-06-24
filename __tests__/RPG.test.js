import { Character } from './../src/Character.js';
import { Warrior } from './../src/warrior.js';
import { Wizard } from './../src/wizard.js';

describe('Character', () => {
  let character;
  let warrior;
  let wizard;

  beforeEach(() => {
    character = new Character(null, null, null, null);
    warrior = new Warrior();
    wizard = new Wizard();
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
    expect(warrior.class).toBe("warrior");
    expect(warrior.health).toBe(20);
    expect(warrior.strength).toBe(20);
    expect(warrior.intelligence).toBe(5);
    expect(warrior.dexterity).toBe(10);
  });

  test('should update character with predefined abilities', () => {
    expect(warrior.powerSmash()).toBeTruthy();
    expect(warrior.doubleStrike()).toBeTruthy();
  });

  test('should repeat the above for wizard', () => {
    expect(wizard.class).toBe("wizard");
    expect(wizard.health).toBe(10);
    expect(wizard.strength).toBe(5);
    expect(wizard.intelligence).toBe(20);
    expect(wizard.dexterity).toBe(10);
    expect(wizard.fireball()).toBeTruthy();
    expect(wizard.lightningBolt()).toBeTruthy();
  });
});
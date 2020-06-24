import { Character } from './Character.js';

export class Warrior extends Character {
  constructor() {
    super(20, 20, 5, 10);
    this.class = "warrior";
  }
  powerSmash() {
    return this.strength
  }
}

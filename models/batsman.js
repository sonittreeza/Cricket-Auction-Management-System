const Player = require('./player');

/**
 * Represents a Batsman player.
 * Extends the base Player class.
 */
class Batsman extends Player {
  /**
   * @param {number|string} id - Unique identifier for the player
   * @param {string} name - Name of the player
   * @param {number} age - Age of the player
   * @param {string} role - Role of the player ("Batsman")
   * @param {number} basePrice - Minimum auction price
   * @param {number} soldPrice - The final auction price
   * @param {string} battingStyle - Left-hand or Right-hand batsman
   */
  constructor(id, name, age, role, basePrice, soldPrice, battingStyle) {
    super(id, name, age, role, basePrice, soldPrice);
    this.battingStyle = battingStyle;
  }

  /**
   * Overrides displayPlayer to show batsman-specific attributes.
   */
  displayPlayer() {
    super.displayPlayer();
    console.log(` | Batting Style: ${this.battingStyle}`);
  }
}

module.exports = Batsman;

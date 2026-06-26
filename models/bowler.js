const Player = require('./player');

/**
 * Represents a Bowler player.
 * Extends the base Player class.
 */
class Bowler extends Player {
  /**
   * @param {number|string} id - Unique identifier for the player
   * @param {string} name - Name of the player
   * @param {number} age - Age of the player
   * @param {string} role - Role of the player ("Bowler")
   * @param {number} basePrice - Minimum auction price
   * @param {number} soldPrice - The final auction price
   * @param {string} bowlingStyle - Bowling technique style
   */
  constructor(id, name, age, role, basePrice, soldPrice, bowlingStyle) {
    super(id, name, age, role, basePrice, soldPrice);
    this.bowlingStyle = bowlingStyle;
  }

  /**
   * Overrides displayPlayer to show bowler-specific attributes.
   */
  displayPlayer() {
    super.displayPlayer();
    console.log(` | Bowling Style: ${this.bowlingStyle}`);
  }
}

module.exports = Bowler;

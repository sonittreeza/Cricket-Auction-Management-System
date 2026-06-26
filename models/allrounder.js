const Player = require('./player');

/**
 * Represents an AllRounder player.
 * Extends the base Player class.
 */
class AllRounder extends Player {
  /**
   * @param {number|string} id - Unique identifier for the player
   * @param {string} name - Name of the player
   * @param {number} age - Age of the player
   * @param {string} role - Role of the player ("AllRounder")
   * @param {number} basePrice - Minimum auction price
   * @param {number} soldPrice - The final auction price
   * @param {string} battingStyle - Left-hand or Right-hand batsman
   * @param {string} bowlingStyle - Bowling technique style
   */
  constructor(id, name, age, role, basePrice, soldPrice, battingStyle, bowlingStyle) {
    super(id, name, age, role, basePrice, soldPrice);
    this.battingStyle = battingStyle;
    this.bowlingStyle = bowlingStyle;
  }

  /**
   * Overrides displayPlayer to show both batting and bowling styles.
   */
  displayPlayer() {
    super.displayPlayer();
    console.log(` | Batting Style: ${this.battingStyle} | Bowling Style: ${this.bowlingStyle}`);
  }
}

module.exports = AllRounder;

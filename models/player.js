/**
 * Represents a generic cricket player.
 * Base class for specific player roles.
 */
class Player {
  /**
   * @param {number|string} id - Unique identifier for the player
   * @param {string} name - Name of the player
   * @param {number} age - Age of the player
   * @param {string} role - Role of the player (e.g., Batsman, Bowler, AllRounder)
   * @param {number} basePrice - Minimum auction price
   * @param {number} soldPrice - The final auction price
   */
  constructor(id, name, age, role, basePrice, soldPrice) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.role = role;
    this.basePrice = basePrice;
    this.soldPrice = soldPrice;
    this.team = null; // Defaults to null until assigned to a team
  }

  /**
   * Assigns the player to a team.
   * @param {string} teamName - The name of the team
   */
  assignTeam(teamName) {
    this.team = teamName;
  }

  /**
   * Displays the details of the player.
   */
  displayPlayer() {
    process.stdout.write(
      `ID: ${String(this.id).padEnd(4)} | ` +
      `Name: ${this.name.padEnd(20)} | ` +
      `Age: ${String(this.age).padEnd(3)} | ` +
      `Role: ${this.role.padEnd(12)} | ` +
      `Base Price: $${String(this.basePrice).padEnd(8)} | ` +
      `Sold Price: $${String(this.soldPrice).padEnd(8)} | ` +
      `Team: ${this.team || "Unassigned"}`
    );
  }
}

module.exports = Player;

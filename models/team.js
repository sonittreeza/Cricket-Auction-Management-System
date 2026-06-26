/**
 * Represents a cricket team participating in the auction.
 */
class Team {
  /**
   * @param {number|string} id - Unique identifier for the team
   * @param {string} teamName - Name of the team
   * @param {number} budget - Total starting budget of the team
   */
  constructor(id, teamName, budget) {
    this.id = id;
    this.teamName = teamName;
    this.budget = budget;
    this.players = [];
  }

  /**
   * Adds a player to the team. Enforces a maximum limit of 5 players.
   * @param {Player} player - The player object to add
   */
  addPlayer(player) {
    if (this.players.length >= 5) {
      throw new Error(`Team "${this.teamName}" cannot have more than 5 players.`);
    }
    this.players.push(player);
    player.assignTeam(this.teamName);
  }

  /**
   * Calculates the total money spent on players.
   * @returns {number} The sum of the sold prices of all team players
   */
  getTotalSpent() {
    return this.players.reduce((total, player) => total + player.soldPrice, 0);
  }

  /**
   * Calculates the remaining team budget.
   * @returns {number} The remaining budget
   */
  getRemainingBudget() {
    return this.budget - this.getTotalSpent();
  }

  /**
   * Displays the details of the team and its roster of players.
   */
  displayTeam() {
    console.log(`\n====================================================================================================`);
    console.log(`TEAM: ${this.teamName} (ID: ${this.id})`);
    console.log(`Budget: $${this.budget} | Total Spent: $${this.getTotalSpent()} | Remaining Budget: $${this.getRemainingBudget()}`);
    console.log(`----------------------------------------------------------------------------------------------------`);
    console.log(`Players (${this.players.length}/5):`);
    if (this.players.length === 0) {
      console.log("  No players assigned to this team yet.");
    } else {
      this.players.forEach(player => {
        process.stdout.write("  * ");
        player.displayPlayer();
      });
    }
    console.log(`====================================================================================================`);
  }
}

module.exports = Team;

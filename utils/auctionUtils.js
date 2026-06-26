/**
 * Utility class containing static methods for cricket auction processing,
 * validation, assignment, printing, and analytical summaries.
 * 
 * This class has no constructor and only static methods.
 */
class AuctionUtils {
  /**
   * Converts a given player name to uppercase.
   * @param {string} name - The player's name
   * @returns {string} The uppercase name
   */
  static convertNameToUpperCase(name) {
    if (typeof name !== 'string') {
      return '';
    }
    return name.toUpperCase();
  }

  /**
   * Validates a single player object against set business rules.
   * Modifies the name to uppercase during validation.
   * @param {Player} player - The player instance to validate
   */
  static validatePlayer(player) {
    if (!player) {
      throw new Error("Validation Error: Player object is null or undefined.");
    }

    // Convert name to uppercase
    player.name = this.convertNameToUpperCase(player.name);

    if (!player.name || player.name.trim() === "") {
      throw new Error(`Validation Error: Player ID ${player.id} must have a valid name.`);
    }

    // Age must be greater than 18
    if (typeof player.age !== 'number' || player.age <= 18) {
      throw new Error(
        `Validation Error: Player "${player.name}" age must be greater than 18. Got: ${player.age}`
      );
    }

    // Base price must exist
    if (player.basePrice === undefined || player.basePrice === null || typeof player.basePrice !== 'number') {
      throw new Error(`Validation Error: Player "${player.name}" must have a numeric base price.`);
    }

    // Sold price must exist
    if (player.soldPrice === undefined || player.soldPrice === null || typeof player.soldPrice !== 'number') {
      throw new Error(`Validation Error: Player "${player.name}" must have a numeric sold price.`);
    }

    // Sold price cannot be less than base price
    if (player.soldPrice < player.basePrice) {
      throw new Error(
        `Validation Error: Player "${player.name}" sold price ($${player.soldPrice}) cannot be less than its base price ($${player.basePrice}).`
      );
    }
  }

  /**
   * Validates an array of players.
   * @param {Player[]} players - Array of player instances
   */
  static validatePlayers(players) {
    if (!Array.isArray(players)) {
      throw new Error("Validation Error: Expected an array of players.");
    }
    players.forEach(player => this.validatePlayer(player));
  }

  /**
   * Assigns players equally to the provided teams.
   * Enforces limits on team capacities.
   * @param {Player[]} players - Array of validated players
   * @param {Team[]} teams - Array of teams
   */
  static assignPlayersToTeams(players, teams) {
    if (!Array.isArray(players) || !Array.isArray(teams) || teams.length === 0) {
      throw new Error("Invalid players or teams provided for assignment.");
    }

    players.forEach((player, index) => {
      // Alternate assignments to balance the teams
      const teamIndex = index % teams.length;
      teams[teamIndex].addPlayer(player);
    });
  }

  /**
   * Prints details of all players.
   * @param {Player[]} players - Array of player instances
   */
  static printPlayers(players) {
    console.log("\n========================================= REGISTERED PLAYERS =========================================");
    players.forEach(player => player.displayPlayer());
    console.log("======================================================================================================");
  }

  /**
   * Prints the rosters of all teams.
   * @param {Team[]} teams - Array of team instances
   */
  static printTeams(teams) {
    teams.forEach(team => team.displayTeam());
  }

  /**
   * Prints a summary of budget spending for each team.
   * @param {Team[]} teams - Array of team instances
   */
  static printAuctionSummary(teams) {
    console.log("\n====================================================================================================");
    console.log("                                    FINAL TEAM BUDGET SUMMARY                                       ");
    console.log("====================================================================================================");
    teams.forEach(team => {
      const budgetText = `$${team.budget}`.padEnd(10);
      const spentText = `$${team.getTotalSpent()}`.padEnd(10);
      const remainingText = `$${team.getRemainingBudget()}`.padEnd(10);
      console.log(
        `Team: ${team.teamName.padEnd(25)} | ` +
        `Total Budget: ${budgetText} | ` +
        `Spent: ${spentText} | ` +
        `Remaining: ${remainingText}`
      );
    });
    console.log("====================================================================================================\n");
  }

  /**
   * Finds the player who was sold for the highest amount.
   * @param {Player[]} players - Array of player instances
   * @returns {Player|null}
   */
  static getHighestSoldPlayer(players) {
    if (!Array.isArray(players) || players.length === 0) {
      return null;
    }
    return players.reduce((highest, current) => {
      return current.soldPrice > highest.soldPrice ? current : highest;
    }, players[0]);
  }

  /**
   * Finds the player who was sold for the lowest amount.
   * @param {Player[]} players - Array of player instances
   * @returns {Player|null}
   */
  static getLowestSoldPlayer(players) {
    if (!Array.isArray(players) || players.length === 0) {
      return null;
    }
    return players.reduce((lowest, current) => {
      return current.soldPrice < lowest.soldPrice ? current : lowest;
    }, players[0]);
  }

  /**
   * Calculates the total amount generated across the entire auction.
   * @param {Player[]} players - Array of player instances
   * @returns {number}
   */
  static getTotalAuctionAmount(players) {
    if (!Array.isArray(players)) {
      return 0;
    }
    return players.reduce((total, player) => total + player.soldPrice, 0);
  }
}

module.exports = AuctionUtils;

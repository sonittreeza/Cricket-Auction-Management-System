const fs = require('fs');
const path = require('path');
const Team = require('./models/team');
const Batsman = require('./models/batsman');
const Bowler = require('./models/bowler');
const AllRounder = require('./models/allrounder');
const AuctionUtils = require('./utils/auctionUtils');

/**
 * Main application orchestrator for the Cricket Auction Management System.
 */
function main() {
  try {
    console.log("====================================================================================================");
    console.log("                           STARTING CRICKET AUCTION MANAGER SIMULATION                              ");
    console.log("====================================================================================================\n");

    // 1. Read testdata.json
    const dataPath = path.join(__dirname, 'testdata.json');
    if (!fs.existsSync(dataPath)) {
      throw new Error(`Data file not found at: ${dataPath}`);
    }

    const rawData = fs.readFileSync(dataPath, 'utf8');
    const data = JSON.parse(rawData);

    // 2. Create Team objects
    const teams = data.teams.map(t => new Team(t.id, t.teamName, t.budget));

    // 3. Create Player objects dynamically based on role
    const players = data.players.map(p => {
      switch (p.role) {
        case 'Batsman':
          return new Batsman(p.id, p.name, p.age, p.role, p.basePrice, p.soldPrice, p.battingStyle);
        case 'Bowler':
          return new Bowler(p.id, p.name, p.age, p.role, p.basePrice, p.soldPrice, p.bowlingStyle);
        case 'AllRounder':
          return new AllRounder(p.id, p.name, p.age, p.role, p.basePrice, p.soldPrice, p.battingStyle, p.bowlingStyle);
        default:
          throw new Error(`Unknown player role: "${p.role}" for player ID ${p.id}`);
      }
    });

    // 4. Validate every player (and convert names to uppercase)
    AuctionUtils.validatePlayers(players);

    // 6. Assign players equally to the teams
    AuctionUtils.assignPlayersToTeams(players, teams);

    // 7. Print all players
    AuctionUtils.printPlayers(players);

    // 8. Print all teams
    AuctionUtils.printTeams(teams);

    // 9. Print final auction summary
    AuctionUtils.printAuctionSummary(teams);

    // 10. Print statistical details (Highest, Lowest, Total)
    const highestPlayer = AuctionUtils.getHighestSoldPlayer(players);
    const lowestPlayer = AuctionUtils.getLowestSoldPlayer(players);
    const totalAmount = AuctionUtils.getTotalAuctionAmount(players);

    console.log("====================================================================================================");
    console.log("                                        AUCTION METRICS                                             ");
    console.log("====================================================================================================");
    if (highestPlayer) {
      console.log(`Highest Sold Player : ${highestPlayer.name.padEnd(20)} | Role: ${highestPlayer.role.padEnd(11)} | Sold Price: $${highestPlayer.soldPrice}`);
    }
    if (lowestPlayer) {
      console.log(`Lowest Sold Player  : ${lowestPlayer.name.padEnd(20)} | Role: ${lowestPlayer.role.padEnd(11)} | Sold Price: $${lowestPlayer.soldPrice}`);
    }
    console.log(`Total Auction Spent : $${totalAmount}`);
    console.log("====================================================================================================\n");

    console.log("Simulation completed successfully.");

  } catch (error) {
    console.error("\n[CRITICAL ERROR DURING AUCTION PROCESS]:", error.message);
    process.exit(1);
  }
}

main();

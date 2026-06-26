# Cricket Auction Manager

A professional, Object-Oriented Node.js application built from scratch to simulate and manage a cricket player auction. The system dynamically classifies players into specific roles (Batsman, Bowler, AllRounder), validates them against defined rules, assigns them to competing teams, and outputs comprehensive statistics and budget reports.

---

## Features

1. **Robust Player Hierarchy**: Modeled using JavaScript Class inheritance (`Player` -> `Batsman`, `Bowler`, `AllRounder`).
2. **Team Budget & Limit Management**: Restricts rosters to a maximum of 5 players per team and automatically computes total spent and remaining budgets.
3. **Static Utility Helper Class**: Performs data transformations, business rule validation, and analytical calculations (highest sold, lowest sold, total auction pool).
4. **Data Validation Rules**:
   - Converts player names to uppercase automatically.
   - Enforces minimum age limit of 18.
   - Ensures base price and sold price exist.
   - Ensures sold price is not lower than the player's base price.
5. **Clean Separation of Concerns**: Logic is fully encapsulated inside models and helper utilities, keeping the orchestrator (`app.js`) extremely lightweight.

---

## Folder Structure

```text
cricket-auction-manager/
│
├── app.js                 # Orchestrates application flow, runs simulation
├── package.json           # Project specifications and script definitions
├── testdata.json          # Input database (2 Teams, 10 Players)
│
├── models/                # OOP Domain Models
│   ├── player.js          # Base Player class
│   ├── batsman.js         # Batsman subclass (extends Player)
│   ├── bowler.js          # Bowler subclass (extends Player)
│   ├── allrounder.js      # AllRounder subclass (extends Player)
│   └── team.js            # Team class
│
├── utils/                 # General utility scripts
│   └── auctionUtils.js    # Static auction validation, distribution & stats
│
└── README.md              # Project documentation
```

---

## OOP Concepts Used

- **Encapsulation**: Attributes (like `budget`, `soldPrice`, `age`) and logic operating on them are bundled within their respective classes (`Player`, `Team`).
- **Inheritance**: Subclasses (`Batsman`, `Bowler`, `AllRounder`) inherit attributes and methods from the parent class (`Player`), preventing code duplication.
- **Polymorphism**: The method `displayPlayer()` is overridden in each child class to display subclass-specific attributes, while calling `super.displayPlayer()` to show the base properties.
- **Abstraction**: Complex operations (like validation and distribution) are hidden behind a simple static interface in `AuctionUtils`.

---

## Installation

1. Clone or copy the project files to your local directory:
   ```bash
   cd cricket-auction-manager
   ```
2. Install the package dependencies (if any, standard library only):
   ```bash
   npm install
   ```

---

## Running the Project

To execute the cricket auction simulation, run:
```bash
node app.js
```
Or via npm start script:
```bash
npm start
```

---

## Sample Output

```text
====================================================================================================
                           STARTING CRICKET AUCTION MANAGER SIMULATION                              
====================================================================================================


========================================= REGISTERED PLAYERS =========================================
ID: 101  | Name: VIRAT KOHLI          | Age: 35  | Role: Batsman      | Base Price: $2000000  | Sold Price: $15000000 | Team: Unassigned | Batting Style: Right-hand bat
ID: 102  | Name: JASPRIT BUMRAH        | Age: 30  | Role: Bowler       | Base Price: $2000000  | Sold Price: $14000000 | Team: Unassigned | Bowling Style: Right-arm fast
ID: 103  | Name: HARDIK PANDYA         | Age: 30  | Role: AllRounder   | Base Price: $2000000  | Sold Price: $9500000  | Team: Unassigned | Batting Style: Right-hand bat | Bowling Style: Right-arm fast-medium
ID: 104  | Name: ROHIT SHARMA          | Age: 37  | Role: Batsman      | Base Price: $2000000  | Sold Price: $12000000 | Team: Unassigned | Batting Style: Right-hand bat
ID: 105  | Name: MITCHELL STARC        | Age: 34  | Role: Bowler       | Base Price: $2000000  | Sold Price: $18000000 | Team: Unassigned | Bowling Style: Left-arm fast
ID: 106  | Name: RAVINDRA JADEJA       | Age: 35  | Role: AllRounder   | Base Price: $2000000  | Sold Price: $10500000 | Team: Unassigned | Batting Style: Left-hand bat | Bowling Style: Left-arm orthodox
ID: 107  | Name: SURYAKUMAR YADAV      | Age: 33  | Role: Batsman      | Base Price: $1500000  | Sold Price: $8000000  | Team: Unassigned | Batting Style: Right-hand bat
ID: 108  | Name: RASHID KHAN           | Age: 25  | Role: Bowler       | Base Price: $1500000  | Sold Price: $11000000 | Team: Unassigned | Bowling Style: Right-arm leg-break
ID: 109  | Name: GLENN MAXWELL         | Age: 35  | Role: AllRounder   | Base Price: $1500000  | Sold Price: $7500000  | Team: Unassigned | Batting Style: Right-hand bat | Bowling Style: Right-arm off-break
ID: 110  | Name: SHUBMAN GILL          | Age: 24  | Role: Batsman      | Base Price: $1000000  | Sold Price: $6000000  | Team: Unassigned | Batting Style: Right-hand bat
======================================================================================================

====================================================================================================
TEAM: Mumbai Mavericks (ID: 1)
Budget: $80000000 | Total Spent: $58000000 | Remaining Budget: $22000000
----------------------------------------------------------------------------------------------------
Players (5/5):
  * ID: 101  | Name: VIRAT KOHLI          | Age: 35  | Role: Batsman      | Base Price: $2000000  | Sold Price: $15000000 | Team: Mumbai Mavericks | Batting Style: Right-hand bat
  * ID: 103  | Name: HARDIK PANDYA         | Age: 30  | Role: AllRounder   | Base Price: $2000000  | Sold Price: $9500000  | Team: Mumbai Mavericks | Batting Style: Right-hand bat | Bowling Style: Right-arm fast-medium
  * ID: 105  | Name: MITCHELL STARC        | Age: 34  | Role: Bowler       | Base Price: $2000000  | Sold Price: $18000000 | Team: Mumbai Mavericks | Bowling Style: Left-arm fast
  * ID: 107  | Name: SURYAKUMAR YADAV      | Age: 33  | Role: Batsman      | Base Price: $1500000  | Sold Price: $8000000  | Team: Mumbai Mavericks | Batting Style: Right-hand bat
  * ID: 109  | Name: GLENN MAXWELL         | Age: 35  | Role: AllRounder   | Base Price: $1500000  | Sold Price: $7500000  | Team: Mumbai Mavericks | Batting Style: Right-hand bat | Bowling Style: Right-arm off-break
====================================================================================================

====================================================================================================
TEAM: Chennai Champions (ID: 2)
Budget: $80000000 | Total Spent: $53500000 | Remaining Budget: $26500000
----------------------------------------------------------------------------------------------------
Players (5/5):
  * ID: 102  | Name: JASPRIT BUMRAH        | Age: 30  | Role: Bowler       | Base Price: $2000000  | Sold Price: $14000000 | Team: Chennai Champions | Bowling Style: Right-arm fast
  * ID: 104  | Name: ROHIT SHARMA          | Age: 37  | Role: Batsman      | Base Price: $2000000  | Sold Price: $12000000 | Team: Chennai Champions | Batting Style: Right-hand bat
  * ID: 106  | Name: RAVINDRA JADEJA       | Age: 35  | Role: AllRounder   | Base Price: $2000000  | Sold Price: $10500000 | Team: Chennai Champions | Batting Style: Left-hand bat | Bowling Style: Left-arm orthodox
  * ID: 108  | Name: RASHID KHAN           | Age: 25  | Role: Bowler       | Base Price: $1500000  | Sold Price: $11000000 | Team: Chennai Champions | Bowling Style: Right-arm leg-break
  * ID: 110  | Name: SHUBMAN GILL          | Age: 24  | Role: Batsman      | Base Price: $1000000  | Sold Price: $6000000  | Team: Chennai Champions | Batting Style: Right-hand bat
====================================================================================================

====================================================================================================
                                    FINAL TEAM BUDGET SUMMARY                                       
====================================================================================================
Team: Mumbai Mavericks          | Total Budget: $80000000  | Spent: $58000000  | Remaining: $22000000 
Team: Chennai Champions         | Total Budget: $80000000  | Spent: $53500000  | Remaining: $26500000 
====================================================================================================


====================================================================================================
                                        AUCTION METRICS                                             
====================================================================================================
Highest Sold Player : MITCHELL STARC       | Role: Bowler      | Sold Price: $18000000
Lowest Sold Player  : SHUBMAN GILL         | Role: Batsman     | Sold Price: $6000000
Total Auction Spent : $111500000
====================================================================================================

Simulation completed successfully.
```

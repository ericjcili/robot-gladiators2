var playerName = window.prompt("What is your robots name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
var enemyNames = ["Roborto", "Amy Andriod", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName){
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!")

    //fight option
    var promptFight = window.prompt(
        "You've been encountered by an enemy robot named Roboto!" + 
        "Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose."
        )

    // if player choses to fight, then fight
        if (promptFight === "fight" || promptFight === "FIGHT") {
            // Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyhealth' variable
            enemyHealth = enemyHealth - playerAttack;
            
            // Log a resulting message to the console so we know that it worked.
            console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has "+ enemyHealth + " health remaining.");

            //check enemy health
            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died!");
            }
            else {
                window.alert(enemyName + " still has " + enemyHealth + " health remaining.")
            }

            // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
            playerHealth = playerHealth - enemyAttack;

            
            // Log a resulting message to the console so we know that it worked.
            console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has "+ playerHealth + " health remaining.");

            //check player health
            if (playerHealth <= 0) {
                window.alert("Your robot "+ playerName + " has reached critical failure and died. GAME OVER.")
            }
            else {
                window.alert(playerName + " still has " + playerHealth + " health remaining.")
            }
        //if player choses to skip then skip
        } else if (promptFight === 'skip' || promptFight === 'SKIP') {
            //confirm player wants to quit
            var confirmSkip = window.confirm("Are yousure you'd like to quit?");
            // if yes, leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Toodles!");
                playerMoney = playerMoney - 2;
            } else {
                fight();
            }
        } else {
            window.alert("You need to choose a valid option. Try again!")
        }

}

for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}
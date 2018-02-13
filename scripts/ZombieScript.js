const GAME_TITLE = "ZOMBIES ARE BETTER TROLLS";

var charactersName;
var warehouseAttempts = 0;
var churchAttempts = 0;
var fightAttempts = 0;
var runAttempts = 0;
var playersHP = 100;
var completeLevel1 = false;
var completeLevel2 = false;

function attackTotal(attackAmount) {
    return Math.round(Math.random() * attackAmount);
}

function distanceTotal(distance) {
    return Math.ceil(Math.random() * distance);
}

function resetPlayersHP() {
    if (playersHP <= 0) {
        playersHP = 100;
    }
}

alert("Welcome to " + GAME_TITLE + "!");
alert("The zombie apocalypse is upon us!");
alert("Lets get started!");
alert("Oh...");
alert("Aren't these boxes annoying...");

for (let i = 1; i < 6; i++) {
    alert("... " + i);
}

alert("They sure were annoying to write...");
alert("Well, not the dot dot dot ones... Those were in a for loop!");
alert("HAHAHA!");

if (warehouseAttempts || churchAttempts === 0) {
    alert("Okay lets NOW get started!");

    let confirmPlayersName;
    let tempName = "";
    while (confirmPlayersName !== true) {
        tempName = prompt("Please name your character: ");
        confirmPlayersName = confirm("Is " + tempName + " correct?");
    }

    charactersName = tempName;

} else {
    alert("Lets try this again...");
}

alert("Okay " + charactersName + "...");
alert("You are in need of supplies");
alert("In front of you there are 2 builds...");
alert("To your left: a warehouse");
alert("To your right: a church");

do {
    resetPlayersHP();

    if (warehouseAttempts === 1) {
        alert("ISN'T THIS GAME FUN!");
        alert("=]");
    }

    if (warehouseAttempts === 2) {
        alert("See...");
        alert("Such a GREAT game...");
        alert("=]");
    }

    if (warehouseAttempts === 3) {
        alert("...");
        alert("You really aren't good at this...");
        alert("=]");
    }

    let decision1 = "";

    if (churchAttempts === 0) {
        decision1 = prompt("Which way would you like to go? (warehouse or church)").toLowerCase();
    } else {
        decision1 = prompt("Which way would you like to go? (warehouse)").toLowerCase();
    }

    if (decision1 === "warehouse") {

        if (warehouseAttempts === 0) {
            alert("You are walking towards the warehouse...");
            alert("Suddenly!");
            alert("You hear something...");
            alert("You quickly look behind you...");
            alert("A HORDE OF ZOMBIES ARE COMING RIGHT AT YOU!!!");
        } else {
            alert("Back at the warehouse ehh...")
        }

        alert("What would you like to do?");

        let choice = prompt("You can: Run or Fight").toLowerCase();

        if (choice === "run") {

            runAttempts++;

            let playersDistanceToExit = 100;
            let zombiesDistanceToPlayer = 50;
            let playerRuns = 0;
            let zombiesWalk = 0;
            let zombiesKillsYou = false;
            let playerEscapes = false;
            let lameRunSituationInProgress = false;

            if (runAttempts === 1) {
                alert("Run?...");
                alert("...");
                alert("Who runs away in a game...");
                alert("Well, let's see here...");
                alert("I really wasn't prepared for you to run...");
                alert("I mean...");
                alert("Usually players fight...");
                alert("Fighting is more fun!");
                alert("Oh well...");
            } else if (runAttempts === 2) {
                alert("Again with the running...");
                alert("Sigh...");
                alert("Just disappointing really...");
                alert("Okay...");
            } else if (runAttempts === 3) {
                alert("Man oh man...");
                alert("You really like clicking!");
            }
            else {

                alert("You attempt to run...");
            }

            alert("RUN!");

            do {
                let playerMilestone = 0;
                let zombiesMilestone = 0;

                playerRuns = distanceTotal(20);
                alert("You ran for: " + playerRuns);


                playersDistanceToExit -= playerRuns;
                alert("Players distance to exit: " + playersDistanceToExit);

                zombiesWalk = distanceTotal(10);
                zombiesDistanceToPlayer -= zombiesWalk;

                alert("Zombies move to you for: " + zombiesWalk);
                alert("Zombies are " + zombiesDistanceToPlayer + " feet away from you!");

                if (playersDistanceToExit <= 0) {
                    playerEscapes = true;
                } else {
                    if (zombiesDistanceToPlayer > 0) {
                        continue;
                    }
                    zombiesKillsYou = true;
                    playersHP = 0;
                }

                if (zombiesKillsYou === true || playerEscapes === true) {
                    lameRunSituationInProgress = true;
                }

            } while (lameRunSituationInProgress !== true);

            if (playersHP > 0) {
                alert("Oh...");
                alert("Well look at you..");
                alert("You actually make it out alive...");
                alert("Well well... what are the chances of that...");
                alert("Good for you!");

                completeLevel1 = true;
            } else {
                alert("YOU DIED!");
                alert("BACK TO THE BEGINNING WITH YOU!");

                warehouseAttempts++;
            }

        } else if (choice === "fight") {

            alert("You aren't afraid of no stinking zombie horde!");

            if (fightAttempts === 1) {
                alert("BTW...");
                alert("Since you were gone...");
                alert("The number of zombies has changed...");
                alert("...");
                alert("What can I say...");
                alert("Zombies might be dead but they still move...");
                alert("Just be glad these aren't fast zombies...");
                alert("Nobody likes fast zombies...");
                alert("=]");
            }

            let zombieHordeTotal = Math.ceil(Math.random() * 100);
            alert("So what if there are " + zombieHordeTotal + " " + "zombies!");
            alert("You got this!");

            alert("...");


            if (zombieHordeTotal <= 25) {
                alert("Easy peasy lemon squeezy!");
            } else {
                alert("Yeah...");
                alert("You can't really fight " + zombieHordeTotal + " zombies...");
                alert("This might be a game BUT that's just too many.");
            }

            alert("Lets see here...");

            alert(zombieHordeTotal + " zombies...");
            alert("Attacking you at the same time...");

            let totalDamage = 0;
            for (let i = 0; i < zombieHordeTotal; i++) {
                totalDamage += attackTotal(10);
            }

            alert("That's: " + totalDamage + " points worth of damage...");

            alert("You have: " + playersHP + " HP");

            let currentHP = playersHP - totalDamage;
            alert("So... " + playersHP + " HP" + " - " + totalDamage + " Points of Damage" + " = " + currentHP + " HP" + " ...");
            playersHP = currentHP;

            if (playersHP > 0) {
                alert("Oh...");
                alert("You are actually alive...");
                alert("Well well... what are the chances of that...");
                alert("Good for you!");

                completeLevel1 = true;
            } else {
                alert("YOU DIED!");
                alert("BACK TO THE BEGINNING WITH YOU!");

                fightAttempts++;
                warehouseAttempts++;

                if (fightAttempts === 1) {
                    alert("CONGRATULATIONS!");
                    alert("That was your first attempt at fighting the horde!");
                    alert("...");
                }
            }
        } else {
            alert("YOU DIED!");
            alert("THOSE WEREN'T THE CHOICES I GAVE YOU!");
            alert("BACK TO THE BEGINNING YOU GO!");

            warehouseAttempts++;
        }

    } else if (decision1 === "church") {

        switch (churchAttempts) {
            case 0:
                alert("Don't pick church");
                churchAttempts++;
                break;
            case 1:
                alert("Pick warehouse...");
                churchAttempts++;
                break;
            case 2:
                alert("DLC REQUIRED!");
                churchAttempts++;
                break;
            case 3:
                alert("...");
                break;
        }

        completeLevel1 = false;
    } else {
        alert("PST!");
        alert("Choose warehouse... (whisper in your ear)");

        completeLevel1 = false;
    }
} while (completeLevel1 === false);

do {
    alert("CONGRATULATIONS!");
    alert("Welcome to level 2!");

    // link fake go fund me account
    // like the modern day games... we need more money
    // cant give you a full game... blah blah blah
    // joke about dlc =O

    completeLevel2 = true;

} while (completeLevel2 === false);

const GAME_TITLE = "ZOMBIES ARE BETTER TROLLS";

var charactersName;
var warehouseAttempts = 0;
var storeAttempts = 0;
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

if (warehouseAttempts || storeAttempts === 0) {
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
alert("To your right: a store");

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

    if (storeAttempts === 0) {
        decision1 = prompt("Which way would you like to go? (warehouse or store)").toLowerCase();
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

    } else if (decision1 === "store") {
        // Array stuff!!!!
        let listOfQuestions = ["", "", "", "", ""]; // Add in scenarios 
        let possibleWeaponsAvailable = ["Pipe", "Bottle", "Shoe", "Broom Handle"];
        
        function randomNumber(range) {
            return Math.round(Math.random() * range);
        }
       
/*        let listOfQuestions = [
            {   question1: "This",
                question2: "That",
                question3: "Those",
                question4: "There's",
                question5: "Mine"
            },
            {   question6: "This",
                question7: "That",
                question8: "Those",
                question9: "There's",
                question10: "Mine"
            }*/
        ];

        //let randomQuestion = listOfQuestions[Math.floor(Math.random() * listOfQuestions.length)];

        alert("You look around and see that the coast is clear...");
        alert("You speed walk towards the store!");
        alert("There is a door in front of your face...");

        let tryToOpenDoor = prompt("Would you like to try and open it? (yes or no)").toLowerCase();

        if (tryToOpenDoor === "yes") {
            
            alert("You push open the door!");
            alert("The place looks ravaged...");
            alert("You begin searching through the rubble anyway...");
            alert("You are focused on searching...");
            alert("Nothing seems valuable...");
            alert("You turn toward the door to leave...");
            alert("THERE IS A ZOMBIE!");
            alert("ITS HEADING RIGHT AT YOU!");
            
            alert("Quick!");
            alert("Try to find a weapon!");
            alert("You frantically search for a weapon!");
            alert("...");
            alert("..");
            alert(".");
            
        let weapon = possibleWeaponsAvailable[randomNumber(weaponList.length - 1)];
            
            alert("You find a " + weapon + "!");
            
        let survival = randomNumber(2); // 33%
            
            alert("");
        
        if (survival === 0) {
            alert("The zombie got to you first!");
            alert("The zombie bits you!");
            alert("YOU DIED!");
        } else if (survival > 0) {
            alert("You attack the zombie with your " + weapon);
            alert("The " + weapon + " splits the zombies head!");
            alert("You're alive!");
        }

            // if attempt is the first then this:
/*            alert("You take your bare hands and try to pull apart the door with all your might...");
            alert("This is the part where you would button mash until the door opens...");
            alert("BUT, since this game does not have any button input... ");
            alert("We will have to improvise!");

            alert("Here is how this part of the game will work...");
            alert("You will get a random question from a list of questions");
            alert("If you answer the question correct...");
            alert("The progress to open the door will continue");

            alert("If you answer the question incorrect...");
            alert("You tiny baby arms will give up...");
            alert("and the door will close back up!");
            alert("Exciting right!?");
            alert("=]");


            alert("OKAY!");
            alert("HERE WE A GO!");*/

            // else: You know the drill... Answer the questions!

        } else if (tryToOpenDoor === "no") {
            alert("You decide that the door is to much of a hassle...");
            alert("You look a little closer and see a broken window on the side of the building...");

        }
        else {
            alert("YOU DIED!");
            alert("THOSE WEREN'T THE CHOICES I GAVE YOU!");
            alert("BACK TO THE BEGINNING YOU GO!");

            storeAttempts++;
        }

        alert("");
        alert("");
        alert("");
        alert("");

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

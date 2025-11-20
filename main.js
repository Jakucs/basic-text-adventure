import promptSync from 'prompt-sync';
const prompt = promptSync({sigint: true});

console.log("You are a knight on a horse, delivering an important message to the king.");
console.log("Suddenly, you encounter a fork in the road with 2 paths.");
console.log("One path leads through a dark forest.");
console.log("The other path goes into the direction of a field, seemingly less dangerous.");

// First decision point
let choiceOne = 0;
while (!(choiceOne == 1 || choiceOne == 2)) {
    choiceOne = prompt("Which path do you choose? (1: Field, 2: Forest) ");
}

if (choiceOne == 2){
    let inForest = true;
    console.log("You got lost, you can choose another option! ");
    // Second decision point
    let choiceTwo = 0;
    do {
        while(!(choiceTwo == 1 || choiceTwo == 2)) {
            choiceTwo = prompt("Wich direction will you choose? (1): Go North or (2): Go South ");
        }
        if (choiceTwo == 2) {
            inForest = false;
        } 
        else if (choiceTwo == 1) {
            console.log("You're lost again! ");
            choiceTwo = 0;
        }
    } while (inForest);
    console.log("You have found the field, you can continue! ");
    choiceOne = 1;
}

if (choiceOne = 1) {
    console.log("You got to the field. As you ride through, you encounter a river!");
    
        // Third decision point
        let choiceThree = 0;
        while (choiceThree != 1 && choiceThree != 2){
            choiceThree = prompt("What do you do? (1: Cross the river with the horse, 2: Go further along the river) ");
        }
        if (choiceThree == 1) {
            console.log("You and your horse are swept away. Game Over.");
        } else if (choiceThree == 2) {
            console.log("As you go further, you reach a place where you find a bridge and a dam.");
            // Fourth decision point
            let choiceFour = 0;
            while (!(choiceFour == 1 || choiceFour == 2 )) {
                choiceFour = prompt("Where do you want to go? (1: Bridge, 2: Dam) ");
            }
            if (choiceFour == 1) {
                // Fifth decision point
                console.log("You see that the bridge is little.");
                let choiceFive;
                while(isNaN(choiceFive) || (choiceFive < 1 || choiceFive > 2)) {
                    choiceFive = prompt("1. I go across with the horse, 2: I go across without the horse. ");
                }
                if(choiceFive == 1){
                    console.log("The bridge collapsed. Game Over.")
                } else if(choiceFive == 2){
                    console.log("Your journey was successful. Congratulations! ")
                }
            } else if (choiceFour == 2) {
                console.log("The horse broke its leg on the dam. You can't continue. Game Over!");
            }
        }
}






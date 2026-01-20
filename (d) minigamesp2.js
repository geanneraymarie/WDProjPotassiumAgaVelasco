function problem2() {
     let anotherOutput;
     //selects a random number to choose a random problem
     const cases2 = Math.floor((Math.random()*4) + 1);
     //the problems themselvess in window prompts :))
     switch(cases2) {
          case 1:
               let problem21 = prompt("Toto needs to know how old the killer is because it's a major clue, however, the criminal gave him a problem instead. 'Solve: log2(4) + sqrt(256) + (1 x 1 - 1 + 1 + 2 x 7 - 4)' How old is the killer?      (If your answer is less than 4 digits, don't include the 0s in front.)","type your answer here");
               if (problem21 == null || problem21 == "") {
                    anotherOutput = "No response received.";
               }
               else {
                    if(problem21 == "29") {
                         anotherOutput = "Correct! 𐔌՞ ܸ.ˬ.ܸ՞𐦯";
                    }
                    else {
                         anotherOutput = "Incorrect ૮(˶╥︿╥)ა";
                    }
               }

               break;
          case 2:
               let problem22 = prompt("Ron needs to find out how many people the criminal group consists of. The clue they gave was that their number is the value of x+y-z if:   (2x^2 - 7x + 3)/(2x-1) = 0   AND   16y+3 = 7z-1 (where y = z). How many criminals are there? (If your answer is less than 4 digits, don't include the 0s in front.)", "type your answer here");
               if (problem22 == null || problem22 == "") {
                    anotherOutput = "No response received.";
               }
               else {
                    if(problem22 == "3") {
                         anotherOutput = "Correct! 𐔌՞ ܸ.ˬ.ܸ՞𐦯";
                    }
                    else {
                         anotherOutput = "Incorrect ૮(˶╥︿╥)ა";
                    }
               }
               break;
          case 3:
               let problem23 = prompt("Milo is holding a certain amount of people hostage. He claims that there are 2 fathers, 2 sons, 1 grandfather, and 1 grandson. How many people are in this group? (Hint: it's not 6)", "type your answer here");
               if (problem23 == null || problem23 == "") {
                    anotherOutput = "No response received.";
               }
               else {
                    if(problem23 == "3") {
                         anotherOutput = "Correct! 𐔌՞ ܸ.ˬ.ܸ՞𐦯";
                    }
                    else {
                         anotherOutput = "Incorrect ૮(˶╥︿╥)ა";
                    }
               }
               break;
          case 4:
               let problem24 = prompt("Ron bought a new brand of brown sugar syrup, and his usual brand of brown sugar syrup, with 2 kg of each. Both of the brands cost 2517 php in total. The new brand costs 2484 php more than the usual brand. How much is the new brand of brown sugar syrup?", "type your answer here");
               if (problem24 == null || problem24 == "") {
                    anotherOutput = "No response received.";
               }
               else {
                    if(problem24 == "2500.5") {
                         anotherOutput = "Correct! 𐔌՞ ܸ.ˬ.ܸ՞𐦯";
                    }
                    else {
                         anotherOutput = "Incorrect ૮(˶╥︿╥)ა";
                    }
               }
               break;

     }
     //outputs the result (if correct or wrong)
     document.getElementById("output2").innerHTML = anotherOutput;
}


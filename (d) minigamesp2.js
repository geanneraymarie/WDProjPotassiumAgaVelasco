function problem2() {
     let anotherOutput;
     const cases2 = Math.floor((Math.random()*4) + 1);
     switch(cases2) {
          case 1:
               let problem21 = prompt("Solve: log2(4) + sqrt(256) + (1 x 1 - 1 + 1 + 2 x 7 - 4)      If your answer is less than 4 digits, don't include the 0s in front.","Type answer here");
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
               let problem22 = prompt("What is the value of x+y-z if:   (2x^2 - 7x + 3)/(2x-1) = 0   AND   16y+3 = 7z-1 (where y = z)? If your answer is less than 4 digits, don't include the 0s in front.", "Type answer here");
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
               let problem23 = prompt("A group has 2 fathers, 2 sons, 1 grandfather, and 1 grandson. How many people are in this group? (Hint: it's not 6)", "Type answer here");
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
               let problem24 = prompt("A swimmer bought a brand new cap and googles for his first competition. Both of his gear costs 2517 php in total. The swimming cap costs 2484 php more than the goggles. How much is the cap?", "Type answer here");
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
     document.getElementById("output2").innerHTML = anotherOutput;
}


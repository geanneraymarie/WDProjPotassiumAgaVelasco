function problem3() {
          let lastOutput;
          //chooses random number to choose a random case 
          const cases3 = Math.floor((Math.random()*4) + 1);
          //the problems in window prompts!!
          switch(cases3) {
          case 1:
               let problem31 = prompt("You have 3 ron stickers, 6 toto stickers, and 4 spitz stickers. Suddenly, the lights went out, and you couldn't see anything. How many gloves should you take to make sure you have at least one pair of stickers that are the same character?", "type your answer here");
               if (problem31 == null || problem31 == "") {
                    lastOutput = "No response received.";
               }
               else {
                    if(problem31 == "4") {
                         lastOutput = "Correct! 𐔌՞ ܸ.ˬ.ܸ՞𐦯";
                    }
                    else {
                         lastOutput = "Incorrect ૮(˶╥︿╥)ა";
                    }
               }
               break;
          case 2:
               let problem32 = prompt("Kiku is 21 years older than his son, Kei, now. Eight years ago, he was 4 times as old as his son. What is the sum of the ages of Kiku and Kei now?", "Type your answer here");
               if (problem32 == null || problem32 == "") {
                    lastOutput = "No response received.";
               }
               else {
                    if(problem32 == "51") {
                         lastOutput = "Correct! 𐔌՞ ܸ.ˬ.ܸ՞𐦯";
                    }
                    else {
                         lastOutput = "Incorrect ૮(˶╥︿╥)ა";
                    }
               }
               break;
          case 3:
               let problem33 = prompt("Toto is punished for forgetting his office wifi password too many times. He's tasked to solve the following problem to get the digits for the wifi: Combine (don't add) the numerical result of these 3 cases to get the answer:  CASE 1: The month of Valentines, or also known as the only prime even number     CASE 2: 4 years later, Ron is 10 times older than he was 14 years ago. How old is he now?     CASE 3: sqrt(4) - sqrt(100) + (4 x 5) - (3^2  - 3). What is the password?", "type your answer here");
               if (problem33 == null || problem33 == "") {
                    lastOutput = "No response received.";
               }
               else {
                    if(problem33 == "21610") {
                         lastOutput = "Correct! 𐔌՞ ܸ.ˬ.ܸ՞𐦯";
                    }
                    else {
                         lastOutput = "Incorrect ૮(˶╥︿╥)ა";
                    }
               }
               break;
          case 4:
               let problem34 = prompt("It's the anniversary of the Ron & Toto Detective Agency! Ron and Toto baked a brown sugar cake for their friends to celebrate, and they divided it. Each slice has an arc of 2/5 pi cm. It's central angle is 12 degrees. How long is the radius of the cake slice in cm? (Hint: Arc = (angle/360) x 2 pi r)", "type your answer here");
               if (problem34 == null || problem34 == "") {
                    lastOutput = "No response received.";
               }
               else {
                    if(problem34 == "6") {
                         lastOutput = "Correct! 𐔌՞ ܸ.ˬ.ܸ՞𐦯";
                    }
                    else {
                         lastOutput = "Incorrect ૮(˶╥︿╥)ა";
                    }
               }
               break;
               
     }
     //outputs the result (if correct or wrong)
     document.getElementById("output3").innerHTML = lastOutput;
}

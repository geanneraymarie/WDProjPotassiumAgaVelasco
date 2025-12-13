function problem3() {
          let lastOutput;
        
          const cases3 = Math.floor((Math.random()*4) + 1);
          switch(cases3) {
          case 1:
               let problem31 = prompt("You have 3 red gloves, 6 white gloves, and 4 black gloves. Suddenly, the lights went out, and you couldn't see anything. How many gloves should you take to make sure you have at least one pair of matching gloves?", "Type your answer here");
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
               let problem32 = prompt("A mother is 21 years older than her daughter now. Eight years ago, she was 4 times as old as her daughter. What is the sum of the ages of mother and daughter now?", "Type your answer here");
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
               let problem33 = prompt("Combine (don't add) the numerical result of these 3 cases to get the answer:  CASE 1: The month of Valentines, or also known as the only prime even number     CASE 2: 4 years later, Kas is 10 times older than she was 14 years ago. How old is Kas now?     CASE 3: sqrt(4) - sqrt(100) + (4 x 5) - (3^2  - 3)", "00000");
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
               let problem34 = prompt("A pizza slice has an arc of 2/5 pi cm. It's central angle is 12 degrees. How long is the radius of the slice in cm? (Hint: Arc = (angle/360) x 2 pi r)", "Type your answer here");
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
     document.getElementById("output3").innerHTML = lastOutput;
}

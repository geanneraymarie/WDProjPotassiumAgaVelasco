function problem1() {
    let outputHEH;
    //selects a random number to choose a random problem
    const cases1 = Math.floor((Math.random()*4) + 1);
    //the problems themselvess in window prompts :))
    switch(cases1) {
        case 1:
            let problem11 = prompt("Toto has encountered a clue for the passcode needed to free the hostages from a locked room. It reads, 'I am a 4-digit number. My thousands digit is twice the ones digit and hundereds digit. The tens digit is thrice the thousands but 6 times the ones and hundereds.' What is the passcode?", "0000");
            if (problem11 == null || problem11 == "") {
                outputHEH = "No response received.";
            }
            else {
                if(problem11 == "2161") {
                    outputHEH = "Correct! 𐔌՞ ܸ.ˬ.ܸ՞𐦯";
                }
                else {
                    outputHEH = "Incorrect ૮(˶╥︿╥)ა";
                }
            }

        break;

        case 2:
            let problem12 = prompt("Ron has to figure out the date of the next murder. The clue states that the form will be MMDD. The digits that compose it are described as follows:tens and ones digit of the date is twice the rotated infinity symbol. Then, the hundreds digit is the value of log2 (8). Lastly, the thousands digit is useless. What is the date?", "0000");
            if (problem12 == null || problem12 == "") {
                outputHEH = "No response received.";
            }
            else {
                if(problem12 == "0316") {
                    outputHEH = "Correct! 𐔌՞ ܸ.ˬ.ܸ՞𐦯";
                }
                else {
                    outputHEH = "Incorrect ૮(˶╥︿╥)ა";
                }
            }
        break;

        case 3:
            let problem13 = prompt("Winter has to figure out Milo's riddle or she dies. The riddle goes like this: My hundreds and tens digit is the word of the year, and the thousands is the number of legs a dog has. Finally, the ones digit represents the number of oxygen molecules in water. What number am I?", "0000");
            if (problem13 == null || problem13 == "") {
                outputHEH = "No response received.";
            }
            else {
                if(problem13 == "4671") {
                    outputHEH = "Correct! 𐔌՞ ܸ.ˬ.ܸ՞𐦯";
                }
                else {
                    outputHEH = "Incorrect ૮(˶╥︿╥)ა";
                }
            }
        break;
            
        case 4:
            let problem14 = prompt("Ron asked Eliot to solve a math problem he read in a book. It reads, 'My thousands digit is the number of days in a week, and the hundreds digit is the result of 1-2+3+5. Next, my ones and tens digit is the atomic number of Iridium (Ir).' What is the answer?", "0000");
            if (problem14 == null || problem14 == "") {
                outputHEH = "No response received.";
            }
            else {
                if(problem14 == "7777") {
                    outputHEH = "Correct! 𐔌՞ ܸ.ˬ.ܸ՞𐦯";
                }
                else {
                    outputHEH = "Incorrect ૮(˶╥︿╥)ა";
                }
            }
        break;

    }
    //outputs the result (if correct or wrong)
    document.getElementById("output1").innerHTML = outputHEH;
}

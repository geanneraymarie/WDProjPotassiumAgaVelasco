//level 1 case 1
function l1c1(){
    //introduces first button for start of story
    document.getElementById("status")
    document.getElementById("firstOne").onclick=function(){
        document.getElementById("button1").style.display="block";
        this.style.display = "none";

        //this one updates the status
        localStorage.setItem("l1case1Status", "In Progress");
    }
    //for buttons 1, 2, etc.. (when one button is clicked, another pops up for the dialogue)
    document.getElementById("button1").onclick=function(){
        document.getElementById("button2").style.display="block";
    }
    document.getElementById("button2").onclick=function(){
        document.getElementById("button3").style.display="block";
    }
    document.getElementById("button3").onclick=function(){
        document.getElementById("button4").style.display="block";
    }
    document.getElementById("button4").onclick=function(){
        document.getElementById("button5").style.display="block";
    }
    document.getElementById("button5").onclick=function(){
        document.getElementById("button6").style.display="block";
    }
    document.getElementById("button6").onclick=function(){
        document.getElementById("button7").style.display="block";
    }
    document.getElementById("button7").onclick=function(){
        document.getElementById("button8").style.display="block";
    }
    document.getElementById("button8").onclick=function(){
        document.getElementById("button9").style.display="block";
    }
    document.getElementById("button9").onclick=function(){
        document.getElementById("button10").style.display="block";
    }
    document.getElementById("button10").onclick=function(){
        document.getElementById("button11").style.display="block";
    }
    document.getElementById("button11").onclick=function(){
        document.getElementById("button12").style.display="block";
    }
    document.getElementById("button12").onclick=function(){
        document.getElementById("lastOne").style.display="block";

        //this one also updates the status
        localStorage.setItem("l1case1Status", "Completed");
    }
    
    //this part is for the button that shows the answer portion of the case
    document.getElementById("case1Answer").onclick=function(){
        document.getElementById("l1case1").style.display="block";
        this.style.display = "none";
    }
}

//after the case analysis of level 1 case 1
function afterl1c1(){
    document.getElementById("continue").onclick=function(){
        document.getElementById("button13").style.display="block";
        this.style.display = "none";
    }
    document.getElementById("button13").onclick=function(){
        document.getElementById("button14").style.display="block";
    }
    document.getElementById("button14").onclick=function(){
        document.getElementById("button15").style.display="block";
    }
    document.getElementById("button15").onclick=function(){
        document.getElementById("button16").style.display="block";
    }
    document.getElementById("button16").onclick=function(){
        document.getElementById("button17").style.display="block";
    }
    document.getElementById("button17").onclick=function(){
        document.getElementById("button18").style.display="block";
    }
    document.getElementById("button18").onclick=function(){
        document.getElementById("button19").style.display="block";
    }
    document.getElementById("button19").onclick=function(){
        document.getElementById("button20").style.display="block";
    }
    document.getElementById("button20").onclick=function(){
        document.getElementById("button21").style.display="block";
    }
}

//level 1 case 2
function l1c2(){
    //introduces first button for start of story
    document.getElementById("firstOne").onclick=function(){
        document.getElementById("button1").style.display="block";
        this.style.display = "none";
        
        //updates status
        localStorage.setItem("l1case2Status", "In Progress");
    }
    //for buttons 1, 2, etc.. (when one button is clicked, another pops up for the dialogue)
    document.getElementById("button1").onclick=function(){
        document.getElementById("button2").style.display="block";
    }
    document.getElementById("button2").onclick=function(){
        document.getElementById("button3").style.display="block";
    }
    document.getElementById("button3").onclick=function(){
        document.getElementById("button4").style.display="block";
    }
    document.getElementById("button4").onclick=function(){
        document.getElementById("button5").style.display="block";
    }
    document.getElementById("button5").onclick=function(){
        document.getElementById("button6").style.display="block";
    }
    document.getElementById("button6").onclick=function(){
        document.getElementById("button7").style.display="block";
    }
    document.getElementById("button7").onclick=function(){
        document.getElementById("button8").style.display="block";
    }
    document.getElementById("button8").onclick=function(){
        document.getElementById("button9").style.display="block";
    }
    document.getElementById("button9").onclick=function(){
        document.getElementById("button10").style.display="block";
    }
    document.getElementById("button10").onclick=function(){
        document.getElementById("button11").style.display="block";
    }
    document.getElementById("button11").onclick=function(){
        document.getElementById("button12").style.display="block";
    }
    document.getElementById("button12").onclick=function(){
        document.getElementById("button13").style.display="block";
    }
    document.getElementById("button13").onclick=function(){
        document.getElementById("button14").style.display="block";
    }
    document.getElementById("button14").onclick=function(){
        document.getElementById("lastOne").style.display="block";

        //this one also updates the status
        localStorage.setItem("l1case2Status", "Completed");
    }

    //this part is for the button that shows the answer portion of the case
    document.getElementById("case2Answer").onclick=function(){
        document.getElementById("l1case2").style.display="block";
        this.style.display = "none";
    }
}

//after the case analysis of level 1 case 2
function afterl1c2(){
    document.getElementById("continue").onclick=function(){
        document.getElementById("button15").style.display="block";
        this.style.display = "none";
    }
    document.getElementById("button15").onclick=function(){
        document.getElementById("button16").style.display="block";
    }
}

//level 1 case 3
function l1c3(){
    //introduces first button for start of story
    document.getElementById("firstOne").onclick=function(){
        document.getElementById("button1").style.display="block";
        this.style.display = "none";

        //updates status
        localStorage.setItem("l1case3Status", "In Progress");
    }
    //for buttons 1, 2, etc.. (when one button is clicked, another pops up for the dialogue)
    document.getElementById("button1").onclick=function(){
        document.getElementById("button2").style.display="block";
    }
    document.getElementById("button2").onclick=function(){
        document.getElementById("button3").style.display="block";
    }
    document.getElementById("button3").onclick=function(){
        document.getElementById("button4").style.display="block";
    }
    document.getElementById("button4").onclick=function(){
        document.getElementById("button5").style.display="block";
    }
    document.getElementById("button5").onclick=function(){
        document.getElementById("button6").style.display="block";
    }
    document.getElementById("button6").onclick=function(){
        document.getElementById("lastOne").style.display="block";

        //this one also updates the status
        localStorage.setItem("l1case3Status", "Completed");
    }

    //this part is for the button that shows the answer portion of the case
    document.getElementById("case3Answer").onclick=function(){
        document.getElementById("l1case3").style.display="block";
        this.style.display = "none";
    }

}

//after the case analysis of level 1 case 3
function afterl1c3(){
    document.getElementById("continue").onclick=function(){
        document.getElementById("button7").style.display="block";
        this.style.display = "none";
    }
    document.getElementById("button7").onclick=function(){
        document.getElementById("button8").style.display="block";
    }
}

//level 2 case 1
function l2c1(){
     //introduces first button for start of story
    document.getElementById("firstOne").onclick=function(){
        document.getElementById("button1").style.display="block";
        this.style.display = "none";

        //updates status
        localStorage.setItem("l2case1Status", "In Progress");
    }
    //for buttons 1, 2, etc.. (when one button is clicked, another pops up for the dialogue)
    document.getElementById("button1").onclick=function(){
        document.getElementById("button2").style.display="block";
    }
    document.getElementById("button2").onclick=function(){
        document.getElementById("button3").style.display="block";
    }
    document.getElementById("button3").onclick=function(){
        document.getElementById("button4").style.display="block";
    }
    document.getElementById("button4").onclick=function(){
        document.getElementById("button5").style.display="block";
    }
    document.getElementById("button5").onclick=function(){
        document.getElementById("button6").style.display="block";
    }
    document.getElementById("button6").onclick=function(){
        document.getElementById("button7").style.display="block";
    }
    document.getElementById("button7").onclick=function(){
        document.getElementById("button8").style.display="block";
    }
    document.getElementById("button8").onclick=function(){
        document.getElementById("button9").style.display="block";
    }
    document.getElementById("button9").onclick=function(){
        document.getElementById("button10").style.display="block";
    }
    document.getElementById("button10").onclick=function(){
        document.getElementById("button11").style.display="block";
    }
    document.getElementById("button11").onclick=function(){
        document.getElementById("button12").style.display="block";
    }
    document.getElementById("button12").onclick=function(){
        document.getElementById("button13").style.display="block";
    }
    document.getElementById("button13").onclick=function(){
        document.getElementById("lastHEH").style.display="block";

        //this one also updates the status
        localStorage.setItem("l2case1Status", "Completed");
    }

}

//level 2 case 2
function l2c2(){
    //introduces first button for start of story
    document.getElementById("firstOne").onclick=function(){
        document.getElementById("button14").style.display="block";
        this.style.display = "none";

        //updates status
        localStorage.setItem("l2case2Status", "In Progress");
    }
    document.getElementById("button14").onclick=function(){
        document.getElementById("lastOne").style.display="block";
    }
    //this part is for the button that shows the answer portion of the case
    document.getElementById("case1Answer").onclick=function(){
        document.getElementById("l2case1").style.display="block";
        this.style.display = "none";
    }

    //this part is for the button that shows the answer portion of the case
    document.getElementById("case1Answer").onclick=function(){
        document.getElementById("l2case1").style.display="block";
        this.style.display = "none";

        //this one also updates the status
        localStorage.setItem("l2case2Status", "Completed");
    }

}

//after the case analysis of level 2 case 2
function afterl2c1(){
     document.getElementById("continue").onclick=function(){
        document.getElementById("button15").style.display="block";
        this.style.display = "none";
    }
    document.getElementById("button15").onclick=function(){
        document.getElementById("button16").style.display="block";
    }
    document.getElementById("button16").onclick=function(){
        document.getElementById("button17").style.display="block";
    }
    document.getElementById("button17").onclick=function(){
        document.getElementById("button18").style.display="block";
    }
    document.getElementById("button18").onclick=function(){
        document.getElementById("lastOneTRUST").style.display="block";
    }
    document.getElementById("lastOneTRUST").onclick=function(){
        document.getElementById("nextOne").style.display="block";
    }
    document.getElementById("nextOne").onclick=function(){
        document.getElementById("button19").style.display="block";
    }
    document.getElementById("button19").onclick=function(){
        document.getElementById("button20").style.display="block";
    }
    document.getElementById("button20").onclick=function(){
        document.getElementById("button21").style.display="block";
    }
    document.getElementById("button21").onclick=function(){
        document.getElementById("button22").style.display="block";
    }
    document.getElementById("button22").onclick=function(){
        document.getElementById("button23").style.display="block";
    }
    document.getElementById("button23").onclick=function(){
        document.getElementById("button24").style.display="block";
    }
    document.getElementById("button24").onclick=function(){
        document.getElementById("button25").style.display="block";
    }
    document.getElementById("button25").onclick=function(){
        document.getElementById("button26").style.display="block";
    }
    document.getElementById("button26").onclick=function(){
        document.getElementById("button27").style.display="block";
    }
}


//level 3 yayyy
function l3c1(){
     //introduces first button for start of story
    document.getElementById("firstOne").onclick=function(){
        document.getElementById("button1").style.display="block";
        this.style.display = "none";

        //updates status
        localStorage.setItem("l3case1Status", "In Progress");
    }
    //for buttons 1, 2, etc.. (when one button is clicked, another pops up for the dialogue)
    document.getElementById("button1").onclick=function(){
        document.getElementById("button2").style.display="block";
    }
    document.getElementById("button2").onclick=function(){
        document.getElementById("button3").style.display="block";
    }
    document.getElementById("button3").onclick=function(){
        document.getElementById("button4").style.display="block";
    }
    document.getElementById("button4").onclick=function(){
        document.getElementById("button5").style.display="block";
    }
    document.getElementById("button5").onclick=function(){
        document.getElementById("button6").style.display="block";
    }
    document.getElementById("button6").onclick=function(){
        document.getElementById("button7").style.display="block";
    }
    document.getElementById("button7").onclick=function(){
        document.getElementById("button8").style.display="block";
    }
    document.getElementById("button8").onclick=function(){
        document.getElementById("button9").style.display="block";
    }
    document.getElementById("button9").onclick=function(){
        document.getElementById("button10").style.display="block";
    }
    document.getElementById("button10").onclick=function(){
        document.getElementById("button11").style.display="block";
    }
    document.getElementById("button11").onclick=function(){
        document.getElementById("button12").style.display="block";
    }
    document.getElementById("button12").onclick=function(){
        document.getElementById("button13").style.display="block";
    }
    document.getElementById("button13").onclick=function(){
        document.getElementById("button14").style.display="block";
    }
    document.getElementById("button14").onclick=function(){
        document.getElementById("button15").style.display="block";
    }
    document.getElementById("button15").onclick=function(){
        document.getElementById("button16").style.display="block";
    }
    document.getElementById("button16").onclick=function(){
        document.getElementById("button17").style.display="block";
    }
    document.getElementById("button17").onclick=function(){
        document.getElementById("button18").style.display="block";
    }
    document.getElementById("button18").onclick=function(){
        document.getElementById("button19").style.display="block";
    }
    document.getElementById("button19").onclick=function(){
        document.getElementById("button20").style.display="block";
    }
    document.getElementById("button20").onclick=function(){
        document.getElementById("button21").style.display="block";
    }
    document.getElementById("button21").onclick=function(){
        document.getElementById("button22").style.display="block";
    }
    document.getElementById("button22").onclick=function(){
        document.getElementById("button23").style.display="block";
    }
    document.getElementById("button23").onclick=function(){
        document.getElementById("button24").style.display="block";
    }
    document.getElementById("button24").onclick=function(){
        document.getElementById("button25").style.display="block";
    }
    document.getElementById("button25").onclick=function(){
        document.getElementById("button26").style.display="block";
    }
    document.getElementById("button26").onclick=function(){
        document.getElementById("button27").style.display="block";
    }
    document.getElementById("button27").onclick=function(){
        document.getElementById("button28").style.display="block";
    }
    document.getElementById("button28").onclick=function(){
        document.getElementById("button29").style.display="block";
    }
    document.getElementById("button29").onclick=function(){
        document.getElementById("button30").style.display="block";
    }
    document.getElementById("button30").onclick=function(){
        document.getElementById("button31").style.display="block";
    }
    document.getElementById("button31").onclick=function(){
        document.getElementById("button32").style.display="block";
    }
    document.getElementById("button32").onclick=function(){
        document.getElementById("button33").style.display="block";
    }
    document.getElementById("button33").onclick=function(){
        document.getElementById("button34").style.display="block";
    }
    document.getElementById("button41").onclick=function(){
        document.getElementById("button35").style.display="block";
    }
    document.getElementById("button35").onclick=function(){
        document.getElementById("button36").style.display="block";
    }
    document.getElementById("button36").onclick=function(){
        document.getElementById("button37").style.display="block";
    }
    document.getElementById("button37").onclick=function(){
        document.getElementById("button38").style.display="block";
    }
    document.getElementById("button38").onclick=function(){
        document.getElementById("button39").style.display="block";

        //this one also updates the status
        localStorage.setItem("l3case1Status", "Completed");
    }

}


//this outputs if the user clicked the right button in answering who is the culprit
function lccheck(btn, rOW){
    const output=document.getElementById("result");
    if(rOW){
        output.innerText="Correct";
        output.style.color="green";
    }
    else {
        output.innerText="Wrong";
        output.style.color="red";
    }
}

//for sign-ups
function signup() {
    const name = document.getElementById("nameSU").value;
    const pass = document.getElementById("passSU").value;

    if(name === "" || pass === ""){
        alert("Pls fill out all of the info asked");
        return;
    }

    localStorage.setItem("nameSU", name);
    localStorage.setItem("passSU", pass);

    alert("Successfully created account!");

    window.location.href = "(g2) login.html";
}

//for logging in
function login(){
    const name = document.getElementById("nameLI").value;
    const pass = document.getElementById("passLI").value;

    const nameS = localStorage.getItem("nameSU");
    const passS = localStorage.getItem("passSU");

    if(name===nameS && pass===passS){
        localStorage.setItem("logQ", "true");
        alert("Successfully logged-in!");
        window.location.href = "(a) platypusadventures_k01k28.html";
    }
    else {
        alert("Username/Password is invalid, try again");
    }
}

//function for account page
function accountpage(){
    const name = localStorage.getItem("nameSU");
    document.getElementById("greetings").innerText = "Greetings, " + name;
}

//for logging out
function logout(){
    localStorage.setItem("logQ","false");
    alert("Logged out!");
    window.location.href="(g1) signup.html";
}

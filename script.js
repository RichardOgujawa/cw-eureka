/*STORE USER INPUT*/
/*--Create A Variable For The Elements On The Screen (Heading, Inputs, Submit Button, Reset Button)--*/
/*Heading*/
let heading = document.getElementById("heading");
/*Inputs*/
let input1, input2;
/*Results*/
let results = document.getElementById("results");
/*Buttons*/
const submitBtn = document.getElementById("submitBtn");
const resetBtn = document.getElementById("resetBtn");

/*CREATE A RANGE USING THE INPUTS GIVEN BY USER*/
/*--Take The Inputs And Plug Them Into A Loop That Generates The Inbetween Values--*/


function getRange(min, max){
    let rangeDifference = max - min; 
    let rangeArr = [];
    
    for(i=0; i < rangeDifference + 1; i++) {
        let rangeArrItem = min + i; 
        rangeArr.push(rangeArrItem);
    }

    checkArrItem(rangeArr);
}

/*CHECK IF THE EUREKA RULE APPLIES TO ANY OF THE NUMBERS THEY'VE CHOSEN*/
/*--Take The Range Given To Us And Run Each Value Through A Function Which Will Check If It Satisfied The Eureka Rule--*/
function checkArrItem(range){
    let total = 0;
    let toBeDisplayed = [];
    let correct = false;

    const stringArr = range.map(x => x.toString());
    const numArr = stringArr.map(x => Array.from((x)));
    
    for(i=0; i < numArr.length; i++){
        total = 0; //resetting total for each new calculation

        for(j=0; j < numArr[i].length; j++){
            total += numArr[i][j]**[j + 1];
        }

        if (total == stringArr[i]){
            console.log(true);
            toBeDisplayed.push(stringArr[i]);
        } else {
            console.log(false);
        }
    }

    console.log(toBeDisplayed);

    if(toBeDisplayed == ""){
        correct = false
    } else {
        correct = true;
    }

    correct ? 
    results.innerHTML = `You got it! Here is (or are) the number(s) that are within your range that fulfill the Eureka rule : ${toBeDisplayed}` : results.innerHTML = `The range you specified doesn't work unfortunately, please try again!`;
}



/*CHANGE WHAT THE USER WILL SEE ON SCREEN DEPENDING ON WHETHER THEY'RE SUCCESSFUL OR NOT*/
/*--Submit Button Function*/
function submitFunc(){   
    input1 = document.getElementById("input1").value;
    input2 = document.getElementById("input2").value; 
   
    if(input1.trim() == "" || input2.trim() == "") {
        console.log("invalid inputs");
        results.innerHTML = "Please fill in a value for both inputs";
        return;
    }

    input1 = parseInt(document.getElementById("input1").value);
    input2 = parseInt(document.getElementById("input2").value); 
   
    if(input1 > input2 || input1 < 10 || input2 < 10){
        console.log("invalid inputs");
        results.innerHTML = "Please check the explanation below to make sure your inputs follow the guidelines";
        return;
    }
    getRange(input1, input2);
}
submitBtn.addEventListener("click", ()=> {
    submitFunc();
})
/*If I press Enter on the keyboard it'll also submit the information*/
document.addEventListener("keypress", (e)=> {
    if (e.key === "Enter")
    {submitFunc();}
})


/*CLEAR OUTPUT IF USER CLICKS RESET BUTTON*/
/*--Reset Button Function*/
function resetFunc(){
    input1 = document.getElementById("input1");
    input2 = document.getElementById("input2");
    input1.value = "";
    input2.value = "";

    results.innerHTML = "";
}

resetBtn.addEventListener("click", ()=> {
    resetFunc();
});


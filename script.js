const dateOfBirth = document.querySelector("#dob");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumber = document.querySelector("#check-number");
const displayMessage = document.querySelector("#display-message");

function checkBirthdayIsLucky() {
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    if(sum && luckyNumber.value) {

        if(sum % luckyNumber.value === 0){
            displayMessage.innerText = "It's a lucky one";
        }
        else {
            displayMessage.innerText = "Not a lucky one";
        }
    }
    else {
        displayMessage.innerText = "enter both the fields";
    }
}

function calculateSum(dob) {
    var NewDob = dob.replaceAll("-","");
    var sumOfDigits = 0;
    for(let i=0;i<NewDob.length;i++) {
        sumOfDigits = sumOfDigits + Number(NewDob.charAt(i));
    }
    
    return sumOfDigits;
 
}


checkNumber.addEventListener("click", checkBirthdayIsLucky);
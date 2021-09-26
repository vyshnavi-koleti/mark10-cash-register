const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector('#error-message');
const noOfNotes = document.querySelectorAll(".no-of-notes");


const notesAvailable = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click", function validateBillAndCashAmount() {
    hideMessage();
    if (billAmount.value > 0) {

        if (parseInt(cashGiven.value) >= parseInt(billAmount.value)) {

            const amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);

        } else {

            showMessage("The cash provided should be atleast equal to the bill amount");
        }

    } else {

        showMessage("Enter a valid bill amount");
    }
});

function hideMessage() {
    message.style.display  = "none";
}

function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
}

function calculateChange(amountToBeReturned) {

    for( var i = 0; i < notesAvailable.length; i++){
        const numberOfNotes = Math.trunc( amountToBeReturned / notesAvailable[i]);
        amountToBeReturned = amountToBeReturned % notesAvailable[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}
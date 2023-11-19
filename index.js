const billAmnt = document.getElementById("billAmnt");
const tipAmnt = document.getElementById("tipAmnt");
const btnElmnt = document.getElementById("button");
const results = document.getElementById("total");

btnElmnt.addEventListener('click', calculateTotal)

function calculateTotal() {
    const billValue = billAmnt.value; 
    const tipValue = tipAmnt.value;
    const totalValue = billValue * (1 + tipValue / 100);


    if (billValue === "" && tipValue === "") {
        alert("Please enter your bill amount and the percentage you want to tip.")
    } else {
        results.innerText = totalValue.toFixed(2);
    }
}


pin = 0;
calculate = '';
(function () {
    document.getElementById("pinBox").disabled = true;
    document.getElementById('notMatched').style.display = 'none';
    document.getElementById('matched').style.display = 'none';
})();

function pinGenerator() {
    pin = Math.round(Math.random() * 10000);
    for (let i = 100; i < 5000; i++) {
        if (pin < i) {
            pin = pin + Math.round(Math.random() * 100);
        }
        console.log(pin);
    }
    document.getElementById('pinBox').value = pin;
}

function submitButton() {
    calculate = parseInt(calculate);
    if (pin == calculate) {
        document.getElementById('matched').style.display = 'block'
    } else {
        document.getElementById('notMatched').style.display = 'block'
    }
}

function numbers(value) {
    calculate = calculate + value;
    if (value == 'C') {
        document.getElementById('calculatorBox').value = '';
        calculate = '';
    } else if (value == '<') {
        calculate = deleteNumber();
        document.getElementById('calculatorBox').value = calculate;
    } else {
        document.getElementById('calculatorBox').value = calculate;
    }
}

function deleteNumber() {
    let newCal = '';
    for (let i = 0; i < calculate.length - 2; i++) {
        newCal = newCal + calculate[i];
    }
    return newCal;
}



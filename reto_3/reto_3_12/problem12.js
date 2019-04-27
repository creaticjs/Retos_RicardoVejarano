function calculate() {
    var number = document.getElementById('numberTyped').value;
    number = Number(number);
    var sum = 0;

    if (number > 0) {
        for (var x = 0; x < number; x++) {
            sum += 1 / (x + 1);
        }
        document.getElementById('result').innerHTML = '<p>Result: ' + sum + '</p>';
    } else {
        Materialize.toast('Invalid number', 4000);
    }
}


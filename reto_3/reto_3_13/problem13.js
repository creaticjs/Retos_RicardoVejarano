function calculate() {
    var number = document.getElementById('numberN').value;
    number = Number(number);
    var result = 0;

    if (number > 0) {

        for (var x = 1; x <= number; x++) {
            const num = x;
            const den = Math.pow(2, x);
            result += num / den;
            console.log(num);
        }

        document.getElementById('result').innerHTML = '<p>Result: ' + result + ' </p>';
    } else {
        Materialize.toast('Invalid number', 4000);
    }





}
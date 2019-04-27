var arrayDivisors = new Array();

function calculate() {
    var number = document.getElementById('number').value;
    number = Number(number);
    var isPerfect = false;

    isPerfect = isPerfectNumber(number);

    if (isPerfect) {
        document.getElementById('result').innerHTML = '<p>Is Perfect </p>';
    } else {
        document.getElementById('result').innerHTML = '<p>Is not Perfect </p>';
    }




}

function isPerfectNumber(number) {

    for (var x = 1; x < number; x++) {
        if (number % x === 0) {
            arrayDivisors.push(x);
        }
    }

    var sum = 0;
    for (var y = 0; y < arrayDivisors.length; y++) {
        sum = sum + arrayDivisors[y];
    }
    console.log(number, sum);

    if (sum === number) {
        arrayDivisors = new Array();
        return true;

    } else {
        arrayDivisors = new Array();
        sum = 0;
        return false;
    }
}


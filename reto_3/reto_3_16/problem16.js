function calculate() {
    var number = document.getElementById('number').value;
    number = Number(number);
    var result = 0;
    var arraySum = 0;
    var i = 1;
    var lastNumber = 0;
    var flagMayor = false;

    if (number > 0) {
        while (!flagMayor) {
            result = 0;
            for (var x = 1; x < i; x++) {
                result += x;

                lastNumber = i;
            }
            if (result >= number) {
                console.log(result, i);
                flagMayor = true;
            }
            i++;
        }

        console.log('VALOR', lastNumber);

        document.getElementById('result').innerHTML = '<p>Result: ' + (lastNumber -1) + ' </p>';
    } else {
        Materialize.toast('Invalid number', 4000);
    }
}


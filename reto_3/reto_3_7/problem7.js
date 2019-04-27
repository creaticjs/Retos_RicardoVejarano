function calculate() {
    // 
    // document.getElementById('date').innerHTML = '<p>Date: ' + day + ' ' + monthNumber + ' ' + year +' </p>';    
    var n = document.getElementById('number').value;
    n = Number(n);
    var intentNumber = 0;
    var iW = 1;
    var arrayPerfects = new Array();
    var finalMessage = '';

    if (n > 0 && n <= 3) {
        while (intentNumber < n) {
            if (onlyCalc(iW)) {
                intentNumber++;
                arrayPerfects.push(iW);
            }
            iW++;
        }
        console.log(arrayPerfects);
        for (var t = 0; t < arrayPerfects.length; t++) {
            if (t !== arrayPerfects.length - 1) {
                finalMessage += arrayPerfects[t] + ' - ';
            } else {
                finalMessage += arrayPerfects[t]
            }
        }

        document.getElementById('result').innerHTML = '<p>Result: ' + finalMessage + ' </p>';

    } else {
        Materialize.toast('Invalid number', 4000);
    }

}

function onlyCalc(number) {
    var array = new Array();
    for (var x = 1; x < number; x++) {
        if (Number.isInteger(number / x)) {
            array.push(x);
        }
    }
    if (array.length > 1) {
        var sum = 0;
        for (var j = 0; j < array.length; j++) {
            sum = sum + array[j];
        }

        if (sum === number) {
            return true
        } else {
            return false;
        }
    } else {
        return false;
    }
}

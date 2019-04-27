function calculate() {

    var x = document.getElementById('x-entry').value;
    x = Number(x);
    var i = 1;
    var e = 0;
    var num = 0;
    var den = 0;
    var arrayFactorial = new Array();
    var sumString = '1 + ';

    while (i <= 100) {
        arrayFactorial.push(factorial(i));
        i++;
    }


    console.log(arrayFactorial);
    setTimeout(() => {
        for (var y = 0; y < 100; y++) {
            num = Math.pow(x, y + 1);
            den = arrayFactorial[y];
            sumString += num / den;
            if (y !== 99) {
                sumString += ' + ';
            }
            e += (num / den);
        }
        e += 1;
        console.log(sumString);
        console.log(e);
        document.getElementById('euler').innerHTML = '<p>Result: ' + e + ' </p>';
        document.getElementById('totalSum').innerHTML = '<p>Total Sum: ' + sumString + ' </p>';
    }, 500);




}

function factorial(x) {
    if (x === 0) {
        return 1;
    }
    return x * factorial(x - 1);

}

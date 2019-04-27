function calculate() {
    var terms = document.getElementById('terms-entry').value;
    var pi = 0;
    var num = 2;
    var den = 1;


    if (terms > 0) {
        for (var x = 0; x < terms; x++) {
            if (x === 0) {
                pi = num / den;
            } else {
                if (x % 2 === 0) {
                    num = num + 2;
                } else {
                    den = den + 2;
                }
                // console.log(`factor ${x} => `, `${num}/${den}`);
                pi = pi * (num / den);
            }
        }
        // console.log(pi);
        pi = pi * 2;
    } else {
        Materialize.toast('Invalid data', 4000);
    }

    document.getElementById('pi').innerHTML = '<p>Value of pi with ' + terms + ' terms: ' + pi + '</p>';
}

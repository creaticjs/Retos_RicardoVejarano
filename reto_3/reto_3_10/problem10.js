function calculate() {
    var numberA = document.getElementById('numberA-entry').value;
    var numberB = document.getElementById('numberB-entry').value;
    numberA = Number(numberA);
    numberB = Number(numberB);
    var mcdFinal = 1;
    if (numberA > numberB) {
        mcdFinal = mcd(numberA, numberB);
        document.getElementById('mcd').innerHTML = '<p>MCD: ' + mcdFinal + ' </p>';
    } else {
        Materialize.toast('The number a must be greater than b', 4000);
    }

}


function mcd(a, b) {
    if (!b) {
        return a;
    }
    return mcd(b, a % b);
};


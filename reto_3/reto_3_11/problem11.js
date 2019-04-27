function calculate() {
    var number = document.getElementById('numberTyped').value;
    number = Number(number);
    isPrime = true;
    var i = 2;

    do {
        if(number % i === 0) {
            isPrime = false;
        }
        i++;
    } while(i < number);


    if (isPrime) {
        document.getElementById('isPrime').innerHTML = '<p>Is prime</p>';
    } else {
        document.getElementById('isPrime').innerHTML = '<p>Not prime </p>';
    }
}



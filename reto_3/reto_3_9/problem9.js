var totalRabbits = 0;

function calculate() {
    // 
    var numberRabiitsPairs = document.getElementById('numberRabiits').value;
    numberRabiitsPairs = Number(numberRabiitsPairs);
    var months = 0;
    months = rabbits(numberRabiitsPairs) -2;
    document.getElementById('months').innerHTML = '<p>Number of months: ' +  months + ' </p>';
    document.getElementById('rabbitsPair').innerHTML = '<p>Pair of rabbits: ' +  totalRabbits + ' </p>';
    // console.log(`Meses necesarios ${months}`);

}

function rabbits(pairOfRabbits) {
    var a = 1;
    var b = 0;
    var temp;
    var counter = 0;

    while (b <= pairOfRabbits) {
        // console.log('b =>', b, ' Pair =>', pairOfRabbits);
        counter ++;
        temp = a;
        a = a + b;
        b = temp;
        totalRabbits = b;
        // console.log('b', b);
    }

    return counter;
}
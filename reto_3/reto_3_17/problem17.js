var arrayNumbers = [];
var totalInputs = 0;
var nNumbers = 0;
var highest = 0;
var lowest = 0;
var average = 0;

function generateInputs() {
    nNumbers = document.getElementById('nNumbers').value;
    totalInputs = nNumbers;
    for (var x = 0; x < nNumbers; x++) {
        num = x + 1;
        var input = document.createElement("input");
        input.type = "number";
        input.placeholder = "number" + num;
        input.name = "number" + x;
        input.id = "number" + num;
        input.className = "input-field col s4 offset-s4"
        inputsContainer.appendChild(input);
        inputsContainer.appendChild(document.createElement("br"));
    }

}

function calculate() {
    arrayNumbers = [];
    for (var x = 0; x < totalInputs; x++) {
        num = x + 1;
        const tempNumber = document.getElementById("number" + num).value;
        arrayNumbers.push(Number(tempNumber));
    }
    arrayNumbers.sort();
    // console.log(arrayNumbers);
    highest = arrayNumbers[arrayNumbers.length - 1];
    lowest = arrayNumbers[0];
    average = calculateAverage(arrayNumbers);
    // console.log(highest, lowest);
    document.getElementById('calculate').innerHTML = '<p>Highest:  ' + highest + ' | Lowest: ' + lowest + ' | Average: ' + average + '</p>';

}

function calculateAverage(array) {
    var sum = 0;
    var averageNumber = 0;
    for (var x = 0; x < array.length; x++) {
        sum = sum + array[x];
    }
    averageNumber = sum / (array.length);
    return averageNumber
}
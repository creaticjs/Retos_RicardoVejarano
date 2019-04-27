var input;
var reader = new FileReader();

function openFile(event) {
    input = event.target;
    reader = new FileReader();
    reader.onload = function () {
        var text = reader.result;
        calculateN(text);
    };
    reader.readAsText(input.files[0]);
};

function calculate() {
    input.files[0] = '';
}


function calculateN(text) {
    var arrayNumber = text.split(',');
    if (arrayNumber.length === 4) {
        var secondNumber = Number(arrayNumber[2] + arrayNumber[3]);
        var firstNumber = Number(arrayNumber[0] + arrayNumber[1] + '00');

        if (secondNumber >= 50) {
            firstNumber = firstNumber + 100;
            document.getElementById('number').innerHTML = '<p>Result: ' + firstNumber + ' </p>';
            console.log(firstNumber);
        } else {
            document.getElementById('number').innerHTML = '<p>Result: ' + firstNumber + ' </p>';
        }
    } else {
        Materialize.toast('Invalid data', 4000);
    }
}

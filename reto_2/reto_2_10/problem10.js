var romanMatrix = [[1000, 'M'],[900, 'CM'],[500, 'D'],[400, 'CD'],[100, 'C'],[90, 'XC'],[50, 'L'],[40, 'XL'],[10, 'X'],[9, 'IX'],[5, 'V'],[4, 'IV'],[1, 'I']];
function calculate() {
    var num = document.getElementById('numer-entry').value;
    if (num >= 1000 && num <= 2000) {
        var roman = convertToRoman(num);
        document.getElementById('number').innerHTML = '<p>' + roman + ' </p>';
    } else {
        Materialize.toast('Year out of range', 4000);
    }
}

function convertToRoman(num) {
    if (num === 0) {
        return '';
    }
    for (var i = 0; i < romanMatrix.length; i++) {
        if (num >= romanMatrix[i][0]) {
            return romanMatrix[i][1] + convertToRoman(num - romanMatrix[i][0]);
        }
    }
}
function calculate() {
    var number = document.getElementById('number-entry').value;
    number = Number(number);
    var result = '';
    var space = '<br>'

    if (number > 0) {
        for (var x = 1; x <= number; x++) {
            var point = '*'
            var linePoint = ''
            for (var j = 1; j <= x; j++) {
                linePoint += point
            }
            result += linePoint + space;
        }
        document.getElementById('result').innerHTML = '<h5>' + result + ' </h5>';
    } else {
        Materialize.toast('Invalid number', 4000);
    }
}
function calculate() {
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var c = document.getElementById('c').value;
    var d = document.getElementById('d').value;
    var e = document.getElementById('e').value;
    var f = document.getElementById('f').value;
    if (a && b && c && d && e && f) {
        var xNum = (c * e) - (b * f);
        var xDen = (a * e) - (b * d);
        var x = xNum / xDen;
        var yNum = (a * f) - (c * d);
        var yDen = (a * e) - (b * d);
        var y = yNum / yDen;
        document.getElementById('x-show').innerHTML = '<p>X= ' + x + ' </p>';
        document.getElementById('y-show').innerHTML = '<p>Y= ' + y + ' </p>';
    } else {
        Materialize.toast('Al fields are required', 4000);
    }
}
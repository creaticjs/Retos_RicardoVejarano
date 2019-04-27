function calculate() {
    var radious = document.getElementById('radious-entry').value;
    var diameter = 2*radious;
    var pi = 3.1416;
    var circ = pi*diameter;
    var diameter2 = Math.pow(radious, 2)
    var area = pi*diameter2;

    document.getElementById('radious').innerHTML = '<p>Circumference: ' + circ + ' | Area: ' + area + ' | Diameter: ' + diameter + ' </p>';

}
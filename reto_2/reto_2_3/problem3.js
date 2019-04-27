function calculate() {
    var m = document.getElementById('masse').value;
    if(m) {
        m3 = Math.pow(m, 3); 
        var c = 2.997925e10;
        e = c*m3;
        var eString = e.toString().replace('e', 'x10')
        document.getElementById('energy').innerHTML = '<p>Energy: ' +eString + '  ergios </p>';
    } else {
        Materialize.toast('All fields are required', 4000);
    }
}
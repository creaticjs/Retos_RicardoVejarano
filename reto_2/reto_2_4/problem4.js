function calculate() {
    var s1 = document.getElementById('side1').value;
    var s2 = document.getElementById('side2').value;
    if (s1 && s2) {
        s12 = Math.pow(s1, 2);
        s22 = Math.pow(s2, 2);
        hyp = Math.sqrt(s12 + s22);
        document.getElementById('hypotenuse').innerHTML = '<p>Hypotenuse: ' + hyp + '</p>';
    } else {
        Materialize.toast('All fields are required', 4000);
    }
}
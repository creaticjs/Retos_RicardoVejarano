function calculate() {
    var s1 = document.getElementById('side1').value;
    var s2 = document.getElementById('side2').value;
    var s3 = document.getElementById('side3').value;
    if (s1 && s2 && s3) {
        var p = (parseFloat(s1)+parseFloat(s2)+parseFloat(s3))/2
        var a = Math.sqrt(p*(p - s1)*(p - s2)*(p - s2));
        document.getElementById('area').innerHTML = '<p>Area: ' + a + '</p>';
    } else {
        Materialize.toast('All fields are required', 4000);
    }
}

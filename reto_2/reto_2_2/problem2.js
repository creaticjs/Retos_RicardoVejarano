function calculate() {
    var g = 6.673e-8;
    var m1 = document.getElementById('masse1').value;
    var m2 = document.getElementById('masse2').value;
    var dis = document.getElementById('distance').value;
    if (m1 && m2 && dis) {
        dis2 = Math.pow(dis, 2);
        var f = (g * m1 * m2) / dis2;
        document.getElementById('force-show').innerHTML = '<p>Force: ' +f + '  g × cm/seg² </p>';

        var fString = f.toString().replace('e', 'x10')

        document.getElementById('force-show2').innerHTML ='<p>Force in dynas: ' + fString + '  dyn </p>';
    } else {
        Materialize.toast('All fields are required', 4000);
    }
}

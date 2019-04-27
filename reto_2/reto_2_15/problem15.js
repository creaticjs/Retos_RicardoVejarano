function calculate() {
    var month = document.getElementById('month').value;
    var year = document.getElementById('year').value;
    var arrayDays = [];

    if (Number(month) > 0 && Number(month) <= 12) {

        if (Number(month) === 12) {
            var secondMonth = 1;
            var secondYear = Number(year) + 1;
            var secondDate = secondYear + '-' + secondMonth + '-01';
        } else {
            var secondMonth = Number(month) + 1;
            var secondDate = year + '-' + secondMonth + '-01';
        }


        var dateRef = year + '-' + month + '-01';


        var dateMil = new Date(dateRef).getTime();
        var dateTwoMil = new Date(secondDate).getTime();
        var one_day = 1000 * 60 * 60 * 24;

        for (var i = dateMil; i <= dateTwoMil; i = i + one_day) {
            var date123 = new Date(parseInt(i.toString())).toISOString();
            var allDate = date123.split('T');
            arrayDays.push(allDate[0]);
        }
        var total = arrayDays.length - 1;
        document.getElementById('days').innerHTML = '<p>Total: ' + total + ' days </p>';
    } else {
        Materialize.toast('Invalid data', 4000);
    }
}


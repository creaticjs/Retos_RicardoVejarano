function calculate() {
    var year = document.getElementById('year-entry').value;
    year = Number(year);
    var a = 0;
    var b = 0;
    var c = 0;
    var d = 0;
    var n = 0;

    if (year >= 1990 && year <= 2000) {

        a = year % 19;
        b = year % 4;
        c = year % 7;
        d = (19 * a + 24) % 30;
        e = ((2 * b) + (4 * c) + (6 * d) + 5) % 7;
        n = (22 + d + e);
        printDate(n);


    } else {
        Materialize.toast('Invalid year', 4000);
    }
}

function printDate(n) {
    if (n <= 31) {
        document.getElementById('date').innerHTML = '<p>Date of Easter Sunday: ' + n + ' of March</p>';
    } else {
        const aprilDate = n - 31;
        document.getElementById('date').innerHTML = '<p>Date of Easter Sunday: ' + aprilDate + ' of April</p>';
    }
}
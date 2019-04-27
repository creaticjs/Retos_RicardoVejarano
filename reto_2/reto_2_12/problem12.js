var input;
var reader = new FileReader();

function openFile(event) {
    input = event.target;
    reader = new FileReader();
    reader.onload = function () {
        var text = reader.result;
        calculateN(text);
    };
    reader.readAsText(input.files[0]);
};

function calculate() {
    input.files[0] = '';
}

function calculateN(text) {
    var date1 = text.split(' ')[0];
    var date2 = text.split(' ')[1];

    var date1Array = date1.split('-');
    var date2Array = date2.split('-');
    var date1Convert = date1Array[2] + '-' + date1Array[1] + '-' + date1Array[0];
    var date2Convert = date2Array[2] + '-' + date2Array[1] + '-' + date2Array[0];

    var totalDays = getArrayDays(date1Convert, date2Convert);

    if (date1Array[0] > 0 && date1Array[0] <= 31 && date1Array[1] > 0 && date1Array[1] <= 12 && date1Array[2] > 1900 && date1Array[2] <= 2019 &&
        date2Array[0] > 0 && date2Array[0] <= 31 && date2Array[1] > 0 && date2Array[1] <= 12 && date2Array[2] > 1900 && date2Array[2] <= 2019) {

        if (date1Array[2] !== date2Array[2]) {
            if (Number(date2Array[2]) > Number(date1Array[2])) {
                var years = Number(date2Array[2]) - Number(date1Array[2]);
                document.getElementById('dateRef').innerHTML = '<p>Date Initial: ' + date1 + ' | Date Final:  ' + date2 + ' </p>';
                document.getElementById('date').innerHTML = '<p>You are: ' + years + ' years old ' + ' </p>';
            } else {
                Materialize.toast('Invalid data', 4000);
            }

        } else {
            // its a baby
            var month = 0;
            var days = totalDays;
            if (totalDays > 0) {
                month = Number(date2Array[1]) - Number(date1Array[1]);
                document.getElementById('dateRef').innerHTML = '<p>Date Initial: ' + date1 + ' | Date Final:  ' + date2 + ' </p>';
                document.getElementById('date').innerHTML = '<p>Date: ' + month + ' months and ' + days + ' days ' + ' </p>';
            } else {
                Materialize.toast('Invalid data', 4000);
            }


        }

    } else {
        Materialize.toast('Invalid data', 4000);
    }
}

function getArrayDays(start, end) {
    var arrayDays = [];
    var one_day = 1000 * 60 * 60 * 24;
    var startDate = new Date(start).getTime();
    var endDate = new Date(end).getTime();
    var uno = new Date(parseInt(startDate.toString())).toISOString();
    var dos = new Date(parseInt(endDate.toString())).toISOString();
    for (var i = startDate; i <= endDate; i = i + one_day) {
        var date123 = new Date(parseInt(i.toString())).toISOString();
        var allDate = date123.split('T');
        arrayDays.push(allDate[0]);
    }

    var count = 0;
    var ref = '';
    for (var x = 0; x < arrayDays.length; x++) {
        if (x === 0) {
            ref = arrayDays[0].split('-')[1];
        }
        if (arrayDays[x].split('-')[1] === ref) {
            count++;
        }
    }
    return count - 1;
}
function calculate() {
    var hour_24 = document.getElementById('hour-24').value;
    var arrayHour = hour_24.split('');
    if (arrayHour.length === 5) {
        if (arrayHour[2] === ":") {
            determinateHour(hour_24);
        } else {
            Materialize.toast('Invalid hour format', 4000);
        }

    } else {
        Materialize.toast('Enter a valid value', 4000);
    }

}

function determinateHour(hour) {
    var temp = hour.split(':');
    if(temp[0] >= 0 && temp[0] < 24  && temp[1] > 0 && temp[1] < 60) {

        if(temp[0] > 12) {
            var tempHour = '0';
            switch(temp[0]) {
                case '13': tempHour = '01';
                break;
                case '14': tempHour = '02';
                break;
                case '15': tempHour = '03';
                break;
                case '16': tempHour = '04';
                break;
                case '17': tempHour = '05';
                break;
                case '18': tempHour = '06';
                break;
                case '19': tempHour = '07';
                break;
                case '20': tempHour = '08';
                break;
                case '21': tempHour = '09';
                break;
                case '22': tempHour = '10';
                break;
                case '23': tempHour = '11';
                break;
                case '24': tempHour = '12';
                break;
            }
            document.getElementById('time').innerHTML = '<p>Time: ' + tempHour + ':' + temp[1] + ' pm</p>';
        } else {
            // Same hour
            if(temp[0] !== '00') {
                document.getElementById('time').innerHTML = '<p>Time: ' + temp[0] + ':' + temp[1] + ' am</p>';
            } else {
                document.getElementById('time').innerHTML = '<p>Time: ' + '12' + ':' + temp[1] + ' am</p>';
            }
            
        }

    } else {
        Materialize.toast('Invalid hour', 4000);
    }
}
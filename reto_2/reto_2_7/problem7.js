function calculate() {
    var date_complete = document.getElementById('date-entry').value;
    var day = date_complete.split(',')[0];
    var month_year = date_complete.split(',')[1];
    var month = month_year.split(' ')[1];
    var year = month_year.split(' ')[2];
    var monthNumber = numberMonth(month);
    if(monthNumber !== 0) {
        document.getElementById('date').innerHTML = '<p>Date: ' + day + ' ' + monthNumber + ' ' + year +' </p>';    
    } else {
        Materialize.toast('Invalid data', 4000);
    }
}

function numberMonth(nameMonth) {
    var number = 0;
    var name = nameMonth.toLowerCase() 
    switch(name) {
        case 'enero': number = 1;
        break;
        case 'febrero': number = 2;
        break;
        case 'marzo': number = 3;
        break;
        case 'abril': number = 4;
        break;
        case 'mayo': number = 5;
        break;
        case 'junio': number = 6;
        break;
        case 'julio': number = 7;
        break;
        case 'agosto': number = 8;
        break;
        case 'septiembre': number = 9;
        break;
        case 'octubre': number = 10;
        break;
        case 'noviembre': number = 11;
        break;
        case 'diciembre': number = 12;
        break;
        default: number = 0;
        break;
    }
    return number;
}
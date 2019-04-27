function inputEvent() {
    var date_complete = document.getElementById('number-entry').value;
    var lastChar = date_complete[date_complete.length -1];
    if(lastChar === '.') {
        calculate();
    }
}


function calculate() {
    var date_complete = document.getElementById('number-entry').value;
    date_complete = date_complete.substring(0, date_complete.length - 1);
    var temp = date_complete.split(' ');
    if (temp.length === 1) {
        // If is  a hundred number
        var hundred = hundreds(date_complete);
        if (hundred !== 0) {
            document.getElementById('number').innerHTML = '<p>Number: ' + hundred + ' </p>';
        } else {
            Materialize.toast('Invalid number', 4000);
        }
    } else if (temp.length === 4) {
        var hund = hundreds(temp[0]);
        hund = hund / 100;
        puzzle(hund, temp);
    } else {
        var hund = hundreds(temp[0]);
        hund = hund / 100;
        var tens_temp = tens(temp[1]);
        if (tens_temp !== 0) {
            document.getElementById('number').innerHTML = '<p>Number: ' + hund + tens_temp + ' </p>';
        } else {
            var digit = digits(temp[1]);
            if (digit !== 0) {
                document.getElementById('number').innerHTML = '<p>Number: ' + hund + 0 + digit + ' </p>';
            } else {
                var digit_round_ten = round_ten(temp[1]);
                if (digit_round_ten !== 0) {
                    document.getElementById('number').innerHTML = '<p>Number: ' + hund + digit_round_ten + ' </p>';
                } else {
                    var digit_rount_20 = round_20(temp[1]);
                    if (digit_rount_20 !== 0) {
                        document.getElementById('number').innerHTML = '<p>Number: ' + hund + digit_rount_20 + ' </p>';
                    } else {
                        Materialize.toast('InvaImposible to convert number', 4000);
                    }
                }
            }
        }
    }
}

function puzzle(hundred, rest) {

    // ten
    var ten = tens(rest[1]);
    ten = ten / 10;
    var number = digits(rest[3]);
    if (ten !== 0 && number !== 0) {
        document.getElementById('number').innerHTML = '<p>Number: ' + hundred + ten + number + ' </p>';
    } else {
        Materialize.toast('InvaImposible to convert number', 4000);
    }
}

function hundreds(text_number) {
    var number = 0;
    var text = text_number.toLowerCase();
    switch (text) {
        case 'cien': number = 100;
            break;
        case 'ciento': number = 100;
            break;
        case 'doscientos': number = 200;
            break;
        case 'trescientos': number = 300;
            break;
        case 'cuatrocientos': number = 400;
            break;
        case 'quinientos': number = 500;
            break;
        case 'seiscientos': number = 600;
            break;
        case 'setecientos': number = 700;
            break;
        case 'ochocientos': number = 800;
            break;
        case 'novecientos': number = 900;
            break;
        default: number = 0;
            break
    }
    return number;
}

function tens(text_number) {
    var number = 0;
    var text = text_number.toLowerCase();
    switch (text) {
        case 'diez': number = 10;
            break;
        case 'veinte': number = 20;
            break;
        case 'treinta': number = 30;
            break;
        case 'cuarenta': number = 40;
            break;
        case 'cincuenta': number = 50;
            break;
        case 'sesenta': number = 60;
            break;
        case 'setenta': number = 70;
            break;
        case 'ochenta': number = 80;
            break;
        case 'noventa': number = 90;
            break;
        default: number = 0;
            break
    }
    return number;
}

function digits(text_number) {
    var number = 0;
    var text = text_number.toLowerCase();
    switch (text) {
        case 'uno': number = 1;
            break;
        case 'dos': number = 2;
            break;
        case 'tres': number = 3;
            break;
        case 'cuatro': number = 4;
            break;
        case 'cinco': number = 5;
            break;
        case 'seis': number = 6;
            break;
        case 'siete': number = 7;
            break;
        case 'ocho': number = 8;
            break;
        case 'nueve': number = 9;
            break;
        default: number = 0;
            break
    }
    return number;
}

function round_ten(text_number) {
    var number = 0;
    var text = text_number.toLowerCase();
    switch (text) {
        case 'once': number = 11;
            break;
        case 'doce': number = 12;
            break;
        case 'trece': number = 13;
            break;
        case 'catorce': number = 14;
            break;
        case 'quince': number = 15;
            break;
        case 'dieciseis': number = 16;
            break;
        case 'diecisiete': number = 17;
            break;
        case 'dieciocho': number = 18;
            break;
        case 'diecinueve': number = 19;
            break;
        default: number = 0;
            break
    }
    return number;
}

function round_20(text_number) {
    var number = 0;
    var text = text_number.toLowerCase();
    switch (text) {
        case 'veintiuno': number = 21;
            break;
        case 'veintiun': number = 21;
            break;
        case 'veintidos': number = 22;
            break;
        case 'veintitres': number = 23;
            break;
        case 'veinticuatro': number = 24;
            break;
        case 'veinticinco': number = 25;
            break;
        case 'veintiseis': number = 26;
            break;
        case 'veintisiete': number = 27;
            break;
        case 'veintiocho': number = 28;
            break;
        case 'veintinueve': number = 29;
            break;
        default: number = 0;
            break
    }
    return number;
}

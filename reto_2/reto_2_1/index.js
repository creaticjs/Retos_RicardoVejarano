var M;

document.getElementById('average-calculated').style.visibility = 'hidden';
document.getElementById('average-calculated').style.display = 'none';

function calculate() {
    // First its evaluated if there are an empty entry
    var note1 = document.getElementById('note1').value;
    var note2 = document.getElementById('note2').value;
    var note3 = document.getElementById('note3').value;
    var note4 = document.getElementById('note4').value;
    if (note1 && note2 && note3 && note4) {
        if (note1 > 0 && note1 < 100 && note2 > 0 && note2 < 100 && note3 > 0 && note3 < 100 && note4 > 0 && note4 < 100 ) {
            var average = (parseFloat(note1) + parseFloat(note2) + parseFloat(note3) + parseFloat(note4)) / 4;
            document.getElementById('average-show').innerHTML = average;
            document.getElementById('average-calculated').style.visibility = 'visible';
            document.getElementById('average-calculated').style.display = 'block';
        } else {
            Materialize.toast('Enter a valid value', 4000);    
        }
    } else {
        Materialize.toast('All notes are required', 4000);
    }
}

function navegateBack() {
    window.location.replace('http://127.0.0.1:5500/index.html');
}




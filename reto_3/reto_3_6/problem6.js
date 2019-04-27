var flag = false;
function calculate() {
    if (flag === true) {
        var tableM = document.getElementById("magicTable");
        tableM.innerHTML = "";
    }

    var n = document.getElementById('n-entry').value;
    n = Number(n);
    arrayTest = [4, 2, 3, 4];
    var temporalNumber = 0;

    if (n % 2 !== 0 && n > 1) {
        var matrix = new Array(n)
        const size = n - 1;
        for (var i = 0; i < n; i++) {
            matrix[i] = new Array(n)
        }

        const middlePosition = Math.round((n / 2)) - 1;
        matrix[0][middlePosition] = 1;
        temporalNumber = 1;
        xPosition = 0;
        yPosition = middlePosition;


        for (var x = 0; x < (n * n) - 1; x++) {
            const xPastPosition = xPosition;
            const yPastPosition = yPosition;
            // GET NEW POSITIONS
            // new xPosition
            if (xPosition !== 0) {
                xPosition = xPosition - 1;
            } else {
                xPosition = size;
            }

            // new xPosition
            if (yPosition !== size) {
                yPosition = yPosition + 1;
            } else {
                yPosition = 0;
            }
            // ========================

            // PUSH ARRAY
            console.log(`Position x => ${xPosition}, Position y => ${yPosition}, Iteration ${x}`)
            temporalNumber++;
            if (!matrix[xPosition][yPosition]) {
                matrix[xPosition][yPosition] = temporalNumber;
            } else {

                console.log('REPETIDO');
                if (xPastPosition !== size) {
                    // console.log(temporalNumber, xPastPosition+1, yPastPosition);
                    matrix[xPastPosition + 1][yPastPosition] = temporalNumber;
                    xPosition = xPastPosition + 1;
                    yPosition = yPastPosition;
                } else {
                    matrix[0][yPastPosition] = temporalNumber;
                    xPosition = 0;
                    yPosition = yPastPosition;
                }

            }
        }
        addTable(matrix);
        console.log(matrix);
    } else {
        Materialize.toast('Number must be odd and greater than 1', 4000);
    }

    function addTable(matrix) {
        flag = true;
        var myTableDiv = document.getElementById("table-div");

        var table = document.createElement('TABLE');
        table.border = '1';
        table.id = 'magicTable';
        table.className = "centered responsive-table";

        var tableBody = document.createElement('TBODY');
        table.appendChild(tableBody);

        for (var i = 0; i < matrix.length; i++) {
            var tr = document.createElement('TR');
            tableBody.appendChild(tr);

            for (var j = 0; j < matrix.length; j++) {
                var td = document.createElement('TD');
                td.width = '75';
                td.appendChild(document.createTextNode(matrix[j][i]));
                tr.appendChild(td);
            }
        }
        myTableDiv.appendChild(table);
    }


    // document.getElementById('year').innerHTML = '<p> NO </p>';
}


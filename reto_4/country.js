var codeCountry = '';
var countryInfo = new Array();
var exchangeUSD = 0;
var exchangeEUR = 0;

getCountryCode();

function returnMain() {
    window.location.replace('http://127.0.0.1:5501/challenge4.html');
}



function getCountryCode() {
    if (localStorage.getItem('codeCountryBootcamp')) {
        codeCountry = localStorage.getItem('codeCountryBootcamp').toUpperCase();
    } else {
        codeCountry = 'EUR';
    }
    console.log(codeCountry);
    getInfoCountry();
}


function getInfoCountry() {
    getData("https://restcountries.eu/rest/v2/currency/" + codeCountry)
        .then(function (data) {
            countryInfo = data[0];
            console.log(countryInfo);
            asignDataToRender();
        }).catch(function (err) {
            console.log(err);
        });

}

function asignDataToRender() {
    document.getElementById('countryName').innerHTML = countryInfo.name;
    document.getElementById('countryCapital').innerHTML = countryInfo.capital;
    document.getElementById('countryPopulation').innerHTML = countryInfo.population;
    document.getElementById('countryNativeName').innerHTML = countryInfo.nativeName;
    document.getElementById('countryNumericCode').innerHTML = countryInfo.numericCode;
    getExchangeusdEur(countryInfo.currencies[0].code);
    // console.log('MONEDA', countryInfo.currencies[0].code);
    var imageCountry = document.getElementById("imgCountry");
    // imageCountry.src = countryInfo.flag;
}

function getExchangeusdEur(currencyCode) {
    getData(`https://api.exchangeratesapi.io/latest?symbols=USD,EUR&base=${currencyCode}`)
        .then(function (data) {
            // countryInfo = data[0];
            this.exchangeUSD = data.rates.USD
            this.exchangeEUR = data.rates.EUR
            consolw.log(this.exchangeEUR);
            if (this.exchangeEUR !== 0) {
                document.getElementById('exUSD').innerHTML = '<b> EURO: ' + this.exchangeUSD + '</b>';
                document.getElementById('exEUR').innerHTML = '<b> DOLAR: ' + this.exchangeEUR  + '</b>';
            } else {
                
                document.getElementById('exUSD').innerHTML = 'No hay datos registrados';
            }

            console.log(this.exchangeUSD, exchangeEUR);

        }).catch(function (err) {
            console.log('NO HAY REGISTROS');
            document.getElementById('exUSD').innerHTML = 'No hay datos registrados';
        });
}


// Function to do request
function getData(url) {
    return new Promise(function (resolve, reject) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4) {
                if (this.status == 200) {
                    resolve(JSON.parse(this.responseText));
                } else {
                    reject("Error: " + this.status)
                }
            }
        };
        xhttp.open('GET', url);
        xhttp.send();
    });
}

var billsCop = [100000, 50000, 20000, 10000, 5000, 2000, 1000];
var coinsCop = [500, 200, 100, 50];

function calculate() {
    var amount = document.getElementById('amount-entry').value;
    // console.log(amount);
    var totalBills = '';
    var totalCoins = '';
    amount = Number(amount);
    if (Number(amount) >= 1000) {
        for (var x = 0; x < billsCop.length; x++) {
            var temp = amount % billsCop[x];
            if (temp > 0 || billsCop[x] === Number(amount)) {
                var quantity = amount / billsCop[x];
                quantity = parseInt(quantity);
                if (quantity > 0) {
                    amount = amount - quantity * billsCop[x];
                    totalBills += quantity + ' of ' + billsCop[x] + ' | ';
                }
            }
        }
    }
    if (amount < 1000) {
        for (var x = 0; x < coinsCop.length; x++) {
            var temp = amount % coinsCop[x];
            if (temp > 0 || coinsCop[x] === Number(amount)) {
                var quantity = amount / coinsCop[x];
                quantity = parseInt(quantity);
                if (quantity > 0) {
                    amount = amount - quantity * coinsCop[x];
                    totalCoins += quantity + ' of ' + coinsCop[x] + ' | ';
                }
            }
        }
    }

    document.getElementById('bills').innerHTML = '<p>Bills: ' + totalBills + ' </p>';
    if (totalCoins !== '') {
        document.getElementById('coins').innerHTML = '<p>Coins: ' + totalCoins + ' </p>';
    }

}
function calculate() {
    var price_hour = document.getElementById('price_hour').value;
    var hours_worked = document.getElementById('hours_worked').value;
    var salaryNoTax = 0;
    var salary = 0;
    price_hour = parseInt(price_hour);
    hours_worked = parseInt(hours_worked);
    if (hours_worked > 0 && hours_worked < 38) {
        salaryNoTax = hours_worked * price_hour;
        salary = calculateTaxes(salaryNoTax);
    } else {
        var extraHours = hours_worked - 37;
        var percent_50_up = price_hour + (price_hour * 0.5);
        salaryNoTax = (37 * price_hour) + (extraHours * percent_50_up);
        salary = calculateTaxes(salaryNoTax);
    }
    document.getElementById('salary').innerHTML = '<p>Salary: ' + salary + ' </p>';
}

function calculateTaxes(salaryNoTax) {
    if (salaryNoTax > 50000) {
        return salaryNoTax - (salaryNoTax * 0.1);
    } else {
        return salaryNoTax
    }
}

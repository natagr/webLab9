
function addCountry(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        var input = document.getElementById("countryInput");
        var countryList = document.getElementById("countryList");
        if (countryList.innerHTML.length > 0) {
            countryList.innerHTML += ", ";
        }
        countryList.innerHTML += input.value;
        input.value = ""; // Clear the input field
    }
}


function sortTableNumbers() {
    var table = document.getElementById("numberTable");
    var numbers = [];
    for (var i = 0, row; row = table.rows[i]; i++) {
        for (var j = 0, col; col = row.cells[j]; j++) {
            numbers.push(parseInt(col.innerHTML));
        }
    }
    numbers.sort(function(a, b) { return a - b; });
    document.getElementById("sortedNumbers").value = numbers.join(", ");
}

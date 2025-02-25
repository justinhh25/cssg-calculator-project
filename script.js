function add() {
    var a = parseFloat(document.m1.t1.value);
    var b = parseFloat(document.m1.t2.value);
    var c = a + b;
    document.m1.t3.value = c;
    saveHistory(a, b, c, '+');
}

function sub() {
    var a = parseFloat(document.m1.t1.value);
    var b = parseFloat(document.m1.t2.value);
    var c = a - b;
    document.m1.t3.value = c;
    saveHistory(a, b, c, '-');
}

function mul() {
    var a = parseFloat(document.m1.t1.value);
    var b = parseFloat(document.m1.t2.value);
    var c = a * b;
    document.m1.t3.value = c;
    saveHistory(a, b, c, '*');
}

function div() {
    var a = parseFloat(document.m1.t1.value);
    var b = parseFloat(document.m1.t2.value);
    if (b !== 0) {
        var c = a / b;
        document.m1.t3.value = c;
        saveHistory(a, b, c, '/');
    } else {
        document.m1.t3.value = "Error: Division by 0";
    }
}

function saveHistory(a, b, result, operator) {

    var historyDiv = document.getElementById("history");


    var historyEntry = document.createElement("div");
    historyEntry.className = "history-entry";

    historyEntry.innerHTML = 
        '<span>' + a + ' ' + operator + ' ' + b + ' = ' + result + '</span>';
        
    historyDiv.insertBefore(historyEntry, historyDiv.firstChild);
}

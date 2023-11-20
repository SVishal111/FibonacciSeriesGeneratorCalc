function fibSeries() {

    lim = parseInt(document.getElementById("num1").value);
    var i;

    var a = 0;
    var b = 1;

    document.getElementById("resultShow").value = a + ", " + b;

    for(i=1; i<=lim; i++) {
        // a = 0;
        // b = 1;
        a, b
        c = a + b;
        document.getElementById("resultShow").value += ", "+c;
        a = b;
        b = c;
    }
}
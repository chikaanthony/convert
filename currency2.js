function convert() {
    const input = document.getElementById("input").value;
    const hello = document.getElementById("currency").value;
    let result;

    switch(hello) {
        case "USD":
            result = input / 1455.21;
            break;
        case "EUR":
            result = input / 1.08;
            break;
        case "GBP":
            result = input / 0.75;
            break;
        default:
            result = 0;
    }

    document.getElementById("display").innerHTML = result.toFixed(2);
}
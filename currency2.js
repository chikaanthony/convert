function convert() {
    const input = document.getElementById("input").value;
    const hello = document.getElementById("currency").value;
    let result;

    switch(hello) {
        case "USD":
            result = input * 1455.21;
            break;
        case "EUR":
            result = input * 1687.00;
            break;
        case "GBP":
            result = input * 1931.67;
            break;
        case "JPY":
            result = input * 9.18;
            break
        default:
            result = 0;
    }

    document.getElementById("display").innerHTML = result.toFixed(2)+"naira";
}
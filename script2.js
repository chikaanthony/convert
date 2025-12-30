let money 


function convert(){
    if(radio1.checked){
        money = Number(numberbox.value)
        money = money /1455.21
        document.getElementById("display").textContent ="$"+  money.toFixed(2)
    }
    else if(radio2.checked){
        money = Number(numberbox.value)
        money = money * 1455.21
        document.getElementById("display").textContent = money.toFixed(2)+"naira"
    }
    else{
        document.getElementById("display").textContent = "Please select conversion"
    }
    
}
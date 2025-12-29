let temp 


function convert(){
    if(radio1.checked){
        temp = Number(numberbox.value)
        temp = temp * (9/5) + 32
        document.getElementById("display").textContent =  temp.toFixed(1)+"*C"
    }
    else if(radio2.checked){
        temp = Number(numberbox.value)
        temp = (temp - 32) *(5/9)
        document.getElementById("display").textContent = temp.toFixed(1)+"*C"
    }
    else{
        document.getElementById("display").textContent = "Please select conversion"
    }
    
}
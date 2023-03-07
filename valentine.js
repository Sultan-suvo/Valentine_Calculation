document.getElementById("kitkat-buy-btn").addEventListener("click", function(){
    const quantity = setInputValue("kitkat-quantity")

    const kitkatCoast = quantity*200;
    setInnerrText ("chocolate", kitkatCoast)
    total()
})
document.getElementById("rose-buy-btn").addEventListener("click", function(){
    const quantity = document.getElementById("rose-quantity").value;

    const roseCoast = quantity*100;
    setInnerrText ("rose", roseCoast)
    total()
})
document.getElementById("diary-buy-btn").addEventListener("click", function(){
    const quantity = document.getElementById("diary-quantity").value;

    const diaryCoast = quantity*100;
    setInnerrText ("diary", diaryCoast)
    total()
})


function setInnerrText (id, value) {
    document.getElementById(id).innerText=value;
    
}
function setInputValue (id){
    const value =document.getElementById(id).value;
    return parseFloat(value);
}

function total(){
    const chocolate = document.getElementById("chocolate").innerText;
    const rose = document.getElementById("rose").innerText;
    const diary = document.getElementById("diary").innerText;

    const toatalSum = parseFloat(chocolate)+parseFloat(rose)+parseFloat(diary);

    setInnerrText("total", toatalSum)
}

document.getElementById("promoApplyBtn").addEventListener("click",function(){
    const promoCode = setInputValue("promo-code");
    if(promoCode == 101){
        const total = document.getElementById("total").innerText;
        const sum = total-parseFloat(total * 0.1);
        setInnerrText("all-total", sum)
    }
    else{
        alert("wrong Promo-code try again with valid code")
    }
})
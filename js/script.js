

const pricePerKm= 0.26;
let totalPrice= pricePerKm;
console.log(totalPrice)
totalPrice= totalPrice * userDistance;

if( userAge < 18){
    const discount= ((totalPrice * 15) / 100);
    totalPrice=totalPrice-discount;
    
} 

else if( userAge > 65){
        const discount= ((totalPrice * 35) / 100);
        totalPrice=totalPrice-discount;
        
} 

// ? arrotndiamo a due cifre max dopo la virgola

totalPrice= totalPrice.toFixed(2);
console.log(totalPrice);

document.getElementById('costo-biglietto').innerHTML = totalPrice;
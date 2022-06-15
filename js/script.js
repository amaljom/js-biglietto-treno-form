
const dataAcquisition = document.querySelector('#data-acquisition');

dataAcquisition.addEventListener('click', function(){
    // ! faccio in modo che i valori inseriti dall' utente nel form vengano //
    // ! assegnati alle variabili che userò per fare i calcoli //
    let userAge = document.getElementById('user-age').value;
    let userDistance = document.getElementById('user-km').value;
    console.log(userAge, userDistance);
});



// * const userAge=parseInt( prompt('inserisci la tua età') );
// * const userDistance=parseInt( prompt('inserisci quanti km vuoi percorrere') );
// * console.log(userAge, userDistance);

// const pricePerKm= 0.26;
// let totalPrice= pricePerKm;
// console.log(totalPrice)
// totalPrice= totalPrice * userDistance;

// if( userAge < 18){
//     const discount= ((totalPrice * 15) / 100);
//     totalPrice=totalPrice-discount;
    
// } 

// else if( userAge > 65){
//         const discount= ((totalPrice * 35) / 100);
//         totalPrice=totalPrice-discount;
        
// } 

// // ? arrotndiamo a due cifre max dopo la virgola

// totalPrice= totalPrice.toFixed(2);
// console.log(totalPrice);

// document.getElementById('costo-biglietto').innerHTML = totalPrice;
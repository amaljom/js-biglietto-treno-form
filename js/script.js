
const dataAcquisition = document.querySelector('#data-acquisition');

dataAcquisition.addEventListener('click', function(){
    // ! faccio in modo che i valori inseriti dall' utente nel form vengano //
    // ! assegnati alle variabili che userò per fare i calcoli //
    const userAge = parseInt(document.getElementById('user-age').value);
    const userDistance = parseInt(document.getElementById('user-km').value);
    console.log(userAge, userDistance);

    const pricePerKm= 0.26;
    let totalPrice= pricePerKm;
    totalPrice *= userDistance;

    if( userAge < 18){
    const discount= ((totalPrice * 15) / 100);
    totalPrice=totalPrice-discount;
    } 

    else if( userAge >= 65){
        const discount= ((totalPrice * 35) / 100);
        totalPrice=totalPrice-discount;
                
    } 

    // ? arrotndiamo a due cifre max dopo la virgola

    totalPrice= totalPrice.toFixed(2);
    console.log(totalPrice);
    document.getElementById('prezzo').append('€' + totalPrice);
});




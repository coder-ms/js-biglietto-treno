/*

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
Il biglietto andrà stampato in pagina!

*/

let agePassenger = parseInt(prompt('How old is the passenger ?'));
let distanceKm = parseInt(prompt('How many km you have to travel ?'));
const costTicket = 0.21;

if(agePassenger < 18 ){
    // Ticket = 1 --> with 20% sale -> 0.8
    /* In this case DO NOT USE let or const or whatever */
    costTrip = distanceKm * costTicket * 0.8;
}
else if(agePassenger > 65){
    // Ticket = 1 --> with 40% sale -> 0.6
    /* In this case DO NOT USE let or const or whatever */
    costTrip = distanceKm * costTicket * 0.6;
}
else{
    /* In this case DO NOT USE let or const or whatever */
    costTrip = distanceKm * costTicket;
}

let totalCost = costTrip.toFixed(2);
console.log('Age of the passenger: ' + agePassenger + 'years old');
console.log('Distance traveled : ' + distanceKm + 'Km');

console.log('Total : ' + totalCost);
document.getElementById("cost").innerHTML = totalCost;


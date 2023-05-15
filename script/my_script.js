
/* 
*Il numero di chilometri da percorrere
*Età del passeggero 
*Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.233 € al km)
va applicato uno sconto del 19.4% per i minorenni
va applicato uno sconto del 37.7% per gli over 65.
*/

const kilomentri = document.getElementById("num_km");
const eta = document.getElementById("num_age");

let biglietto = 1;

const bottone = document.querySelector("#botton");

bottone.addEventListener('click', 
    function(){

        console.log(parseInt(kilomentri.value));
        console.log(parseInt(eta.value));

        if((kilomentri.value === "") || (eta.value === "")){
            alert("Attenzione non hai inserito correttamente un numero. inserire un numero");
        }
        else{
            console.log("hai inserito dei numeri bravo");
            biglietto = biglietto * parseInt(kilomentri.value);
            console.log("IL PREZZO DEL BIGLIETTO INTERO E' DI: " + biglietto + "€");
            
        }
        console.log();
    }
);
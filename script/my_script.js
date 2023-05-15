
/* 
*Il numero di chilometri da percorrere
*Età del passeggero 
*Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
*il prezzo del biglietto è definito in base ai km (0.233 € al km)
*va applicato uno sconto del 19.4% per i minorenni
*va applicato uno sconto del 37.7% per gli over 65.
*/

const kilomentri = document.getElementById("num_km");
const eta = document.getElementById("num_age");

let biglietto = 0.233;
let sconto;

const bottone = document.querySelector("#botton");

bottone.addEventListener('click', 
    function(){

        console.log(parseInt(kilomentri.value));
        console.log(parseInt(eta.value));

        if((kilomentri.value === "") || (eta.value === "")){
            alert("Attenzione non hai inserito correttamente un numero. inserire un numero");
        }
        else{
            if((parseInt(kilomentri.value) > 0) ){

                console.log("Numero di km da percorrere: " + parseInt(kilomentri.value));
                console.log("Eta dell'utente: " + parseInt(eta.value));

                document.getElementById("km").innerHTML = "Km: " + parseInt(kilomentri.value);
                document.getElementById("age").innerHTML = "Eta : " + parseInt(eta.value);

                if((parseInt(eta.value) >= 0) && (parseInt(eta.value) <= 110)){

                    biglietto = biglietto * parseInt(kilomentri.value);

                    if(eta.value < 18){
                        console.log("Minorenne sconto del 19.4%");

                        document.getElementById("age").innerHTML += "<p id=\"\prezzo_iniziale\"\></p>" + "<p id=\"\discount\"\></p>" ;
                        document.getElementById("prezzo_iniziale").innerHTML = "Prezzo intero: " + biglietto.toFixed(2) + "€";
                        document.getElementById("discount").innerHTML = " Sconto minorenni del 19.4% ";

                        sconto = biglietto * (19.4 / 100);
                        biglietto = biglietto - sconto;
                        biglietto = biglietto.toFixed(2);
                        console.log("Il prezzo del biglietto è di: " + biglietto +"€");
                        document.getElementById("prezzo").innerHTML = "Prezzo finale : " + biglietto + "€";
                        biglietto = 0.233;
                    }
                    else if(eta.value >= 65){
                        console.log("Over 65 sconto del 37.7%");

                        document.getElementById("age").innerHTML += "<p id=\"\prezzo_iniziale\"\></p>" + "<p id=\"\discount\"\></p>" ;
                        document.getElementById("prezzo_iniziale").innerHTML = "Prezzo intero: " + biglietto.toFixed(2) + "€";
                        document.getElementById("discount").innerHTML = "Sconto over 65 del 37.7% ";

                        sconto = biglietto * (37.7 / 100);
                        biglietto = biglietto - sconto;
                        biglietto = biglietto.toFixed(2);
                        console.log("Il prezzo del biglietto è di: " + biglietto +"€");
                        document.getElementById("prezzo").innerHTML = "Prezzo finale : " + biglietto + "€";
                        biglietto = 0.233;
                    }
                    else{
                        console.log("IL PREZZO DEL BIGLIETTO INTERO E' DI: " + biglietto + "€");
                        document.getElementById("prezzo").innerHTML = "Prezzo: " + biglietto.toFixed(2) + "€";
                        biglietto = biglietto.toFixed(2);
                        biglietto = 0.233;
                    }

                }
                else{
                    alert("Attenzione inserire l'età compresa tra 0 e 110");
                }
            }
            else{
                alert("Attenzione, inserire un numero di km più alto di 0");
            }
        }
        console.log();
    }
);
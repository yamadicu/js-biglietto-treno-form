// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). 

function conferma(){

    let chilometri = document.getElementById('chilometri').value;
    let eta = parseInt(document.getElementById('eta').value);
    let titolare = document.getElementById('titolare').value;
    

    let prezzo = chilometri * 0.21;

    let prezzoMinori = prezzo - ( prezzo * 0.20 );

    let prezzoAnziani = prezzo - ( prezzo * 0.40);


    if( eta < 18 ){

        document.writeln(`<p> Ciao, il prezzo del tuo biglietto è di: ${prezzoMinori.toFixed(2)}€</p>`)

    }
    else if ( eta > 65 ){

        document.writeln(`<p> Ciao, il prezzo del tuo biglietto è di: ${prezzoAnziani.toFixed(2)}€</p>`)

    }
    else{

        document.writeln(`<p> Ciao, il prezzo del tuo biglietto è di: ${prezzo}€</p>`)
        
    }

}
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

    let prezzoFinale;

    // let prezzoMinori = prezzo - ( prezzo * 0.20 );

    // let prezzoAnziani = prezzo - ( prezzo * 0.40);


    if( eta < 18 ){

        document.getElementById('categoria').innerHTML = 'minorenne';

        prezzoFinale = prezzo - (prezzo * 0.20); 

    }
    else if ( eta > 65 ){

        prezzoFinale = prezzo - (prezzo * 0.40); 
        
        document.getElementById('categoria').innerHTML = 'anziani';

    }
    else{

       prezzoFinale = prezzo;

       document.getElementById('categoria').innerHTML = 'maggiorenni';
        
    }

    document.getElementById('bigliettodi').innerHTML = `${titolare}`;

    prezzoFinale = prezzoFinale.toFixed(2);

    document.getElementById('prezzoFinale').innerHTML = `${prezzoFinale}`;

}

function cancella(){

    document.getElementById('eta').value = "";

    document.getElementById('chilometri').value = "";

    document.getElementById('titolare').value = "";

}
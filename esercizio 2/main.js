let pariDispari = prompt('Inserisci Pari o Dispari');

while(pariDispari != 'Pari' && pariDispari != 'Dispari'){

    alert('Non valido!! Scegli Pari o Dispari')
    pariDispari = prompt('Inserisci Pari o Dispari');
}
  let inserisciNumero = prompt('Inserisci Numero da 1 a 5');

while(inserisciNumero >= 6) {

    alert('Numero non valido')
    inserisciNumero = prompt('Inserisci un valore valido');

}
let finale = sommaSfida(inserisciNumero);
let miaScelta = pariOdispari(pariDispari);


// LE MIE FUNZIONI



function sommaSfida (x) {
    let computer = Math.floor(Math.random() * 5 +1);
    let numeroInserito = parseInt(x);
    let risultato = parseInt(computer + numeroInserito)

    return risultato;
}

function pariOdispari(x) {
    
    if(finale % 2 == 0) {

        alert('pari');
        if(pariDispari == 'Pari'){
            alert('Hai Vinto!')
        }
        
        else {

            alert('Hai Perso!')
        }
    }
    
    else {
    
        alert('dispari');
        if(pariDispari == 'Dispari') {
            alert('Hai vinto!')
        }

        else {

            alert('Hai perso!')
        }
    }
}

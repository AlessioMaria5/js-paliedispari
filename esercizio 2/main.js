// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// let pariDispari = prompt('Inserisci Pari o Dispari');
let inserisciNumero = prompt('Inserisci Numero da 1 a 5');

function sommaSfida (x) {
    let computer = Math.floor(Math.random() * 5 +1);
    let numeroInserito = parseInt(x);
    let risultato = parseInt(computer + numeroInserito)

    return risultato;
}

let finale = sommaSfida(inserisciNumero);
console.log(finale);

function ruolo(x) {
    
    if(finale % 2 == 0) {

        alert('pari');
    }
    
    else {
    
        alert('dispari');
    }


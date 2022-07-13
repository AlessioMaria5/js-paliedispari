let parolaInserita = prompt('Inserisci una parola');

function parolaAlContrario(parola){ 

    let x = 0 

    for( i = parola.length -1 ; i >= 0; i--) {
        if(parola[i] != parola[x]){
            return false
        }
    x++ 
    }
}

let finale = parolaAlContrario(parolaInserita);

if (finale == false) {
    alert('normale')
}

else {
    alert('palindromo');
}
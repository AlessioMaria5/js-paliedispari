// PALIDROMA
// 1- Chiedere all'utente di inserire una parola [ Y ]
// 2 -Creare una funzione per capire se la parola inserita è un palindromo
// 2.1 = scomporre la parola [y]
// 2.2 fargli leggere la parola al contrario
// 2.3 se la parola al contrario è uguale alla parola letta normale allora è palindroma.



let parolaInserita = prompt('Inserisci una parola');
console.log(parolaInserita);
const parolaScomposta = parolaInserita.split('');
console.log(parolaScomposta);
const alContrario = []; 

function parolaAlContrario(){

    let risultato
    for( i = parolaScomposta.length -1 ; i >= 0; i--) {
        let risultato = alContrario.push(parolaScomposta[i])   
    }
}

let risultato = parolaAlContrario();
console.log(alContrario);

if (risultato = parolaInserita) {

    alert('palindroma');
}

else {

    alert('normale');
}




// const parolaScompostaContrario = parolaScomposta.reverse('');  -- < METODO REVERSE >
// console.log(parolaScompostaContrario); -- < METODO REVERSE > --------------------------------


// function dxTo(){

//     for( i = parolaScomposta.length -1 ; i >= 0; i--) {

//         console.log('il numero del ciclo è ' + i);
//         console.log(parolaScomposta[i]);
//     }

//     alert(parolaScomposta);

    
// }

// function sxTo(){

//     for( i = 0; i < parolaScomposta.length; i++) {

//         console.log('il numero del ciclo è ' +i);
//         console.log(parolaScomposta);

//     }

    

// }   



// function palindroma() {

//     for( i = parolaScomposta.length; i >= 0; i--) {

//         console.log('il numero del ciclo è ' + i);
//         const risultato = console.log(parolaScomposta[i]);
    
//     }

//     for( i = 0; i < parolaScomposta.length; i++) {


//     }


// }


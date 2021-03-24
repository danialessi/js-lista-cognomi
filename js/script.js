// 1. chiedi all’utente il cognome
// 2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
// 3. stampa la lista ordinata alfabeticamente
// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova (facciamo questo in 2 versioni: col ciclo for e col while)

// Definisco array cognomi 
var cognomi = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'];
console.log(cognomi);

// chiedo all'utente il cognome e lo inserisco in una variabile
var cognomeUtente = prompt("Ciao, qual'è il tuo cognome?");

// inserisco il cognome dell'utente nell'array
cognomi.push(cognomeUtente);
console.log("cognomi + cognome inserito: ", cognomi);

// ordino alfabeticamente la lista e la stampo
cognomi = cognomi.sort();
console.log("lista ordinata alfabeticamente: ", cognomi);

// trovo la posizione del cognome inserito partendo da 1

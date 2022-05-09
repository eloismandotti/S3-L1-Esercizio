alert(' ciao!')

var nome = prompt('Inserisci il tuo nome');
var cognome = prompt('Inserisci il tuo cognome');
var eta = prompt('Inserisci la tua età');
var citta = prompt('Inserisci la tua città');
var email = prompt('Inserisci la tua email');

var total = nome + '' + cognome + 'anni: ' + eta + ' citta: ' +  citta + 'email ' + email

window.alert(total);
document.write(total);
console.log(total);

document.getElementById('nome').innerHTML = nome;
document.getElementById('cognome').innerHTML = cognome;
document.getElementById('eta').innerHTML = eta;
document.getElementById('citta').innerHTML = citta;
document.getElementById('email').innerHTML = email;
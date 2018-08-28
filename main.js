const age = 99;
if (age >= 21) {
    console.log("You can drink");
}
else if (age > 75) {
    console.log('its nap time')
}
else {
    console.log("nope");
}


// --------------------
//OPERATORS//

// authenticated === true //checks data type as well
// if(authenticated){
//     console.log('you are logged in');
// } else {
//     console.log('you need to log in')
// }

const a = 1;
const b = '1';
// a === b // false
// a == b // true
// a !== b // true
// a != b // false

// authenticated == true

const favoriteColor = 'blue';
const favoriteAnimal = 'bear';

if(favoriteAnimal === 'bear' && favoriteColor === 'blue'){ //true and false is false
    console.log('Welcome to the club');
} else if (favoriteAnimal === 'cat'  || favoriteColor === 'red'){ //true or false is true
    console.log('$500 to join the club');
} else {
    console.log('go away');
}

const hiDiv = document.getElementById('hi');
console.log(hiDiv);

const pie = 'peach';

console.log('pie length: ', pie.length);

console.log('#3', pie.charAt(2));
console.log('indexof cat', pie.indexOf('cat'));
console.log('indexof pea', pie.indexOf('pea'));

const quote = 'winter is coming';
const newQuote = quote.replace(/is/g , "ain't" ); //have to capture the new quote newQuote /g is globally 
console.log('newQuote', newQuote);
//rubular.com is a way for you to map characters. shortens code?
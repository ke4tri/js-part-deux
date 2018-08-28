
const printToDom = (stringToPrint, divId) => {
    // const selectedDiv = document.getElementById('allTheNumbers');
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
  };

const sonnet = "How like a winter hath my absence been From thee, the pleasure of the fleeting year! What freezings have I felt, what dark days seen! What old December's bareness everywhere! And yet this time removed was summer's time; The teeming autumn, big with rich increase, Bearing the wanton burden of the prime, Like widow'd wombs after their lords' decease: Yet this abundant issue seemed to me But hope of orphans, and unfathered fruit; For summer and his pleasures wait on thee, And, thou away, the very birds are mute: Or, if they sing, 'tis with so dull a cheer, That leaves look pale, dreading the winter's near.";

const newQuote = sonnet.replace("winter", "yuletide");
// const newQuote2 = sonnet.replace(/ the /g, " a large "); // use spaces makes sure it just 'the' and not words ith the in it
const newQuote2 = sonnet.replace(/the/g, "a large"); // use spaces makes sure it just 'the' and not words ith the in it

console.log(sonnet.indexOf('orphans'));
console.log(sonnet.length);
console.log(newQuote);
console.log(newQuote2);
console.log();

//or 
// let newSonnet = sonnet.replace("winter", "youletide");
// newSonnet.replace(/ the /g, " a large ");


//try this
// const sonnetDiv = document.getElementById('sonnet');
// sonnetDiv.innerHTML = '<h3>${newSonnet}</h3>';

printToDom(newQuote,'yo');
printToDom(newQuote2,'you');

// const quote = 'winter is coming';
// const newQuote = quote.replace(/is/g , "ain't" ); //have to capture the new quote newQuote /g is globally 
// console.log('newQuote', newQuote);

const thingsToBuy = [
    'spaghetti',
    'tomatoes',
    'onions',
    'mincemeat'
];

const someObject = {

}

console.log(thingsToBuy);

'hello '.trim() // 'hello'

console.log(thingsToBuy.length);

console.log(thingsToBuy[2]);
console.log(thingsToBuy[3]);
console.log(thingsToBuy[4]); // undefined

thingsToBuy[3] = 'salami'; // no problem with const, changing just
                           // the contents of the array

// thingsToBuy = []; // invalid, const

console.log(thingsToBuy);

thingsToBuy[4] = 'oregano';

console.log(thingsToBuy);

thingsToBuy[8] = 'chilli'; // adds 3 undefined elements between 4 and 8

console.log(thingsToBuy);

thingsToBuy.push('basil'); // adds element at the end

console.log(thingsToBuy);

thingsToBuy.unshift('salt'); // adds element to the beginning

console.log(thingsToBuy);

// at position 6, remove 3 elements and insert 'Parmiggiano'
thingsToBuy.splice(6, 3, 'Parmiggiano');

console.log(thingsToBuy);

// at position 1, remove nothing, add 'pepper'
thingsToBuy.splice(1, 0, 'pepper');

console.log(thingsToBuy);

// at position 8, remove 1, add nothing
thingsToBuy.splice(8, 1);

console.log(thingsToBuy);

const popped = thingsToBuy.pop(); // removes element from the end and returns it

console.log(popped);
console.log(thingsToBuy);

const shifted = thingsToBuy.shift(); // removes element from the beginning and returns it

console.log(shifted);
console.log(thingsToBuy);

const emptyArray = [];

console.log(emptyArray.pop());

console.log(thingsToBuy.length);

const newShoppingList = [];

let element = null;
while (element !== undefined) {
    element = thingsToBuy.shift();

    if (element === undefined) {
        break;
    }

    console.log(element);

    newShoppingList.push(element);
}

console.log(thingsToBuy);
console.log(thingsToBuy.length);

console.log(newShoppingList);
console.log(newShoppingList.length);
const fruits = [
    {
        name: 'apple',
        count:  4
    },
    {
        name: 'pear',
        count:  2
    },
    {
        name: 'banana',
        count:  3
    },
    {
        name: 'orange',
        count: 2
    },
    {
        name: 'mango',
        count: 1
    }
];

console.log(fruits);


for (let i = 0; i < fruits.length; i++) {

    if (fruits[i].name === 'pear') {
        // if the name property of the current element is 'pear', stop this iteration
        continue;
    }

    console.log( fruits[i] );

    if (i === 2) {
        // when the 3rd element is reached (index 2), end the loop
        break;
    }

}

fruits.forEach(

    (fruit, i) => {

        if (fruit.name === 'pear') {
            return;
        }

        console.log(fruit.name);

        console.log(i);

    }

)

const myFunction = (someNameThatIMadeUp) => {

    console.log(someNameThatIMadeUp)

}


fruits.forEach( myFunction );

const names = fruits.map( (element, index) => {

    return element.name;

} )

console.log(names);


const myFruitAsString = fruits.map( (element) => {
    return element.name;
}).filter((fruitName) => {
    if (fruitName !== 'pear') {
        return true;
    } else {
        return false;
    }
}).join('-');

console.log(myFruitAsString);
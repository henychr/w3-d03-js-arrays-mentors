const shoppingList = [];

/**
 * takes name of an item (as a string)
 * and adds it to the shoppingList
 */
const addToList = (itemName) => {

    // add itemName at the end of shoppingList
    shoppingList.push(itemName);

    // show the current state of the list to the user
    renderTheShoppingCart();
}

const removeFromList = (position) => {

    shoppingList.splice(position, 1);

    // show the current state of the list to the user
    renderTheShoppingCart();
}

/**
 * takes the current value of shoppingList
 * and forEach of its elements, creates a new
 * <li> element in the <ul id="cart">
 */
const renderTheShoppingCart = () => {

    // find the UL element
    const ul = document.querySelector('#cart');
    ul.innerHTML = ''; // clear all elements (LIs) from the UL

    shoppingList.forEach( (itemName, index) => {

        // create a new LI within the UL
        // added HTML:   <li onclick="removeFromList(0)">potatoes</li>
        ul.innerHTML += '<li onclick="removeFromList(' + index + ')">' + itemName + '</li>'

    })

}
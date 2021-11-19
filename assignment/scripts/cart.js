console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

function addItem( item ) {
    basket.push(item);
    return true;
} // end addItem

console.log(addItem('apple'));
console.log(addItem('water'));

console.log(basket);

function listItems() {
    for(let items of basket) {
        console.log(items);
    } //end for
} // end listItems

listItems();

function empty(basket) {
    basket = [];
    console.log(basket);
    
}

empty();




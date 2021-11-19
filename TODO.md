[ ] Update cart.js with the following:
    [x] Create global variable named `basket` and set to empty array
    [x] Create function name `addItem`
        [x] takes input parameter for a string named `item`
        [x] adds the new item to the global array `basket`
        [x] returns `true` indicating item was added
    [x] Create function called `listItems`
        [x] loops over the items in the `basket` array
        [x] console.log each individual item on a new line
    [x] Create function called `empty`
        [x] resets the `basket` array to an empty array

[ ] STRETCH GOALS
    [ ] Add global `const` named `maxItems` and set it to 5.
    [ ] Create function called `isFull()`
        [ ] returns `false` if the basket contains LESS than max number of items
        [ ] returns `true` if the basket contains MORE than or EQUAL to the max number of items
    [ ] Update `addItem` function 
        [ ] Use the `isFull` function to prevent more than `maxItems` from being added to basket
        [ ] if an item was added to the array, return `true`
        [ ] if there was no room and the item could not be added, retuirn `false`
    [ ] create a function named `removeItem`
        [ ] takes input parameter for a string `item`
        [ ] use [Array.indexOf] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/    
            Global_Objects/Array/indexOf) to find the index of the first matching item in the basket
        [ ] use [Array.splice] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/
            Global_Objects/Array/splice) to remove the first matching item from the basket
        [ ] return the item removed or `null` if the item was not found
[![Build Status](https://travis-ci.com/pdkim/02-tools-and-context.svg?branch=master)](https://travis-ci.com/pdkim/02-tools-and-context)

## Tools and Context
In the module, it is exporting a contructor that has 6 total methods

`push()` has an item as its parameter so it can add it at the end of an array.

`pop()` should remove the last item in the array.  If the array is empty, it will return undefined.

`forEach()` has a function as its parameter and runs that function on each item in the array.  `forEach()` should return `undefined`.

`map()` has a function as its parameter.  When called, `map()` will run the function on each item in an array and creates a new array with the new values.  If an array is empty, the map function should return an empty array.

`filter` has a function that will returns a value that is coerces to true as its parameter.  When called, `filter()` will run the function on each item within an array.  If the response is truthy, the item will be added to a new array.

`reduce` has a function and a value as its parameter.  It runs the function through each item of an array and applies the value to it until it returns a single value.
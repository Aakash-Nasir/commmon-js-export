const {insertionsort , bubblesort} = require('./sorting'); // named exports

const QuickSort = require('./quicksort'); //default export


let arr = [5,4,3,2,1];
QuickSort(arr);
bubblesort(arr);
insertionsort(arr);
console.log(arr);

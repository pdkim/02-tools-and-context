'use strict';

class List {

  constructor(array = []) {
    this.length = array.length;

    //populate list with item(s) in array
    for(let i = 0; i < array.length; i++) {
      this[i] = array[i];
    }
  }

  push(item) {
    this[this.length] = item;
    this.length++;
  }

  pop() {
    let last = this[this.length-1];
    this.length--;
    if(this.length < 0) {
      this.length = 0;
    }
    if(this.length === 0) {
      last = undefined;
    }
    return last;
  }

  forEach(func) {
    for(let i = 0; i < this.length; i++) {
      func(this[i]);
    }
    return undefined;
  }

  map(func) {
    for(let i = 0; i < this.length; i++) {
      var arr = [];
      arr[i] = func(this[i]);
    }
    return arr;
  }

  
  toArray() {
    let array = [];
    
    //start at 0, end at length

    for(let i = 0; i < this.length; i++) {
      array[i] = this[i];
    }
    return array;
  }

}
// list.map = function(arr) {
//   let newArr = [];
//   for(let i = 0; i < arr.length; i++) {
//     newArr[i] = arr[i].toUpperCase();
//   }
//   return newArr;
// };

// list.filter = function(arr) {
//   let evenOnly = [];
//   for(let i = 0; i < arr.length; i++) {
//     if(arr[i] % 2 === 0) {
//       evenOnly[evenOnly.length] = arr[i];
//     }
//   }
//   return evenOnly;
// };

// list.reduce = function() {
//   return null;
// };

module.exports = List;
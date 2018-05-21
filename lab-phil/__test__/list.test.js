'use strict';

let List = require('../lib/list.js');

describe('list module', () => {
  //push
  xit('should add to empty list', () => {
    let list = new List();
    let expected = 'something';
    list.push('something');
    let actual = list[0];
    expect(actual).toBe(expected);
    expect(list.length).toBe(1);
  });

  xit('should add to single item list', () => {
    let list = new List();
    let expected = 'else';
    list.push('something');
    list.push('else');
    let actual = list[1];
    expect(actual).toBe(expected);
    expect(list.length).toBe(2);
  });

  //pop
  xit('should remove last item in list', () => {
    let list = new List();
    list.push(1);
    list.push(2);
    list.pop();
    let expected = 1;
    let actual = list[0];
    expect(actual).toBe(expected);
    expect(list.length).toBe(1);
  });

  xit('should return the last item removed', () => {
    let list = new List();
    list.push(1);
    list.push(2);
    let actual = list.pop();
    list.pop;
    let expected = 2;
    expect(actual).toBe(expected);
  });

  xit('should return undefined if length is 0.', () => {
    let list = new List();
    list.push(1);
    let expected = undefined;
    list.pop();
    expect(list.pop()).toBe(expected);
    expect(list.length).toBe(0);
  });
  

  //forEach
  xit('should iterate through each item in the array', () => {
    let list = new List;
    list.push(1);
    list.push(2);
    list.push(3);
    let newArr = [];
    list.forEach(item => newArr.push(item));
    let actual = newArr;
    let expected = list.toArray();
    expect(actual).toEqual(expected);
  });

  xit('should return undefined', () => {
    let list = new List;
    list.push(1);
    list.push(2);
    list.push(3);
    let actual = list.forEach(item => console.log(item));
    let expected = undefined;
    expect(actual).toEqual(expected);
  });


  //map
  xit('by create a new array affecting all values', () => {
    let list = new List;
    list.push(1);
    list.push(2);
    list.push(3);
    let actual = list.toArray().map(item => item * 5);
    let expected = [5, 10, 15];
    expect(actual).toEqual(expected);
    expect(list.toArray()).toEqual([1, 2, 3]);
  });

  //filter
  xit('by making a new array that returns only even numbers', () => {
    let list = new List;
    list.push(1);
    list.push(2);
    list.push(3);
    list.push(4);
    let actual = list.toArray().filter(item => item % 2 === 0);
    let expected = [2, 4];
    expect(actual).toEqual(expected);
    expect(list.toArray()).toEqual([1, 2, 3, 4]);
  });

  xit('by pushing nothing and returning an empty array', () => {
    let list = new List;
    list.push(1);
    list.push(3);
    list.push(5);
    let actual = list.toArray().filter(item => item % 2 ===0);
    let expected = [];
    expect(actual).toEqual(expected);
  });

  //reduce
  xit('by reducing all the elements in the array into a single result', () => {
    expect(list.reduce()).toBeNull();
  });
});

//let source = [1, 2,3];
//let list = new List(source);
//list.pop();
//source.pop();
//expect(list.toArray()).toEqual(source);

//let list = new List('apples', 'bananas');

//let babyfood = list.map(fruits => fruit + 'sauce');
//expect(babyfoods.toArray()).toEqual(['apples sauce', 'bananas sauce']);
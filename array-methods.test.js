import {
  map,
  filter,
  firstIndex,
  reduce
} from './array-methods.js';

describe('function simulates array method', () => {

  const names = [
    'PORSCHE',
    'CYTHIA',
    'RICH',
    'HOLLY',
    'ALEXIA',
    'JUNIOR',
    'JEWELL',
    'CORNELIUS',
    'ALLEGRA',
    'VALENE',
    'EMILY',
    'AYANA',
    'KATHI',
    'LOREN',
    'ARON',
    'KHALILAH',
    'BRITNI',
    'RENITA',
    'MARGURITE',
    'CHERRYL'
  ];

  const numbers = [
    3,
    6,
    9,
    12,
    15
  ];

  test('MAP takes the array of names and puts them in lower case', () => {
    const method = names.map(name => 
      name.toLowerCase()
    );

    function lowerCase(string) {
      return string.toLowerCase();
    }

    const fn = map(names, lowerCase);

    expect(fn).toEqual(method);
  });

  test('MAP takes the array of numbers and adds 3', () => {
    const method = numbers.map(num => 
      num + 3
    );

    function addThree(num) {
      return num + 3;
    }

    const fn = map(numbers, addThree);

    expect(fn).toEqual(method);
  });

  test('FILTER takes an array of names and displays c names', () => {
    const method = names.filter(name => name.startsWith('c'));

    function startsWithC(string) {
      return string.startsWith('c');
    }
    
    const fn = filter(names, startsWithC);

    expect(fn).toEqual(method);
  });

  test('FINDINDEX takes an array of names and returns the index of the first c name', () => {
    const method = names.findIndex(name => name.startsWith('c'));

    function startsWithC(string) {
      return string.startsWith('c');
    }

    const fn = firstIndex(names, startsWithC);

    expect(fn).toEqual(method);
  });
  
  test('FINDINDEX takes an array of numbers and finds the first number greater than 5, returning the index of that number', () => {
    const method = numbers.findIndex(num => num > 5);

    function greaterThanFive(num) {
      return num > 5;
    }

    const fn = firstIndex(numbers, greaterThanFive);

    expect(fn).toEqual(method);
  });

  test.skip('test notes here', () => {
    const method = names
      .reduce((total, { length }) => {
        const lengthKey = length.toString();
        if(!(lengthKey in total)) total[lengthKey] = 0;
        total[lengthKey] += 1;
        return total;
      }, {});



    const fn = reduce(arr, callback, [initialValue]);
    expect(fn).toEqual(method);
  });

});

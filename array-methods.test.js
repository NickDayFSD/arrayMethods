import {
  map,
  filter
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

  test.skip('FILTER takes an array of names and displays c names', () => {
    const method = names.filter(name => name.startsWith('c'));

    function startsWithC(string) {
      string.startsWith('c');
    }
    
    const fn = filter(names, startsWithC);

    expect(fn).toEqual(method);
  });

});

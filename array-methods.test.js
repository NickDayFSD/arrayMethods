import {
  map
} from './array-methods.js';

describe('homebrew array methods', () => {

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

  test('takes the array of names and puts them in lower case', () => {
    const input = names.map(name => 
      name.toLowerCase()
    );

    function lowerCase(string) {
      return string.toLowerCase();
    }

    const output = map(names, lowerCase);

    expect(output).toEqual(input);
  });
});

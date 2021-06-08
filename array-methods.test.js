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

  test('test notes here', () => {
    const input = names.map(name => 
      name.toLowerCase()
    );

    function lowerCase(string) {
      string.toLowerCase();
    }

    const output = map(names, lowerCase());

    expect(output).toEqual(input);
  });
});

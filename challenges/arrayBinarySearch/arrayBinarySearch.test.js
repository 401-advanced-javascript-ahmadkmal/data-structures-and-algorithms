'use strict';

const BinarySearch = require('./arrayBinarySearch.js');

describe('BinarySearch()', () => {
  it('can finde the index ', () => {
    let arr = [4,8,15,16,23,42];
    let val = 15;
    expect(-1).not.toEqual(BinarySearch(arr,val));
    expect(BinarySearch(arr,val)).toEqual(2);
  });
  it('can return -1 if not found', () => {
    let arr = [11,22,33,44,55,66,77];
    let val = 90;
    expect(BinarySearch(arr,val)).toEqual(-1);
  });
});

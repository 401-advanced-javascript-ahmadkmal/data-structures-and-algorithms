'use strict';

const InsertionSort = require('./sort');

describe('InsertionSort()', () => {
  it('can sort array', () => {
    let arr = [8,4,23,42,16,15];
    InsertionSort(arr);
    expect(arr).toEqual([4,8,15,16,23,42]);
  });
  it('can sort array', () => {
    let arr = [20,18,12,8,5,-2];
    InsertionSort(arr);
    expect(arr).toEqual([-2,5,8,12,18,20]);
  });
  it('can sort array', () => {
    let arr = [5,12,7,5,5,7];
    InsertionSort(arr);
    expect(arr).toEqual([5,5,5,7,7,12]);
  });
  it('can sort array', () => {
    let arr = [2,3,5,7,13,11];
    InsertionSort(arr);
    expect(arr).toEqual([2,3,5,7,11,13]);
  });
});

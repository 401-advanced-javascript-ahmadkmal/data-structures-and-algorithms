'use strict';

const insertShiftArray = require('./array-shift.js');

describe('insertShiftArray()', () => {
  it('can insert odd array', () => {
    let arr = [4,8,15,23,42];
    let val = 16;
    expect(arr).not.toEqual(insertShiftArray(arr,val));
    expect(insertShiftArray(arr,val)).toEqual([4,8,15,16,23,42]);
  });
  it('can insert evern with string ', () => {
    let arr = ['thank','you','alot','for every thing'];
    let val = 'mai';
    expect(arr).not.toEqual(insertShiftArray(arr,val));
    expect(insertShiftArray(arr,val)).toEqual(["thank","you","mai","alot","for every thing"]);
  });
});

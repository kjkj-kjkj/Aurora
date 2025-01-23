const processfn = require ('../src/process');

test('errors if no data', () => { 
   // expect(processfn(null)).toThrow('No data');
    expect(() => processfn()).toThrow('No data');
});
const processfn = require ('../src/process');

test('errors if no data', () => { 
    expect(processfn(null)).toThrow('')
});
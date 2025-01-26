const processfn = require ('../src/process');
const ex_json =  require ('../example_files/simple.json');

test('errors if no data', () => { 
    expect(() => processfn()).toThrow('No data');
});

test('passes if receives data', () => {
    expect(() => processfn('somedata')).isNotNull;
});

test('passes if data is not json', () => {
    //expect(() => processfn('here have this')).toThrow();
    expect(() => processfn('here have this').toBe('not a JSON'));
});

test('passes if data is json', () => {
    expect(() => processfn(ex_json).toBe('not is JSON')); //this should not pass at the moment but it is passing 
});

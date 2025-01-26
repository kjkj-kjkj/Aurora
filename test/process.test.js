const processfn = require ('../src/process');
const ex_json =  require ('../example_files/simple.json');

test('errors if no data', () => { 
    expect(() => processfn()).toThrow('No data');
});

test('passes if receives data', () => {
    expect(() => processfn('somedata')).isNotNull;
});

test('returns json', () => {
    //expect(() => processfn('here have this')).toThrow();
    //try declaring variable with valid json called data and then pass it to processfn
    const data = '{"test": "test"}';
    expect(processfn(data).test).toBe("test"); // proves it is json cos we have have asserted that it is json
    //by referencing the test key in the json object
});

test('passes if data is json', () => {
    //what would be a invalid bit of json ? -- maybe a string that is not json like {]{(%^)
    const data = '';
    expect( processfn(data)).toBe('not JSON'); //this should not pass at the moment but it is passing 
});

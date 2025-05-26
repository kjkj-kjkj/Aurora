const DataHandler = require ('../src/DataHandler.js');
const ex_json =  require ('../example_files/simple.json');


test('errors if no data', () => { 
   // expect(() => processfn()).toThrow('No data');
   const DataHandlercalled = new DataHandler();
   expect(() => DataHandlercalled.processfn()).toThrow('No data');
});

test('passes if receives data', () => {
    //expect(() => processfn('somedata')).isNotNull;
    const DataHandlercalled = new DataHandler('somedata'); //or DataHandler();
    expect(() => DataHandlercalled.processfn('somedata')).isNotNull;
});

test('returns json', () => {
    //expect(() => processfn('here have this')).toThrow();
    //try declaring variable with valid json called data and then pass it to processfn
    const data = '{"test": "test"}'; 
    const DataHandler2 = new DataHandler(data); // this is an example of hoisting
    DataHandler2.processfn(data)   // as the thing is declared below but referenced above - interpreted by js
    expect(DataHandler2.data.test).toBe("test"); // proves it is json cos we have have asserted that it is json
    //by referencing the test key in the json object
});

test('passes if data is not json', () => {
    //what would be a invalid bit of json ? -- maybe a string that is not json like {]{(%^)
    const data = '@,jkkg&^';
    const DataHandlercalled = new DataHandler(data); 
    expect(DataHandlercalled.processfn(data)).toBe('not JSON');  //can you find whats returned in less wordy way?
    //expect( processfn(data)).toBe('not JSON'); //this should not pass at the moment but it is passing 
});                                            //because the .json file is a js object NOT a json string, so it is not treated as json


test('passes when handed a json file', () => {
    const data = JSON.stringify(ex_json);     //turns the json from a javascript object to a json string - so we are passing the processfn a valid json string
    //expect(processfn(data)).toEqual(ex_json); //that can then be used in the function 
    const DataHandlercalled = new DataHandler(data); //why does it have to be data, why does it fail if just () or another word?
    DataHandlercalled.processfn(data);
    expect(DataHandlercalled.data).toEqual(ex_json);

});

test('logs the error', () =>{
    const data = '@,jkkg&^';
    const spy = jest.spyOn(console, 'log'); //console is the object, . ,log is the method 
    const DataHandlercalled = new DataHandler(data); //why does it have to be data, why does it fail if just () or another word?
    DataHandlercalled.processfn(data);
    //const result = processfn(data);
    expect(spy).toHaveBeenCalled();
})
// so when writing a test for the aurora api, will have to expect something like this     const data = '{"test": "test"}'; 
// and write tests around a variable that you know will be there e.g. status colour 

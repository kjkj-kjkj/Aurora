const sum = require('./sum');

<<<<<<< Updated upstream
test('adds 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3);
=======
test('fetch returns data', () => {
    return fetch('https://jsonplaceholder.typicode.com/posts/1').then(data => {
        expect(data).isNotNull; //toEqual({"tets": "test"}); 
    });
});

//swap in aurora api and understand what it wants e.g. do we always want fetch or post or etc. 
//start to think about what the api is going to return and write some tests around that 
//using a mocking library 
//axios api - read documentation to see 
//https://jsonplaceholder.typicode.com/posts/1
// http://aurorawatch-api.lancs.ac.uk/0.2/aurorawatch-api.dtd

test('fetch returns status', () => {   //change status into response so when the promise gets back we get everything
    return fetch('http://aurorawatch-api.lancs.ac.uk/0.2/aurorawatch-api').then(Response => {
      console.log(Response);
      expect(Response.status).toEqual(200);
      expect(Response.data).isNotNull;
    });
});

test('fetch returns no data', () => {  
    return fetch('https://documentation.history.mot.api.gov.uk/testst').then(Response => {
      expect(Response.status).toEqual(404);
    });
>>>>>>> Stashed changes
});
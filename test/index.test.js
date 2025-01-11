const fetch = require('../src/index');

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
// activity status_id= "colour" this is what i want

test('fetch returns status', () => {   //change status into response so when the promise gets back we get everything
    return fetch('http://aurorawatch-api.lancs.ac.uk/0.2/aurorawatch-api.dtd').then(Response => {
      //console.log(Response);
      expect(Response.status).toEqual(200);
      expect(Response.data).isNotNull;
    });
});

test('fetch returns no data', () => {  
    return fetch('https://documentation.history.mot.api.gov.uk/testst').catch(RejectionError => {    //because it doesn't fetch anything - nothing to fetch
      expect(RejectionError.status).toEqual(404); //so can't use then as it never gets data for then, instead catch 
    });
    
}); //it fails eventhough it sends a 404 - why?
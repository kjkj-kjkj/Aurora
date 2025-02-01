//task - test driven development approach - when it gets to right data, extract data like status
//serach on npm to find a program that understands xml - xml2json
// json.status to give status 

//finish off test to finish current test so it returns data
// test to make sure u get json
// use library read xml from process fn

const fetch = require('../src/fetch');
var convert = require('xml-js'); //not sure where i should put this 
const processfn = require ('../src/process');


//dummy test to make sure it works
 test('dummy test', () => {
   expect(1).toEqual(1);
});

test('using xml to json', () => {
  return fetch('http://aurorawatch-api.lancs.ac.uk/0.2/status/all-site-status.xml').then(Response =>{
    expect(Response.status).toEqual(200);
    var resultingjson = convert.xml2json(Response.data, {compact: true, spaces:'\t'});
    console.log(resultingjson);
    expect(processfn(resultingjson)).not.toBe('not JSON');
  })
});


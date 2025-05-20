//task - test driven development approach - when it gets to right data, extract data like status
//serach on npm to find a program that understands xml - xml2json
// json.status to give status 

//finish off test to finish current test so it returns data
// test to make sure u get json
// use library read xml from process fn

const axios = require ('axios');
const fetch = require('../src/fetch');
var convert = require('xml-js'); //not sure where i should put this 
const processfn = require ('../src/process');
jest.mock('axios');
const dataNoInternet = '<?xml ?><current_status api_version="0.2.5"><updated><datetime>2025-05-20T19:36:32+0000</datetime></updated><site_status project_id="project:SAMNET" site_id="site:SAMNET:CRK2" site_url="http://aurorawatch-api.lancs.ac.uk/0.2.5/project/samnet/crk2.xml" status_id="green"/><site_status alerting="true" project_id="project:AWN" site_id="site:AWN:SUM" site_url="http://aurorawatch-api.lancs.ac.uk/0.2.5/project/awn/sum.xml" status_id="green"/></current_status> ';


//dummy test to make sure it works
 test('dummy test', () => {
   expect(1).toEqual(1);
});

test('using xml to json', () => {
  const resp = {status: 200, data:'<?xml ?><current_status api_version="0.2.5"><updated><datetime>2025-05-20T19:36:32+0000</datetime></updated><site_status project_id="project:SAMNET" site_id="site:SAMNET:CRK2" site_url="http://aurorawatch-api.lancs.ac.uk/0.2.5/project/samnet/crk2.xml" status_id="green"/><site_status alerting="true" project_id="project:AWN" site_id="site:AWN:SUM" site_url="http://aurorawatch-api.lancs.ac.uk/0.2.5/project/awn/sum.xml" status_id="green"/></current_status> '}; //data: '<?xml ?><current_status>test</current_status>'};
  axios.get.mockResolvedValue(resp);
  return fetch(resp).then(Response =>{
    expect(Response.status).toEqual(200);
    //console.log(Response);
    var resultingjson = convert.xml2json(Response.data, {compact: true, spaces:' '});
    console.log(resultingjson);
    //expect(processfn(resultingjson)).not.toBe('not JSON');

    // make this another test - sites and status - interpret the data
    var resultingstatus = processfn(resultingjson);
    //.current_status.site_status[0]._attributes.status_id; //how to get status_id? as .status_id --> undefined?
    console.log(resultingstatus);
  })

 /*
  return fetch('http://aurorawatch-api.lancs.ac.uk/0.2/status/all-site-status.xml').then(Response =>{
    expect(Response.status).toEqual(200);
    var resultingjson = convert.xml2json(Response.data, {compact: true, spaces:' '});
    console.log(resultingjson);
    //expect(processfn(resultingjson)).not.toBe('not JSON');

    // make this another test - sites and status - interpret the data
    var resultingstatus = processfn(resultingjson);
    //.current_status.site_status[0]._attributes.status_id; //how to get status_id? as .status_id --> undefined?
    console.log(resultingstatus);
  })
    */
});

// write some test code to prove what i get out is what i want - testing post processing if get red stats, green staus what jappens
// then app code to what do if get red status or green status
// and then the application code to send an email 

// next test - this is processed answer from api want it to filter it to do xyz 
// next test - send the email 
// each test should have one responsibilty 

// {} indicates its an object 
// so have an object that holds an object 

// for each site id, if site id = whatever, send status id
// defensively program just in case you don't get what is expected 
// validate santise filter 
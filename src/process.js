function processfn(data){
    if (data == null) {
        // throw error
        throw new Error('No data');
    }
    else {
        try{
            return JSON.parse(data);
        }
        catch(err){
            console.log('not JSON');
            return 'not JSON';
        }
    }
}
module.exports = processfn; 
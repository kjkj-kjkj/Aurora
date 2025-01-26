function processfn(data){
    if (data == null) {
        // throw error
        throw new Error('No data');
    }
    else {
        try{
            JSON.parse(data);
            return 'is JSON';
        }
        catch(err){
            return 'not a JSON'
        }
    }
}
module.exports = processfn; 
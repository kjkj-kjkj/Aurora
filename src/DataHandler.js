class DataHandler {
  constructor(data) {
    this.data = data;
  }

    processfn() {
        if (this.data == null) {
        // throw error
        throw new Error('No data');
        
    }
    else {
        try{
            this.data = JSON.parse(this.data);
        }
        catch(err){
            console.log('not JSON');
            return 'not JSON';
        }
    }
    }

   filter() {
         if (!this.data || typeof this.data !== 'object') {
            throw new Error('Data is not parsed or not an object');
        }
        // Return the 'sites' property if it exists, otherwise return an empty array
        return this.data.sites || [];
   
    }

}
module.exports = DataHandler;
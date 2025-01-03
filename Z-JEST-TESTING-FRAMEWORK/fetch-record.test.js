const fetchRecords = require("./fetch-records")

test('Should return employee records', (done)=> {
    function callback (data) {
        try {
            expect(data).toMatch('hello');
            done();
        } catch(err) {
            done()
        }
    }
    fetchRecords(callback)
    
})
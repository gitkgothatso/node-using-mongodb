const fs = require('fs');
const expect = require('expect.js');

describe("Mongo tests @mongo", function () {
    it("Mongoose promise", function (done) {
        try {
            expect(fs.readFileSync('index.js').toString())
            .to.contain("mongoose.Promise = global.Promise;")
            done();
        }
        catch(error) {
            done(new Error("No mongo promise in your code"));
        }
    });

    it("Mongoose connected", function (done) {
        try {
            expect(fs.readFileSync('index.js').toString())
            .to.contain("mongoose.connect('mongodb+srv://adminuser:mniks@MDB90@cluster0.1hs7w.mongodb.net/productsdb?retryWrites=true&w=majority'")
            done();   
        } catch (error) {
            done(new Error("No connection to Mongo detected"));
        }
    });
});



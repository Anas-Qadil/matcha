const mongoose = require("mongoose");
const URI = process.env.URI;

class Database {
    constructor() {
        this.connect();
    }

    connect() {
        mongoose.connect(URI)
            .then(() => {
                console.log("connected Successfuly");
            })
            .catch(err => {
                console.log(err.message);
            });
    }
}

module.exports = new Database();
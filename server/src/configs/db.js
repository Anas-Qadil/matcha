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
                process.exit(1);
            });
    }
}

module.exports = new Database();
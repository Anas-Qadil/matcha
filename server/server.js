const app = require("./app");
const dotenv = require("dotenv").config();
const connection = require("./src/configs/db");

const PORT  = process.env.PORT || 8000; 

app.listen(PORT, (err) => {
    if (err)
        console.log(err);
    else
        console.log(`server is up and running on Port ${PORT}`);
});

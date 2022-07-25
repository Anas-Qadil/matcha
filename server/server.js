const app = require("./app");
const dotenv = require("dotenv").config();
const connection = require("./src/configs/db");

const PORT  = process.env.PORT || 8000;
const host = "10.13.3.5";


app.listen(PORT, host, (err) => {
    if (err)
        console.log(err);
    else
        console.log(`Host ${host } - Port ${PORT}`);
});

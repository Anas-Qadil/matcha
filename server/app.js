const express = require("express");
const app = express();
const usersRouter = require("./src/routes/userRoute");
const registerRouter = require("./src/routes/registerRoute")
const loginRoute = require("./src/routes/loginRoute");
const errorHandler = require("./src/middlewares/errorMiddleware");
const mailRoute = require("./src/routes/mailRoute");
const emailConformationRoute = require("./src/routes/emailConformationRoute");
const cors = require("cors");

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
    res.send("hello");
})

app.use("/api/users", usersRouter);
app.use("/api/login", loginRoute);
app.use("/api/register", registerRouter);
app.use("/api/mail", mailRoute);
app.use("/api/confirmEmail", emailConformationRoute);
app.use(errorHandler);

module.exports = app; 
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { mongoURI } = require("./config/keys");
const passport = require("passport");

const users = require("./routes/api/users");
const app = express();

//bodyparser middleware:used to parse incoming request bodies in a middleware
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

//DB config
const db = require("./config/keys").mongoURI;

//Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB successfuly connected"))
  .catch((err) => console.log(err));

//Passport middelware
app.use(passport.initialize());

//Passport config
require("./config/passport")(passport);

//Routes
app.use("/api/users", users);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

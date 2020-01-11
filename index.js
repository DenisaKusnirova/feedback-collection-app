const express = require("express");
const authRoutes = require("./routes/authRoutes");
const billingRoutes = require("./routes/billingRoutes");
const surveyRoutes = require("./routes/surveyRoutes");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
require("./models/User");
require("./models/Survey");
require("./services/passport");

// Connect mongoose to mongodb
mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

const app = express();

// this parser parse the body of an incoming request and assign it to req.body incoming req object
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

// Tell passport to use cookies to manage authentication:
app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);
billingRoutes(app);
surveyRoutes(app);

// if any get request comes in that requires anything that's not set up in this file, try to look inside client/build
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  // catch-all case, all previous possibilities failed, return index.html file
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);

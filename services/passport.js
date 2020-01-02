const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");
const mongoose = require("mongoose");

// model with 1arg - trying to fetch something out of mongoose, 2args - load something into it
const User = mongoose.model("users");

// passport.serializeUser() is setting id as cookie in user's browser
// thanks to user.id, we'll be able to identify an user in a follow-up request
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      // mongoose query return a promise:
      User.findOne({ googleId: profile.id }).then(existingUser => {
        if (existingUser) {
          // done is a callback, we need to call after we're done with some operation, null arg - no error - all went fine (or an error object can be passed here)
          done(null, existingUser);
        } else {
          new User({ googleId: profile.id })
            .save()
            .then(user => done(null, user));
        }
      });
    }
  )
);

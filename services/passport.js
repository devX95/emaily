const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');

const keys = require('../config/keys');

const { User } = require('../models/user');

passport.serializeUser((user, done) => {
    done(null, user._id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => done(null, user))
});

passport.use(
  new GoogleStrategy({
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
  }, (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id}).then(exisitingUser => {
        if (exisitingUser){
            done(null, exisitingUser);
        } else {
            var user = new User({ googleId: profile.id });
            user
            .save()
            .then(user => done(null, user))
            .catch(e => {
                done(e, null);
            })
        }
      }).catch(e => {
            done(e, null);
      });
      
  })
);
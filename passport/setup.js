const bcrypt = require("bcryptjs");
const User = require("../models/userModel");
const StatsModel = require("../models/statsModel");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
});

passport.use(
    new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
        // Check for user
        User.findOne({ email: email })
            .then(user => {
                if (!user) {
                    // Create a new user
                    const newUser = new User ({ email, password });
                    StatsModel.create({user: email});
                    
                    // Hashes the password and the saves it to db
                    bcrypt.genSalt(10, (err, salt) => {
                        bcrypt.hash(newUser.password, salt, (err, hash) => {
                            if (err) throw err;
                            newUser.password = hash;
                            newUser
                                .save()
                                .then(user => {
                                    return done(null, user);
                                })
                                .catch(err => {
                                    return done(null, false, { message: err });
                                });
                        });
                    });
                } else {
                    //Match Password of user
                    bcrypt.compare(password, user.password, (err, isMatch) => {
                        if (err) throw err;

                        if (isMatch) {
                            return done(null, user);
                        } else {
                            return done(null, false, { message: "Wrong password" });
                        }
                    });
                }
            })
            .catch(err => {
                return done(null, false, { message: err })
            })
    })
);

module.exports = passport;
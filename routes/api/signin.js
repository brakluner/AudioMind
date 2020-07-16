const User = require('../../models/User');
const UserSession = require('../../models/UserSession');

module.exports = (app) => {

app.post('/api/account/signup', (req, res, next) => {
    const { body } = req;
    const {
        firstName,
        lastName,
        password
    } = body;
    let {
        email
    } = body;

    if (!firstName) {
        return res.send({
            success: false,
            message: 'Error: first name cannot be blank.'
        });
    }
    if (!lastName) {
        return res.send({
            success: false,
            message: 'Error: last name cannot be left blank'
        })
    }
    if (!email) {
        return res.send({
            success: false,
            message: 'Error: email cannot be left blank'
        });
    }
    if (!password) {
        return res.send({
            success: false,
            message: 'Error: password cannot be left blank'
        });
    }
    
    email = email.toLowerCase();

    // Steps:
    // 1. Verify emmail doesnt exist
    // 2.save
    User.find({
        email: email
    }, (err, previousUsers) => {
            if (err) {
                return res.send({
                    success: false,
                    message: 'Error: Server error'
                });
            } else if (previousUsers.length > 0) {
                return res.send({
                    success: false,
                    message: 'Error: Account already exists'
                });
            }

            // save new user
            const newUser = new User();

            newUser.email = email;
            newUser.firstName = firstName;
            newUser.lastName = lastName;
            newUser.password = newUser.generateHash(password);
            newUser.save((err, user) => {
                if (err) {
                    return res.send({
                        success: false,
                        message: 'Error: Server error'
                    });
                }
                return res.send({
                    success: true,
                    message: 'Signed up'
                });
            });
    });
});
app.post('/api/account/signin', (req, res, next) => {
    const { body } = req;
    const {
        password
    } = body;
    let {
        email
    } = body;

    if (!email) {
        return res.send({
            success: false,
            message: 'Error: email cannot be left blank'
        });
    }
    if (!password) {
        return res.send({
            success: false,
            message: 'Error: password cannot be left blank'
        });
    }
    email = email.toLowerCase();

    User.find({
        email: email
    }, (err, users) => {
        if (err) {
            return res.send({
                success: false,
                message: 'Error: Server error'
            });
        }
        if (users.length != 1) {
            return res.send({
                success: false,
                message: 'Error: Invalid'
            });
        }

        const user = users[0];
        if (!user.validPassword(password)) {
            return res.send({
                success: false,
                message: 'Error: Invalid Password'
            })
        }

            // Otherwise correct user

        const userSession = new UserSession();
        userSession.userId = user._id;
        userSession.save((err, doc) => {
            if (err) {
                return res.send({
                    success: false,
                    message: 'Error: Server error'
                });
            }

            return res.send({
                success: true,
                message: 'Valid sign in',
                token: doc._id
            })
        })
    })
});
app.get('/api/account/verify', (req, res, next) => {
    
    // get token
    const { query } = req;
    const { token } = query;
    // token=test
    console.log(query)
    // verify token is one of kind and not deleted
    
    UserSession.find({
        _id: token,
        isDeleted: false
    }, (err, sessions) => {
        console.log("here")
            if (err) {
            return res.send({
                success: false,
                message: 'Error: Server error'
            });
    }

    if (sessions.length != 1) {
        return res.send({
            success: false,
            message: 'Error: Invalid'
        });
    } else {
        return res.send({
            success: true,
            message: 'good'
        })
    }
})
});
app.get('/api/account/logout', (req, res, next) => {
    // get token
    const { query } = req;
    const { token } = query;
    // token=test

    // verify token is one of kind and not deleted

    UserSession.findOneAndUpdate({
        _id: token,
        isDeleted: false
    }, {
        $set:{
            isDeleted:true
        }
    }, null, (err, sessions) => {
            if (err) {
            return res.send({
                success: false,
                message: 'Error: Server error'
            });
        }

        return res.send({
            success: true,
            message: 'good'
        });
    });
});  
}
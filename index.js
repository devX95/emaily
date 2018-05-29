const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');

const keys = require('./config/keys');
require('./services/passport');
// mongodb://localhost:27017/FullStack
mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey] 
    })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);

if(process.env.NODE_ENV === 'production'){
    // EXPRESS SHOULD SEVRE PRODUCTION ASSETS
    app.use(express.static('client/build'));
    // EXPRESS WILL SERVE UP INDEX.HTML IF UNRECOGNIZED URL
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is up on port ${PORT}`));
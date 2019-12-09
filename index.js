const express = require('express');
const mongoose = require('mongoose');
const port =  process.env.PORT || 3000;
const app = express();
const router = require('./routes.js');
const viewRouter = require('./views/routes.js');
const cookieParser = require('cookie-parser');
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

app.set('view engine', 'ejs')
app.use(cookieParser())
app.use(express.json());
app.use(express.static('public'))
app.use('/api/v1', router)
app.use('/', viewRouter)

// app.get('/login', function(req, res) {
//     res.render('article')
// })


mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(data => {
        app.listen(port, () => console.log(`Listening on port ${port}`))
    })
    .catch(err => {
        console.log(`Failed to connect to Database.`)
    }) 
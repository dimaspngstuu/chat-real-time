const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const databaseConnect = require('./config/database');
const dotenv = require('dotenv');
const authRoute = require('./routes/authRoute');


dotenv.config({
    path: 'backend/config/config.env'
});

app.use('/api/messenger/',authRoute);



app.get('/',(req,res) => {
    res.json({
        message: "Hallo Word"
    })
} )

databaseConnect();


app.listen(5000, () => {
    console.log(`server running in PORT 5000`);
})


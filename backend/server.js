const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;



app.get('/',(req,res) => {
    res.json({
        message: "Hallo Word"
    })
} )


app.listen(PORT, () => {
    console.log(`server running in PORT ${PORT}`);
})


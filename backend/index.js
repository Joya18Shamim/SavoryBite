
const express = require('express');
const mongoDB = require('./db');
const app = express();
const PORT = process.env.PORT || 5000;

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "ORigin, X-Requested-With, Content-Type, Accept"
    );
    next();
})

// Initialize MongoDB connection
//mongoDB();

app.use(express.json());
app.use('/api',require("./Routes/CreateUser"));
app.use('/api',require("./Routes/DisplayData"));
app.use('/api',require("./Routes/OrderData"));


app.get('/',(req,res)=>{
    res.send('Hello')
})


app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});


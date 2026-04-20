const express = require("express");
const app = express()

app.get('/',(req,res)=> {
    res.send("Hello world from devops pipeline ");
});

app.listen(7000,()=>{
    console.log("server is running in the port 7000");
});
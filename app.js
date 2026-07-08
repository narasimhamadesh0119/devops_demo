const express = require("express");
const app = express()

app.get('/',(req,res)=> {
    res.send("jenkins demo");
});

app.listen(7000,()=>{
    console.log("server is running in the port 7000");
});

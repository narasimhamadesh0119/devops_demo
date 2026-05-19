const express = require("express");
const app = express()

app.get('/',(req,res)=> {
    res.send("Hello world from devops pipeline,worked successfully , testing no 2 ");
});

app.listen(7000,()=>{
    console.log("server is running in the port 7000");
});

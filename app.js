const express = require("express");
const app = express()

app.get('/',(req,res)=> {
    res.send("Docker hub image updated to 31");
});

app.listen(7000,()=>{
    console.log("server is running in the port 7000");
});

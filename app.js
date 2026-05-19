const express = require("express");
const app = express()

app.get('/',(req,res)=> {
    res.send("Hello world from devops pipeline, checking for kubernetes Clusters with correct config final final test");
});

app.listen(7000,()=>{
    console.log("server is running in the port 7000");
});

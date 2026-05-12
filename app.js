const express = require("express");
const app = express()

app.get('/',(req,res)=> {
    res.send("Hello world from devops pipeline , Simba here Vanakam da mapla NMIT la irundhu  ");
});

app.listen(7000,()=>{
    console.log("server is running in the port 7000");
});

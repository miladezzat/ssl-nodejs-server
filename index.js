const express = require('express') 
const https = require("https") // https module to create a ssl enabled server
const path = require("path") // path module 
const fs = require("fs") //file system module

const app =express()

app.use("/",(req,res,next)=>{
    res.send("hello from ssl secured server!!")
})

const options ={
  key:fs.readFileSync(path.join(__dirname,'./certs/key.pem')),
  cert:fs.readFileSync(path.join(__dirname,'./certs/cert.pem')) 
}

const sslserver =https.createServer(options,app)

const port = 3000;

sslserver.listen(port,()=>{console.log(`Secure Server is listening on port ${port}`)});

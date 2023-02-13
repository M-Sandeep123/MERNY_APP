/**
 * This file is starting point of the application
 */

/**
 * 1 : create the server
 */

const express = require("express");
const serverConfig = require("./configs/server.config");



const app = express();

app.listen(serverConfig.PORT, ()=>{
    console.log("Server is started at PORT : ", serverConfig);
});
const config = require('./config/config.json');

const express = require('express');
const app = express();
var port = process.env.PORT || config.node_port;
app.listen(port);

app.get('/',(req, res) => {
    
})
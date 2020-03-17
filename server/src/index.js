const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
//app.use(express.static('uploads'));
const routerGlasses = require('./routes/products');

app.use(routerGlasses);

app.listen(4000,()=>{
    console.log(`listen 4000`)
});
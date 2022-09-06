require('dotenv').config();
const express = require('express');
const { startup } = require('./startup');
const path = require('path');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/publics', express.static(path.join(__dirname, './publics')));

startup(app);

app.listen(process.env.PORT, () => {
    console.log('port', process.env.PORT);
})
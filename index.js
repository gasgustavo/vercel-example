const { application } = require('express');
const express = require('express')
const frutose = require('./api/frutose')
const app = express();

const PORT = process.env.PORT || 5050

app.use('/api/frutose', frutose)
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`))
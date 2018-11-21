//server.js

import express from 'express';
const app= express()

app.use(express.json())

app.get('/',(req,res) =>{
    return res.status(200).send({'message': 'Yay! The Contact API works '})
})

app.listen(5000)
console.log('app running on port',5000);
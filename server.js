const express = require('express');
const app = express();


app.set('view engine','ejs');



app.listen(5000, ()=>{
    console.log('Server is running on port 5000')
})

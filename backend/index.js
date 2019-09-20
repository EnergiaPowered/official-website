const express = require('express')
const app = express();
app.use(express.json())

app.get('/' , (req ,res)=>{
    res.send('Hello From Backend')
})


const port =4000 || process.env.PORT
app.listen(port ,()=>console.log(`Listining to port ${port}`))
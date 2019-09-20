const mongoose =require('mongoose')

mongoose.connect('mongodb://localhost/helloworld')
    .then(()=>console.log('****connected to MongoDB****'))
    .catch(err=>console.log('failed to connect to mongoDB' , err))

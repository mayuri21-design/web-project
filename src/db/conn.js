const mongoose=require('mongoose');
mongoose.connect('mongodb://0.0.0.0:27017/olympics',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    retryWrites:true,
    w:"majority",
}).then(()=>console.log("connection successful")).catch((err)=>console.log("connection unsuccessful"));
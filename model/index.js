const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/Edureka",{useNewUrlParser:true,useUnifiedTopology:true},(error)=>{
    if(!error){
        console.log("Connected to mongodb");

    }
    else{
        console.log(error);
    }
});

    const course=require('./course.model');
   
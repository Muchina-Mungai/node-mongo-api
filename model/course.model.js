const mongoose=require('mongoose');

courseSchema=  mongoose.Schema({
    CourseName:{
        type:String,
        required:"required"
    },
    CourseId:{
        type:String
    },
    CourseDuration:{
        type:String
    },
    CourseFee:{
        type:String
    }
});
 const course=module.exports=mongoose.model("Course",courseSchema);


 

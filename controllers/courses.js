    const express=require('express');
    const mongoose=require('mongoose');
    
    const routes=express.Router();
    const courseModel= require('../model/course.model');
    routes.get('/list',(req,res)=>{
        // var mod=new courseModel;
        // mod.CourseName="EEE";
        // mod.CourseDuration="5";
        // mod.CourseId="271";
        // mod.CourseFee="6000000";
        // mod.save();
        courseModel.find((err,docs)=>{
            if(!err){
               console.log(docs);
		
                res.render("list",{data:docs});
                
            }
            else{
                res.send(err);
            }
        });
       
    });

    routes.get('/add',(req,res)=>{
        res.render("add-course",{});
    });
    routes.post('/add',(req,res)=>{
       
         var mod=new courseModel;
         mod.CourseName=req.body.courseName;
        mod.CourseDuration=req.body.courseDuration;
        mod.CourseId=req.body.courseId;
        mod.CourseFee=req.body.courseFee;
        mod.save((err,docs)=>{
            if(!err){
                console.log("Received form with body : \n"+docs);
                res.send("Success");
            }
            else{
                console.log("Error saving documents");
            }
        });

    });


    module.exports=routes;

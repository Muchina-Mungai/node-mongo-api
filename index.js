    const express=require('express');
    const bodyParser=require('body-parser');
    const connection=require('./model');
    const path=require('path');
    const expressHandlebars=require('express-handlebars');
    const app=express();
    const courseController=require('./controllers/courses');
    app.use(bodyParser.urlencoded({extended:true}));
   // app.use(bodyParser.json());

    app.set("views",path.join(__dirname,"/views/"));
    app.get('/',(req,res)=>{
        // res.send("Hello World");
        res.render("index",{});
    });

    app.use("/courses",courseController);

    app.engine("hbs",expressHandlebars({
        extname:"hbs",
        defaultLayout:"mainLayout",
        layoutsDir: __dirname+"/views/layouts",
       
    }));
    
    app.set("view engine","hbs");

    app.listen("3000",()=>{
        console.log("Server started");
    });
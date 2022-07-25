const express = require("express");

const bodyParser =require("body-parser");

const app =express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.sendFile(__dirname +"/index.html");
});

app.post("/",(req,res)=>{
    const num1 =Number(req.body.num1);
    const num2 = Number(req.body.num2);
    const result =num1+num2;
    res.send("The Sum is "+result);
});



app.get("/bmicalculator",(req,res)=>{
    res.sendFile(__dirname +"/bmiCalculator.html");
});

app.post("/bmicalculator",(req,res)=>{
    const Height =Number(req.body.Height);
    const Weight = Number(req.body.Weight);
    const result = Weight/(Height*Height);
    res.send("The BMI is "+result);
});

app.listen(3000,()=>{
    console.log("Done!");
});
const express=require('express');
const app=express();
const hbs=require('hbs');
const admin=require("./route/router");
const bodyparser=require('body-parser');
const mongoose=require('mongoose');
mongoose.set('strictQuery', true);
app.use(express.json());
app.use(bodyparser.urlencoded({extended:true}));
mongoose.connect("mongodb+srv://rahamath363:Rahamath4@cluster0.7vkdaqm.mongodb.net/Acc",()=>
{
    console.log("DB created");
})
app.set('view engine','hbs');
app.set('views','views');
app.use(admin);
app.listen(4000,()=>
{
    console.log("server cretaed");
})
const express=require('express');
const mongoose=require('mongoose');
const menSchema=new mongoose.Schema({
    ranking:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true,
        trim:true

    },
    dob:{
        type:String,
        required:true,
        trim:true

    },
    country:{
        type:String,
        required:true,
        trim:true

    },
    score:{
        type:Number,
        required:true,
        trim:true

    },
    event:{
        type:String,
        default:"100m"
    },


})

//create model
const MensRanking=new mongoose.model("MensRanking",menSchema);
module.exports=MensRanking;
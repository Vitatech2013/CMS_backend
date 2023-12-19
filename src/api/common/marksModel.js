import mongoose from "mongoose";

const marksSchema=new mongoose.Schema({
   hallticket:{
    type:String
   },
   studentname:{
    type:String
   },
   branch:{
    type:String
   },
   sem:{
    type:String
   },
   subject1:{
    type:String
   },
   subject1totalmarks:{
    type:Number
   },
   subject1marks:{
    type:Number
   },
   subject2:{
    type:String
   },
   subject2totalmarks:{
    type:Number
   },
   subject2marks:{
    type:Number
   },
   subject3:{
    type:String
   },
   subject3totalmarks:{
    type:Number
   },
   subject3marks:{
    type:Number
   },
   totalMarks:{
    type:Number
   },
   totalscoredmarks:{
    type:Number
   },
   percentage:{
    type:String
   },
   status:{
    type:String
   }
},{
    timestamps:true
})

const marksModel=mongoose.model('studentMarks',marksSchema)

export default marksModel
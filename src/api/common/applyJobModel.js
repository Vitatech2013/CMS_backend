import mongoose from "mongoose";

const applyJobSchema=new mongoose.Schema({
    name:{
        type: String,
    },
    hallticket:{
        type:String
    },
    dob: {
        type: String,
    },
    emailid: {
        type: String,
    },
    mobilenumber: {
        type: String,
    },
    branch:{
        type:String
    },
    sscpercentage: {
        type: String,
    },
    interpercentage: {
        type: String,
    },
    degreepercentage:{
        type:String
    },
    companyname:{
        type: String,
    },
    jobrole:{
        type:String
    },
    skills: {
        type: String,
    },
    address: {
        type: String,
    },
    resume: {
        type: String,
    },
    status: {
        type: String,
    },
    remarks: {
        type: String,
    },
    interview:{
        type:String
    }

},{
    timestamps:true
})

const applyJobModel=mongoose.model('jobs',applyJobSchema)

export default applyJobModel
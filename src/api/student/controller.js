import studentModel from "../common/studentModel";
import timetable from "../common/timetableModel";
import marksModel from "../common/marksModel";
import payingFeeModel from "../common/payingFeeModel";
import studentBookModel from "../common/studentBookModel";
import placementCmpanyModel from "../common/placementModel";
import applyJobModel from "../common/applyJobModel";

export const login=(req,res)=>{
    studentModel.findOne({"hallticket":req.query.hallticket,"mobileno":req.query.mobileno},(err,result)=>{
        if(err){
            res.send(result)
        }else{
            res.send(result)
        }
    })
}

export const viewTimeTable=(req,res)=>{
    timetable.find({"branch":req.query.branch},(err,result)=>{
        if(err){
            res.send(result)
        }else{
            res.send(result)
        }
    })
}

export const viewMarks=(req,res)=>{
    marksModel.find({"hallticket":req.query.hallticket},(err,result)=>{
        if(err){
            res.send(result)
        }else{
            res.send(result)
        }
    })
}

export const viewFee=(req,res)=>{
    payingFeeModel.find({"hallticket":req.query.hallticket},(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
}

export const viewbooks=(req,res)=>{
    studentBookModel.find({"hallticket":req.query.hallticket},(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
}

export const viewJobsList=(req,res)=>{
placementCmpanyModel.find({},(err,result)=>{
    if(err){
        res.send(err)
    }else{
        res.send(result)
    }
})
}
export const applyJob=(req,res)=>{
    applyJobModel.create(req.body,(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
}

export const viewJobStatus=(req,res)=>{
    applyJobModel.find({"hallticket":req.query.hallticket},(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }  
    })
}

export const viewProfile=(req,res)=>{
    studentModel.findOne({"hallticket":req.query.hallticket},(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
}

export const updateProfile=(req,res)=>{
    studentModel.findByIdAndUpdate(req.params.id,req.body,{new:true},(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
}
import superAdminModel from "./superadminModel";
import employeeModel from "../common/employeeModel";
import studentModel from "../common/studentModel";
import feeModel from "../common/feeModel";
import payingFeeModel from "../common/payingFeeModel";
import studentFeeModel from "../common/studentFeeModel";
import bookModel from "../common/bookModel";
import studentBookModel from "../common/studentBookModel";
import applyJobModel from "../common/applyJobModel";
import placementCmpanyModel from "../common/placementModel";

export const login=(req,res)=>{
    superAdminModel.findOne({"username":req.query.username,"password":req.query.password},(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
}



export const viewOfficer=(req,res)=>{
    employeeModel.find({},(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
}

export const totalStudents=(req,res)=>{
    studentModel.find({},(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        } 
    })
}

export const viewBranchStudentsList=(req,res)=>{
    studentModel.find({"branch":req.query.branch},(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
}

export const searchstudent=(req,res)=>{
    studentModel.find({"hallticket":req.query.hallticket},(err,result)=>{
        if(err){
            res.send(err)
          }else{
            res.send(result)
          }
    })
}


export const viewFaculty=(req,res)=>{
  employeeModel.find({"department":req.query.department},(err,result)=>{
    if(err){
        res.send(err)
    }else{
        res.send(result)
    }
  })
}

export const viewFees=(req,res)=>{
feeModel.find({},(err,result)=>{
    if(err){
        res.send(err)
      }else{
        res.send(result)
      }
})
}

export const studentfeeslist=(req,res)=>{
    payingFeeModel.find({},(err,result)=>{
        if(err){
            res.send(err)
          }else{
            res.send(result)
          }
    })
}

export const searchstudentfee=(req,res)=>{
    payingFeeModel.find({"hallticket":req.query.hallticket},(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
}

export const showStudentTotalFee=(req,res)=>{
    studentFeeModel.find({},(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
 }

 export const showParticularStudentTotalFee=(req,res)=>{
    studentFeeModel.find({"hallticket":req.query.hallticket},(err,result)=>{
        if(err){
            res.semd(err)
        }else{
            res.send(result)
        }
    })
 }

 export const searchStudentTotalFee=(req,res)=>{
    studentFeeModel.find({"hallticket":req.query.hallticket},(err,result)=>{
        if(err){
            res.semd(err)
        }else{
            res.send(result)
        }
    })
 } 

 export const clearStudentFee=(req,res)=>{
    studentFeeModel.findByIdAndUpdate(req.params.id,req.body,{new:true},(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
 }

 export const viewBooks=(req,res)=>{
    bookModel.find({},(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
 }

 export const viewStudentBooks=(req,res)=>{
    studentBookModel.find({},(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
 }

 export const studentApplyJobs=(req,res)=>{
    applyJobModel.find({},(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }  
    })
 }

 export const searchStudentJob=(req,res)=>{
    applyJobModel.find({"hallticket":req.query.hallticket},(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
 }

 export const showPlacementCompany=(req,res)=>{
    placementCmpanyModel.find({},(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
 }
import adminModel from "./adminModel";
import employeeModel from "../common/employeeModel";
import studentModel from "../common/studentModel";
import feeModel from "../common/feeModel";
import studentFeeModel from "../common/payingFeeModel"
import studetntTotalFee from "../common/studentFeeModel"
import bookModel from "../common/bookModel";
import studentBookModel from "../common/studentBookModel";
import placementCmpanyModel from "../common/placementModel";
import applyJobModel from "../common/applyJobModel";

export const login=(req,res)=>{
    adminModel.findOne({'username':req.query.username, "password":req.query.password},(err,result)=>{
       if(err){
        res.send(err)
        console.log(err)
       }else{
        res.send(result)
        console.log(result);
       }
    })
}

export const officerRegister=(req,res)=>{
    employeeModel.create(req.body,(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
}

export const viewOfficer=(req,res)=>{
    employeeModel.find({"department":req.query.department},(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
}

export const updateOfficer=(req,res)=>{
    employeeModel.findByIdAndUpdate(req.params.id,req.body,{new:true},(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
}

export const deleteOfficer=(req,res)=>{
    employeeModel.findByIdAndDelete(req.params.id,(err,result)=>{
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
    studentFeeModel.find({},(err,result)=>{
        if(err){
            res.send(err)
          }else{
            res.send(result)
          }
    })
}

export const searchstudentfee=(req,res)=>{
    studentFeeModel.find({"hallticket":req.query.hallticket},(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
}

 export const showStudentTotalFee=(req,res)=>{
    studetntTotalFee.find({},(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
 }

 export const showParticularStudentTotalFee=(req,res)=>{
    studetntTotalFee.find({"hallticket":req.query.hallticket},(err,result)=>{
        if(err){
            res.semd(err)
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

 export const viewPlacementCompany=(req,res)=>{
    placementCmpanyModel.find({},(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
 }

 export const studentAppliedJobs=(req,res)=>{
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
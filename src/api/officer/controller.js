import studentModel from "../common/studentModel";
import feeModel from "../common/feeModel";
import employeeModel from "../common/employeeModel";
import payingFeeModel from "../common/payingFeeModel";
import studentFeeModel from "../common/studentFeeModel";
import placementCmpanyModel from "../common/placementModel";
import applyJobModel from "../common/applyJobModel";

export const officerLogin=(req,res)=>{
    employeeModel.findOne({"empid":req.query.empid,"mobileno":req.query.mobileno,"typeofemployee":req.query.typeofemployee},(err,result)=>{
      res.send(result)
      console.log(result);
    })
}
export const studentRegistration=(req,res)=>{
studentModel.create(req.body,(err,result)=>{
    if(err){
        res.send(err)
    }else{
        res.send(result)
    }
})
}

export const updateStudent=(req,res)=>{
    studentModel.findByIdAndUpdate(req.params.id,req.body,{new:true},(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
}

export const viewAllStudents=(req,res)=>{
    studentModel.find({},(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
}

export const deleteStudent=(req,res)=>{
    studentModel.findByIdAndDelete(req.params.id,(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
}

export const viewStudent=(req,res)=>{
    studentModel.find({"hallticket":req.query.hallticket},(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
}

export const addFee=(req,res)=>{
    feeModel.create(req.body,(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
}

export const updateFee=(req,res)=>{
    feeModel.findByIdAndUpdate(req.params.id,req.body,{new:true},(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
}

export const viewFee=(req,res)=>{
    feeModel.find({},(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
}

export const deleteFee=(req,res)=>{
    feeModel.findByIdAndDelete(req.params.id,(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
}

export const addEmployee=(req,res)=>{
    employeeModel.create(req.body,(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
}

export const viewEmployee=(req,res)=>{
    employeeModel.find({},(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
}

export const updateEmployee=(req,res)=>{
    employeeModel.findByIdAndUpdate(req.params.id,req.body,{new:true},(err,result)=>{
        if(err){
            res.send(err)
          }else{
            res.send(result)
          }
    })
}

export const deleteEmployee=(req,res)=>{
    employeeModel.findByIdAndDelete(req.params.id,(err,result)=>{
        if(err){
            res.send(err)
          }else{
            res.send(result)
          }
    })
}

export const searchEmployee=(req,res)=>{
    employeeModel.find({"empid":req.query.empid},(err,result)=>{
        if(err){
            res.send(err)
          }else{
            res.send(result)
          }
    })
}

export const typeofEmployess=(req,res)=>{
    employeeModel.find({"typeofemployee":req.query.typeofemployee},(err,result)=>{
        if(err){
            res.send(err)
          }else{
            res.send(result)
          }
    }) 
}

export const addStudentFees=(req,res)=>{
    payingFeeModel.create(req.body,(err,result)=>{
        if(err){
            res.send(err)
          }else{
            res.send(result)
          } 
    })
}

export const viewstudentFees=(req,res)=>{
    payingFeeModel.find({},(err,result)=>{
        if(err){
            res.send(err)
          }else{
            res.send(result)
          }
    })
}

export const updateStudentFees=(req,res)=>{
    payingFeeModel.findByIdAndUpdate(req.params.id,req.body,{new:true},(err,result)=>{
        if(err){
            res.send(err)
          }else{
            res.send(result)
          }
    })
}

export const deleteStudentFee=(req,res)=>{
    payingFeeModel.findByIdAndRemove(req.params.id,(err,result)=>{
        if(err){
            res.send(err)
          }else{
            res.send(result)
          }
    })
}

export const viewParticularStudentFee=(req,res)=>{
    payingFeeModel.find({"hallticket":req.query.hallticket},(err,result)=>{
        if(err){
            res.send(err)
          }else{
            res.send(result)
          }
    })
}

export const addstudentTotalFee=(req,res)=>{
    studentFeeModel.create(req.body,(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
}

export const viewStudentTotalFee=(req,res)=>{
    studentFeeModel.find({},(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
}

export const updateStudentTotalFee=(req,res)=>{
    studentFeeModel.findByIdAndUpdate(req.params.id,req.body,{new:true},(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }  
    })
}

export const deleteStudentTotalFee=(req,res)=>{
    studentFeeModel.findByIdAndDelete(req.params.id,(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
}


export const viewParticularStudentTotalFee=(req,res)=>{
studentFeeModel.findOne({"hallticket":req.query.hallticket},(err,result)=>{
        if(err){
            res.send(err)
          }else{
            res.send(result)
          }
    })
}


export const viewprofile=(req,res)=>{
    employeeModel.findOne({"empid":req.query.empid},(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
}

export const updateProfile=(req,res)=>{
    employeeModel.findByIdAndUpdate(req.params.id,req.body,{new:true},(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
}

export const addPlacementCpmpany=(req,res)=>{
    placementCmpanyModel.create(req.body,(err,result)=>{
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

export const studentApplyJobs=(req,res)=>{
    applyJobModel.find({},(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
}

export const searchStudentJobs=(req,res)=>{
    applyJobModel.find({"hallticket":req.query.hallticket},(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
}

export const branchwiseStudents=(req,res)=>{
    studentModel.find({"branch":req.query.branch},(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
}

export const getFeeByYear=(req,res)=>{
    feeModel.findOne({"year":req.query.year},(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
}

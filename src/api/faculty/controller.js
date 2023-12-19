import employeeModel from "../common/employeeModel";
import studentModel from "../common/studentModel";
import timetableModel from "../common/timetableModel";
import marksModel from "../common/marksModel"

export const login=(req,res)=>{
    employeeModel.findOne({"empid":req.query.empid,"mobileno":req.query.mobileno,"typeofemployee":req.query.typeofemployee},(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
    }
})
}


export const viewStudentsList=(req,res)=>{
    studentModel.find({},(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
}

export const searchStudent=(req,res)=>{
    studentModel.findOne({"hallticket":req.query.hallticket},(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
}

export const addTimetable=(req,res)=>{
    timetableModel.create(req.body,(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
}

export const viewTimetable=(req,res)=>{
    timetableModel.find({"branch":req.query.branch},(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
}

export const updateTimeTable=(req,res)=>{
    timetableModel.findByIdAndUpdate(req.params.id,req.body,{new:true},(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
}
export const deleteTimeTable=(req,res)=>{
    timetableModel.findByIdAndDelete(req.params.id,(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
}

export const addStudentMarks=(req,res)=>{
    marksModel.create(req.body,(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
}

export const viewStudentMarks=(req,res)=>{
    marksModel.find({},(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
}
export const viewOneStudentMarks=(req,res)=>{
    marksModel.findOne({"hallticket":req.query.hallticket},(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
}

export const showStudentMarks=(req,res)=>{
marksModel.find({"hallticket":req.query.hallticket},(err,result)=>{
    if(err){
        res.send(err)
    }else{
        res.send(result)
    }
})
}

export const updateStudentMarks=(req,res)=>{
    marksModel.findByIdAndUpdate(req.params.id,req.body,{new:true},(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
}

export const deleteStudentMarks=(req,res)=>{
    marksModel.findByIdAndDelete(req.params.id,(err,result)=>{
        if(err){
            res.send(err)
          }else{
            res.send(result)
          }
    })
}

export const searchStudentMarks=(req,res)=>{
    marksModel.find({"hallticket":req.query.hallticket},(err,result)=>{
        if(err){
            res.send(err)
          }else{
            res.send(result)
          }
    })
}

export const viewProfile=(req,res)=>{
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
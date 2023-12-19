import employeeModel from "../common/employeeModel";
import studentModel from "../common/studentModel";
import bookModel from "../common/bookModel";
import studentBookModel from "../common/studentBookModel"


export const login=(req,res)=>{
    employeeModel.findOne({"empid":req.query.empid,"mobileno":req.query.mobileno,"typeofemployee":req.query.typeofemployee},(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
} 

export const addBooks=(req,res)=>{
    bookModel.create(req.body,(err,result)=>{
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

export const updateBooks=(req,res)=>{
    bookModel.findByIdAndUpdate(req.params.id,req.body,{new:true}, (err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
}

export const deleteBook=(req,res)=>{
    bookModel.findByIdAndDelete(req.params.id,(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
}

export const viewStudents=(req,res)=>{
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

export const addStudentBooks=(req,res)=>{
studentBookModel.create(req.body,(err,result)=>{
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
export const searchStudentBooks=(req,res)=>{
    studentBookModel.find({"hallticket":req.query.hallticket},(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
}
export const updateStudentBooks=(req,res)=>{
    studentBookModel.findByIdAndUpdate(req.params.id,req.body,{new:true},(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
}

export const deleteStudentBook=(req,res)=>{
    studentBookModel.findByIdAndDelete(req.params.id,(err,result)=>{
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
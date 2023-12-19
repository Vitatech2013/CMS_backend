import placementCmpanyModel from "../common/placementModel";
import applyJobModel from "../common/applyJobModel";
import studentModel from "../common/studentModel";

export const placementLogin=(req,res)=>{
    placementCmpanyModel.findOne({"emailid":req.body.emailid,"password":req.body.password},(err,result)=>{
      res.send(result)
      console.log(result);
    })
}

export const viewApplyStudents=(req,res)=>{
    applyJobModel.find({"companyname":req.query.companyname},(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
         
        }  
    })
}

export const updateStatus=(req,res)=>{
applyJobModel.findByIdAndUpdate(req.params.id,req.body,{new:true},(err,result)=>{
    if(err){
        res.send(err)
    }else{
        res.send(result)
    }
})
}

export const viewCompanyProfile=(req,res)=>{
    placementCmpanyModel.findOne({"emailid":req.query.emailid},(err,result)=>{
        if(err){
            res.send(errr)
        }else{
            res.send(result)
        }
    })
}

export const updateCompanyProfile=(req,res)=>{
    placementCmpanyModel.findByIdAndUpdate(req.params.id,req.body,{new:true},(err,result)=>{
        if(err){
            res.send(errr)
        }else{
            res.send(result)
        }
    })
}

export const searchStudent=(req,res)=>{
studentModel.find({'hallticket':req.query.hallticket},(err,result)=>{
    if(err){
        res.send(err)
    }else{
        res.send(result)
    }
})
}
import mongoose from "mongoose";

const studentFeeSchema= new mongoose.Schema({
    hallticket:{
        type:String
    },
    studentname:{
        type:String
    },
    branch:{
        type:String
    },
    admissionfee:{
        type:Number
    },
    admissionfeestatus:{
        type:String
    },
    collegefee:{
        type:Number
    },
    collegefeestatus:{
        type:String
    },
    libraryfee:{
        type:Number
    },
    libraryfeestatus:{
        type:String
    },
    jntufee:{
        type:Number
    },
    jntufeestatus:{
        type:String
    },
    busfacility:{
        type:Boolean
    },
    busfee:{
        type:Number
    },
    busfeestatus:{
        type:String
    },
    hostelfee:{
        type:Number
    },
    hostelfacility:{
type:Boolean
    },
    hostelfeestatus:{
        type:String
    },
    clearedby:{
        type:String
    }
},{
    timestamps:true
})

const studentFeeModel=mongoose.model('studentFee',studentFeeSchema)

export default studentFeeModel
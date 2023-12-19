import mongoose from "mongoose";
import router from "..";

const feeSchema= new mongoose.Schema({
    empid:{
        type:String
    },
    year:{
        type:Number
    },
    admissionfee:{
        type:Number
    },
    collegefee:{
        type:Number
    },
    libraryfee:{
        type:Number
    },
    jntufee:{
        type:Number
    },
    busfee:{
        type:Number
    },
    hostelfee:{
        type:Number
    }
})

const feeModel=mongoose.model('fees',feeSchema)

export default feeModel
import { any } from "bluebird";
import mongoose from "mongoose";

const companySchema=new mongoose.Schema({
    companyname: {
        type: String
    },
   joblocation: {
        type:String
    },
    jobrole: {
        type: String
    },
    requiredskills: {
        type: String
    },
    applylastdate: {
        type: String
    },
    companywebsite: {
        type: String,
    }
},{
    timestamps:true
})

const placementCmpanyModel=mongoose.model('placement-company',companySchema)

export default placementCmpanyModel
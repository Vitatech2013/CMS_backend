import mongoose from "mongoose";

const payingFeeSchema= new mongoose.Schema({
    hallticket:{
        type:String
    },
    typeoffee:{
        type:String
    },
    totalfee:{
        type:Number
    },
    payingfee:{
        type:Number
    },
    clearedby:{
        type:String
    }
},{
    timestamps:true
})

const payingFeeModel=mongoose.model('payingFee',payingFeeSchema)

export default payingFeeModel
import mongoose from "mongoose";

const employeeSchema=new mongoose.Schema({

    empid:{
        type:String
    },
    name:{
        type:String
    },
    gender:{
        type:String,
        enum:['male','female','others']
    },
    dob:{
        type:String
    },
    mobileno:{
        type:String
    },
    emailid:{
        type:String
    },
    password:{
        type:String
    },
    typeofemployee:{
        type:String,
    },
    joiningdate:{
        type:String
    },
    qualification:{
        type:String
    },
    yearofexperience:{
        type:String
    },
    designation:{
        type:String
    },
    department:{
        type:String
    },
    salary:{
        type:Number
    },
    address:{
        type:String
    },
    city:{
        type:String
    },
    state:{
        type:String
    },
    pincode:{
        type:Number
    },
    bankname:{
        type:String
    },
    bankaccountno:{
        type:Number
    },
    ifsccode:{
        type:String
    },
    branchname:{
        type:String
    },
    pancardno:{
        type:String
    },
    photo:{
        type:String
    },
    aadharcopy:{
        type:String
    }


},{
    timestamps:true
});

const employeeModel= mongoose.model('employees', employeeSchema)

export default employeeModel
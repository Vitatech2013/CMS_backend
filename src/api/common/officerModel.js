import mongoose from "mongoose";

const officerSchema=new mongoose.Schema({

    officerid:{
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
    joiningdate:{
        type:String
    },
    qualification:{
        type:String
    },
    yearofexperience:{
        type:String
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

const officerModel= mongoose.model('officers', officerSchema)

export default officerModel
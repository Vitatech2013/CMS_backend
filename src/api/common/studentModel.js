import mongoose from "mongoose";


const studentSchema= new mongoose.Schema({
    firstname:{
        type:String
    },
    lastname:{
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
    hallticket:{
        type:String
    },
    password:{
        type:String
    },
    religion:{
        type:String
    },
    caste:{
        type:String
    },
    parentname:{
        type:String
    },
    parentprofession:{
        type:String
    },
    parentsmobileno:{
        type:String
    },
    familyincome:{
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
    joiningdate:{
        type:String
    },
    eamcetrank:{
        type:String
    },
    branch:{
        type:String
    },
    typeofStudent:{
        type:String,
        enum:['dayscholar', 'hosteller']
    },
    photo:{
        type:String
    },
    aadharcopy:{
        type:String
    },
    allotmentorder:{
        type:String
    },
    adminssionfee:{
        type:String
    },

},{
    timestamps:true
});

const studentModel=mongoose.model('students', studentSchema)

export default studentModel
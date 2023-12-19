import mongoose from "mongoose"

const timetableSchema= new mongoose.Schema({
    day:{
        type:String
    },
    branch:{
        type:String
    },
    hour1:{
        type:String
    },
    hour2:{
        type:String
    },
    hour3:{
        type:String
    },
    hour4:{
        type:String
    },
    subject1:{
        type:String
    },
    subject2:{
        type:String
    },
    subject3:{
        type:String
    },
    lab:{
        type:String
    },
    faculty1:{
        type:String
    },
    faculty2:{
        type:String
    },
    faculty3:{
        type:String
    },
    labasst:{
        type:String
    }
},{
    timestamps:true
})

const timetableModel= mongoose.model('time-table', timetableSchema)

export default timetableModel
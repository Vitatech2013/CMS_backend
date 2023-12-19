import mongoose from "mongoose";

const studentBookSchema= new mongoose.Schema({
    librarian:{
        type:String
    },
hallticket:{
    type:String
},
studentname:{
    type:String
},
bookname:{
    type:String
},
author:{
    type:String
},
branchname:{
type:String
},
date:{
    type:String
},
fine:{
    type:String
},
clearedBy:{
    type:String
}
},{
    timestamps:true
})

const studentBookModel=mongoose.model('studentBooks', studentBookSchema)

export default studentBookModel
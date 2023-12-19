import mongoose from "mongoose";

const bookSchema=new mongoose.Schema({
    bookname:{
        type:String
    },
    author:{
        type:String
    },
    department:{
        type:String
    },
    quantity:{
        type:Number
    }
},{
    timestamps:true
})

const bookModel=mongoose.model('books',bookSchema)

export default bookModel
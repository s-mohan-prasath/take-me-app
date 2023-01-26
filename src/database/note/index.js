import mongoose, { MongooseError } from 'mongoose'

const NoteSchema = new mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    categoryList:[
        {ref:'categorys',type:mongoose.Types.ObjectId}
    ],
    user:{type:mongoose.Types.ObjectId,ref:"users"}
})

export const NoteModel = mongoose.model("notes",NoteSchema);
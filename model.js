import { Model, Schema, model } from "mongoose";


const userSchema = new Schema({
    full_name:{
        type:String,
        required:true
    },
    mob_num:{
        type:Number,
        required:true
    },
    pan_num:{
        type:String,
        required:true
    },
    manager_id:{
        type:String,
        required:true
    }

})

const User = model('User', userSchema)

export default User
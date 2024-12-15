import mongoose from "mongoose";

const connectDb = async ()=>{

    try{
        await mongoose.connect('mongodb://localhost:27017/usermanage')
        console.log('db is connected')
    }
    catch(e){
        console.log(e.message)
    }
}

export default connectDb
import mongoose from "mongoose";
const uri = process.env.MONGODB_URI
console.log(uri)
export default async function connectMongodb(){
    try {
        await mongoose.connect(process.env.MONGODB_URI)
    } catch (error) {
        console.log(error)
    }
}